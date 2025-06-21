# Motivation - Age Counter Extension

A Chrome extension that replaces your new tab page with a real-time display of your age, inspired by the concept of memento mori and the original work by Alex MacCaw.

![Extension Preview](images/screenshot_dark_1280x800.png)
![Extension Preview](images/screenshot_light_1280x800.png)

## 🎯 Purpose

This extension serves as a gentle reminder of the passage of time by displaying your current age with precision down to milliseconds. It's designed to motivate and inspire mindful living.

## ✨ Features

- **Real-time age calculation** with millisecond precision
- **Clean, minimalist design** that doesn't distract
- **Privacy-focused** - all data stays local in your browser
- **Dark mode support** - automatically adapts to your system preferences
- **Lightweight** - minimal resource usage

## 🔒 Privacy

This extension:
- ✅ Only stores your birth date locally in your browser
- ✅ Never sends any data to external servers
- ✅ No tracking, analytics, or third-party services
- ✅ Works completely offline

## 📥 Installation

### From Chrome Web Store
1. Visit the [Chrome Web Store page](link-to-be-added)
2. Click "Add to Chrome"
3. Enter your birth date when prompted

### Manual Installation (Development)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode"
4. Click "Load unpacked" and select the extension folder
5. Enter your birth date when you open a new tab

## 🛠️ Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: None required
- **Storage**: Uses Chrome's local storage API
- **Framework**: Vanilla JavaScript (no external dependencies)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

This extension was inspired by the original "Motivation" extension created by [Alex MacCaw](https://github.com/maccman) in 2013. This is an independent modernized implementation that maintains the core concept while updating it for current Chrome extension standards.

## 🐛 Issues & Support

If you encounter any issues or have suggestions, please [create an issue](https://github.com/1gory/motivation-age-counter/issues) on GitHub.

## 🔄 Changelog

### Version 1.0.0
- Initial release with Manifest V3
- Modern JavaScript implementation
- Privacy-focused design
- Dark mode support
