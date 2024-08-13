const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qauto.forstudy.space', 
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    videosFolder: 'videos',
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome",
      overwrite: false,
      html: true,
      json: true,
      charts: true,
    },
    screenshotsFolder: 'screenshots',
    retries: {
      runMode: 2,
      openMode: 0
    },
    supportFile: 'cypress/support/index.js'
  },
});
