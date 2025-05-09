// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 * This configuration enables Playwright to run tests in multiple browsers/devices
 * with advanced features like retry logic, trace collection, and reporting.
 */

export default defineConfig({
  // Directory where your test files are located
  testDir: './e2e',

  // Run tests in parallel within a file
  fullyParallel: true,

  // Fail build if test.only is accidentally committed (useful in CI)
  forbidOnly: !!process.env.CI,

  // Retry failed tests in CI twice
  retries: process.env.CI ? 2 : 0,

  // Use 1 worker in CI for stability, full power locally
  workers: process.env.CI ? 1 : undefined,

  // Reporter options: html (local), line (CI), or combine multiple
  reporter: process.env.CI
    ? [['list'], ['allure-playwright']] // Example combo: list + allure
    : [['html'], ['allure-playwright']],

  // Global timeout for one test (in ms)
  timeout: 30 * 1000, // 30 seconds

  // Global use configuration for all projects
  use: {
    // Set a base URL to simplify `page.goto('/somepage')`
    baseURL: 'https://your-base-url.com',

    // Capture trace only on retry to debug flaky tests
    trace: 'on-first-retry',

    // Capture video for all tests (can also use 'on' or 'retain-on-failure')
    video: 'retain-on-failure',

    // Capture screenshot on failure only
    screenshot: 'only-on-failure',

    // Headless is true by default, but can be false for debugging
    headless: true,

    // Browser context isolation
    contextOptions: {
      ignoreHTTPSErrors: true,
    },

    // Set a default viewport for consistency
    viewport: { width: 1280, height: 720 },

    // Action timeout for click, fill, etc.
    actionTimeout: 10 * 1000, // 10 seconds

    // Navigation timeout
    navigationTimeout: 15 * 1000, // 15 seconds
  },

  // Define browser/device projects
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Additional overrides if needed
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
    {
      name: 'Mobile Safari',
      use: {
        ...devices['iPhone 12'],
      },
    },
    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge', // Requires browser installed
      },
    },
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome', // Runs branded Chrome
      },
    },
  ],

  // Run your dev server before testing (useful for React/Angular/Vue apps)
  webServer: {
    command: 'npm run start', // Replace with your dev command
    port: 3000,               // Update as per your app
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  // Output directory for test artifacts like videos, traces, screenshots
  outputDir: 'test-results/',

  // Global setup/teardown support (optional)
  // globalSetup: './global-setup.js',
  // globalTeardown: './global-teardown.js',
});
