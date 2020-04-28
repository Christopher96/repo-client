const moduleAlias = require('module-alias');

const destPath = process.argv[1].split(/index\...$/)[0];

console.log('>>>>>>>' + destPath);
moduleAlias.addAliases({
  '@src': `${destPath}`,
  '@api': `${destPath}/api`,
  '@cli': `${destPath}/cli`,
  '@database': `${destPath}/database`,
  '@classes': `${destPath}/classes`,
  '@common': `${destPath}/common`,
  '@events': `${destPath}/events`
});

import Bootstrap from './Bootstrap';
Bootstrap.init();