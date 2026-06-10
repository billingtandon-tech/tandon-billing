/*
  Tandon Network Billing - Netlify Function Proxy khusus MikroTik

  Web tetap jalan langsung ke Google Apps Script.
  MikroTik lewat function ini supaya tidak kena masalah redirect 302 Google Apps Script.

  Netlify Environment Variables:
  - APPS_SCRIPT_URL = URL Web App Google Apps Script, contoh https://script.google.com/macros/s/AKfy.../exec
  - MIKROTIK_TOKEN  = token yang sama dengan menu Pengaturan web dan script MikroTik

  Endpoint MikroTik:
  POST https://DOMAIN-NETLIFY-ANDA.netlify.app/.netlify/functions/mikrotik

  Body contoh:
  {"action":"getPendingCommandText","token":"TANDON12345"}
  {"action":"updateCommand","source":"mikrotik","token":"TANDON12345","id":"...","status":"DONE","message":"..."}
*/

exports.handler = async function(event) {
  const headersJson = {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, X-Tandon-Token',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  const headersText = {
    ...headersJson,
    'Content-Type': 'text/plain; charset=utf-8'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers: headersJson, body: JSON.stringify({ ok: true }) };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: headersText, body: 'ERROR|METHOD_NOT_ALLOWED' };
  }

  const appsScriptUrl = process.env.APPS_SCRIPT_URL || '';
  const expectedToken = process.env.MIKROTIK_TOKEN || '';

  if (!appsScriptUrl) {
    return { statusCode: 200, headers: headersText, body: 'ERROR|NETLIFY|APPS_SCRIPT_URL_BELUM_DIATUR' };
  }

  let body = {};
  try {
    body = JSON.parse(event.body || '{}');
  } catch (error) {
    return { statusCode: 200, headers: headersText, body: 'ERROR|BAD_JSON' };
  }

  const incomingToken =
    body.token ||
    event.headers['x-tandon-token'] ||
    event.headers['X-Tandon-Token'] ||
    '';

  if (expectedToken && String(incomingToken).trim() !== String(expectedToken).trim()) {
    return { statusCode: 200, headers: headersText, body: 'ERROR|TOKEN_INVALID' };
  }

  const action = body.action || 'getPendingCommandText';

  try {
    if (action === 'getPendingCommandText' || action === 'getPendingCommand') {
      const text = await callAppsScriptText(appsScriptUrl, {
        action: 'getPendingCommandText',
        source: 'mikrotik',
        token: incomingToken
      });

      return { statusCode: 200, headers: headersText, body: cleanResponse(text) };
    }

    if (action === 'updateCommand') {
      const text = await callAppsScriptText(appsScriptUrl, {
        action: 'updateCommand',
        source: 'mikrotik',
        token: incomingToken,
        id: body.id || '',
        status: body.status || '',
        message: body.message || ''
      });

      const parsed = safeJson(text);
      if (parsed && parsed.ok) {
        return { statusCode: 200, headers: headersText, body: 'OK|UPDATE_COMMAND' };
      }

      return {
        statusCode: 200,
        headers: headersText,
        body: 'ERROR|UPDATE_COMMAND|' + cleanField((parsed && parsed.message) || text || 'Gagal update command')
      };
    }

    return { statusCode: 200, headers: headersText, body: 'ERROR|ACTION_TIDAK_DIKENAL|' + cleanField(action) };
  } catch (error) {
    return { statusCode: 200, headers: headersText, body: 'ERROR|NETLIFY|' + cleanField(error.message) };
  }
};

async function callAppsScriptText(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    redirect: 'follow',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(payload)
  });

  return await response.text();
}

function safeJson(text) {
  try { return JSON.parse(text); } catch (error) { return null; }
}

function cleanResponse(text) {
  const value = String(text || '').trim();
  if (!value) return 'EMPTY';
  if (value.startsWith('OK|') || value === 'EMPTY' || value.startsWith('ERROR|')) return value;

  const parsed = safeJson(value);
  if (parsed && parsed.ok && parsed.data) {
    return [
      'OK',
      cleanField(parsed.data.id),
      cleanField(parsed.data.action),
      cleanField(parsed.data.username),
      cleanField(parsed.data.profile)
    ].join('|');
  }
  if (parsed && parsed.ok && !parsed.data) return 'EMPTY';
  if (parsed && parsed.message) return 'ERROR|APPS_SCRIPT|' + cleanField(parsed.message);

  return 'ERROR|APPS_SCRIPT|RESPONSE_TIDAK_VALID';
}

function cleanField(value) {
  return String(value || '')
    .replace(/\|/g, '-')
    .replace(/\r?\n|\r/g, ' ')
    .trim();
}
