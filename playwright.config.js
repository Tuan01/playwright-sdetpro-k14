const {defineConfig, devices} = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    project: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome']},
        }
    ],
    reporter: 'html',
    // retries: process.env.CI ? 2 : 1,
    use: {
        viewport: { width: 1920, height: 1080 },
        actionTimeout: 5 * 1000,
        trace: 'on-first-retry',
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
    }
})