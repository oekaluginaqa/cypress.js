const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 900,
    viewportWidth: 1147,
    blockHosts: ["*mc.yandex.ru"],
  },
});