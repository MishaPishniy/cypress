require('cypress-xpath');

// cypress/support/index.js

import './commands';

const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};
