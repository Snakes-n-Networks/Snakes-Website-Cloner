# Snakes-Website-Cloner
Here’s a detailed README file for your Chrome extension, which you can use to guide users on how to install, use, and contribute to the project.

### **README.md**

```markdown
# Website Downloader Chrome Extension

Website Downloader is a simple Chrome extension that allows users to download the current webpage as an HTML file. This extension captures the HTML structure of the page and saves it locally, making it easy to keep offline copies of web content.

## Features

- Download the currently viewed webpage as an HTML file.
- Simple and intuitive user interface.
- Works on most websites by capturing HTML content.

## Installation

1. Clone or download the repository to your local machine.

   ```bash
   git clone https://github.com/your-username/website-downloader-extension.git
   ```

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer mode** by toggling the switch in the top right corner.

4. Click on **Load unpacked** and select the project folder (`website-downloader-extension`).

5. The extension should now appear in your Chrome toolbar.

## Usage

1. Navigate to any webpage you wish to download.

2. Click on the Website Downloader extension icon in the Chrome toolbar.

3. Click the **Download Page** button in the popup.

4. The page will be saved as an HTML file, allowing you to view it offline.

## Project Structure

- **manifest.json**: Configuration file that defines the extension’s permissions, scripts, and behavior.
- **popup.html**: The HTML layout for the extension’s popup window.
- **popup.js**: Handles user interactions and initiates the download of the webpage.
- **background.js**: Manages the download request and saves the file locally.
- **icon.png**: The icon for the extension displayed in the Chrome toolbar.

## Troubleshooting

- If the extension does not work, make sure all file names are correct and located in the right paths as specified in the `manifest.json`.
- Check the Chrome DevTools console for any errors by right-clicking inside the popup window and selecting **Inspect**.
- Reload the extension from `chrome://extensions/` after making any changes to the code.

## Permissions

The extension requires the following permissions:

- **activeTab**: To access the currently open tab.
- **downloads**: To save files locally on your device.
- **scripting**: To run scripts on the current webpage.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by HTTrack and various web scraping tools.
- Built using Chrome’s extension API documentation.

## Contact

For any questions or feedback, please open an issue on GitHub or contact the project maintainer at SnakesNnetworks@gmail.com.
```
