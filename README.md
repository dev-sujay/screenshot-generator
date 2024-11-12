# Screenshot Generator

A simple and flexible utility for generating screenshots of webpages. This package allows you to capture a screenshot of a webpage either in **desktop** or **mobile** view, and saves it to a specified directory. It uses **Puppeteer** to automate the process of loading a webpage, simulating the viewport size (desktop or mobile), and capturing a screenshot.

[![GitHub](https://img.shields.io/github/repo-size/dev-sujay/screenshot-generator)](https://github.com/dev-sujay/screenshot-generator)
[![Stars](https://img.shields.io/github/stars/dev-sujay/screenshot-generator)](https://github.com/dev-sujay/screenshot-generator)

---

### Features
- Capture screenshots of webpages in both **desktop** and **mobile** views.
- Save screenshots in a specified directory.
- Customizable viewport sizes.
- Supports modern **headless** browser technology via Puppeteer.

---

### Installation

To install the package, run:

```bash
npm install screenshot-generator
```


### Usage

To capture in desktop view

```bash
const { generateScreenshot } = require('screenshot-generator');

(async () => {
    try {
        const url = 'https://example.com';
        const destinationPath = './screenshots';
        const width = 1280;  // Width of the desktop view
        const height = 720;  // Height of the desktop view
        
        const screenshotPath = await generateScreenshot(url, destinationPath, width, height);
        console.log(`Screenshot saved at: ${screenshotPath}`);
    } catch (error) {
        console.error('Error generating screenshot:', error);
    }
})();
```

To capture in mobile view

```bash
const { generateScreenshot } = require('screenshot-generator');

(async () => {
    try {
        const url = 'https://example.com';
        const destinationPath = './screenshots';
        
        // For mobile screenshot with default mobile viewport size
        const screenshotPath = await generateScreenshot(url, destinationPath, undefined, undefined, 'mobile');
        console.log(`Screenshot saved at: ${screenshotPath}`);
    } catch (error) {
        console.error('Error generating screenshot:', error);
    }
})();
```

### Parameters

- url: The URL of the webpage to capture.
- destinationPath: The folder where the screenshot should be saved.
- width: The width of the viewport in pixels (default: 1280 for desktop).
- height: The height of the viewport in pixels (default: 720 for desktop).
- device: The device mode ('desktop' or 'mobile'). Mobile will emulate a mobile device (default: 'desktop').


### Contribution

If you would like to contribute to this project, feel free to submit issues, forks, and pull requests! Any improvements are greatly appreciated.



### 🧑‍💻 GitHub Repository
Check out the repository for the full code and more information:
**GitHub Repository**: [https://github.com/dev-sujay/screenshot-generator](https://github.com/dev-sujay/screenshot-generator)



[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/devsujay)


