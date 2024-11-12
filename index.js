const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');
const devices = puppeteer.devices;  // Import devices for mobile emulation

/**
 * Captures a screenshot of the specified URL and saves it to the destination path.
 * 
 * @param {string} url - The URL of the webpage to capture.
 * @param {string} destinationPath - The folder where the screenshot should be saved.
 * @param {number} [width=1280] - The width of the viewport in pixels (used for desktop).
 * @param {number} [height=720] - The height of the viewport in pixels (used for desktop).
 * @param {string} [device='desktop'] - The device mode ('desktop' or 'mobile').
 * @returns {string} - The path to the saved screenshot.
 */
async function generateScreenshot(url, destinationPath, width = 1280, height = 720, device = 'desktop') {
    if (!url || !/^https?:\/\/\w+/.test(url)) {
        throw new Error('A valid URL is required');
    }

    const filename = `screenshot-${uuidv4()}.png`;
    const screenshotPath = path.join(destinationPath, filename);

    await fs.mkdir(destinationPath, { recursive: true });

    // Launch Puppeteer with the new headless mode
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Adjust the viewport for mobile or desktop mode
    if (device === 'mobile') {
        const mobileDevice = devices['iPhone 6'];  // You can choose other devices from puppeteer.devices
        await page.emulate(mobileDevice);
        // Set width and height to match the selected mobile device (iPhone 6 by default)
        width = mobileDevice.viewport.width;
        height = mobileDevice.viewport.height;
    } else {
        // Set the custom width and height for desktop mode
        await page.setViewport({ width, height });
    }

    await page.goto(url, { waitUntil: 'networkidle2' });

    await page.screenshot({
        path: screenshotPath,
        clip: { x: 0, y: 0, width, height },
    });

    await browser.close();

    return screenshotPath;
}

module.exports = {
    generateScreenshot,
};
