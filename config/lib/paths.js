const path = require('path');

const resolveApp = (relativePath) => path.join(__dirname, '../../', relativePath);

module.exports = {
  resolveApp,
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appSrc: resolveApp('src'),
  appDemo: resolveApp('demo'),
  appDist: resolveApp('dist'),
  appTsConfig: resolveApp('tsconfig.json'),
  package: resolveApp('package.json'),
};
