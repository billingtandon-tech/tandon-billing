exports.handler = async function(event) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTIONS'
    },
    body: JSON.stringify({
      ok: true,
      appsScriptUrl: process.env.APPS_SCRIPT_URL || ''
    })
  };
};
