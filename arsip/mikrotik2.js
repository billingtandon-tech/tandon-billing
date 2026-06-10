/*
  Tandon Network Billing - Netlify Function Proxy MikroTik
  Tahap 11: format command sederhana untuk RouterOS.

  ENV Netlify:
  APPS_SCRIPT_URL = URL Web App Google Apps Script
  MIKROTIK_TOKEN  = token yang sama dengan script MikroTik

  Endpoint:
  POST /.netlify/functions/mikrotik

  Action:
  - getPendingCommand      -> JSON
  - getPendingCommandText  -> Text mudah diparse MikroTik
  - updateCommand          -> update status DONE / ERROR
*/

exports.handler = async function(event) {
  const headersJson = {
    'Content-Type': 'application/json',
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
    return {
      statusCode: 405,
      headers: headersJson,
      body: JSON.stringify({ ok: false, message: 'Method not allowed' })
    };
  }

  try {
    const appsScriptUrl = process.env.APPS_SCRIPT_URL;
    const token = process.env.MIKROTIK_TOKEN || '';

    if (!appsScriptUrl) {
      return {
        statusCode: 500,
        headers: headersJson,
        body: JSON.stringify({ ok: false, message: 'APPS_SCRIPT_URL belum diatur di Netlify' })
      };
    }

    const incomingToken =
      event.headers['x-tandon-token'] ||
      event.headers['X-Tandon-Token'] ||
      '';

    if (token && incomingToken !== token) {
      return {
        statusCode: 401,
        headers: headersJson,
        body: JSON.stringify({ ok: false, message: 'Token tidak valid' })
      };
    }

    const body = JSON.parse(event.body || '{}');
    const action = body.action || 'getPendingCommand';

    if (action === 'getPendingCommandText') {
      const result = await callAppsScript(appsScriptUrl, { action: 'getPendingCommand' });
      const parsed = safeJson(result);

      if (!parsed.ok) {
        return { statusCode: 200, headers: headersText, body: 'ERROR|APPS_SCRIPT|' + cleanField(parsed.message || 'Gagal Apps Script') };
      }

      if (!parsed.data) {
        return { statusCode: 200, headers: headersText, body: 'EMPTY' };
      }

      const cmd = parsed.data;

      // Format: OK|id|action|username|profile
      const text = [
        'OK',
        cleanField(cmd.id),
        cleanField(cmd.action),
        cleanField(cmd.username),
        cleanField(cmd.profile)
      ].join('|');

      return { statusCode: 200, headers: headersText, body: text };
    }

    if (action === 'updateCommand') {
      const result = await callAppsScript(appsScriptUrl, {
        action: 'updateCommand',
        id: body.id || '',
        status: body.status || '',
        message: body.message || ''
      });

      return { statusCode: 200, headers: headersJson, body: result };
    }

    const result = await callAppsScript(appsScriptUrl, {
      action,
      id: body.id || '',
      status: body.status || '',
      message: body.message || ''
    });

    return {
      statusCode: 200,
      headers: headersJson,
      body: result
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: headersJson,
      body: JSON.stringify({
        ok: false,
        message: error.message
      })
    };
  }
};

async function callAppsScript(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(payload)
  });

  return await response.text();
}

function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return { ok: false, message: 'Response bukan JSON valid' };
  }
}

function cleanField(value) {
  return String(value || '')
    .replace(/\|/g, '-')
    .replace(/\r?\n|\r/g, ' ')
    .trim();
}
