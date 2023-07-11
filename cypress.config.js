const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://10.4.10.231:7276',
    hideXHRInCommandLog: true
  },
  
    viewportWidth: 1920,
    viewportHeight: 1080,
});
