const express = require('express');
const path = require('path');

export default async function nextCustomServer(app, settings, proxyConfig) {
  console.log('>>>', app, settings, proxyConfig);
  const handle = app.getRequestHandler();
  await app.prepare();

  const x: string = 'custom typescript server running';
  console.log(x);

  const server = express();
  server.disable('x-powered-by');

  server.use(
    express.static(path.resolve(settings.dir, settings.conf.outdir, 'public'))
  );

  // Default catch-all handler to allow Next.js to handle all other routes
  server.all('*', (req, res) => handle(req, res));

  server.listen(settings.port, settings.hostname);
}

