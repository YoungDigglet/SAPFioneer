import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  screenshotsFolder: 'cypress/screenshots',
  fixturesFolder: 'cypress/fixtures',
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    FAIL_FAST_STRATEGY: 'spec',
    FAIL_FAST_ENABLED: true,
    FAIL_FAST_BAIL: 1,
  },
  e2e: {
    baseUrl: 'https://www.sapfioneer.com/',
    excludeSpecPattern: ['cypress/e2e/**/*.po.ts'],
    specPattern: 'cypress/e2e/**/*',
    testIsolation: false,
    experimentalFetchPolyfill: true,
    chromeWebSecurity: false,
    trashAssetsBeforeRuns: true,
  },

})
