const { generateScreenshot } = require('./index');

(async () => {
    try {
        const url = 'https://sujaypaul.netlify.app';
        const destinationPath = './screenshot';
        const width = 1280;  // Width of the desktop view
        const height = 720;  // Height of the desktop view
        const device = 'mobile'
        
        const screenshotPath = await generateScreenshot(url, destinationPath, width, height, device);
        console.log(`Screenshot saved at: ${screenshotPath}`);
    } catch (error) {
        console.error('Error generating screenshot:', error);
    }
})();
