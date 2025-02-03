# Dark Mode - Chrome Extension

[中文 (Chinese)](README_CN.md) | [日本語 (Japanese)](README_JP.md)

A Google Chrome extension that applies a dark theme to all websites, making browsing more comfortable in low-light environments. Customize colors and whitelist specific sites to ensure a seamless experience.

## Features
- **Dark Theme for All Websites**: Automatically applies a dark theme to every website you visit.
- **Customizable Colors**: Adjust the theme colors to suit your preferences.
- **Whitelist Support**: Exclude specific websites from the dark theme.
- **Auto Schedule**: Enable dark mode during specific times of the day.

## Installation
1. Download the `.crx` file or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Drag and drop the `.crx` file into the extensions page or load the unpacked extension.

## Usage
- Click the extension icon to toggle the dark theme on/off.
- Use the options page to customize colors, manage whitelist, and set up auto-schedule.

## Development (AI Gen)
To modify or build the extension:
1. Clone the repository.
2. Install dependencies (if any) using `npm install`.
3. Use a bundler like Parcel to build the extension:
   ```bash
   parcel build src/background/index.js src/options/options.js
   ```
4. Load the unpacked extension in Chrome.

## Original Extension
This project is based on the original extension available at:
[Original Super Dark Mode Extension](https://chrome.google.com/webstore/detail/super-dark-mode/your-extension-id)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



For the to-do list for this project, please refer to the [To-Do List](TODO.md) file.
