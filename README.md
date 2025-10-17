# Micro.Masonry Plus

![](icon.png)

**Micro.Masonry Plus** adds a responsive masonry-style gallery to your Micro.blog photos page.  
This fork is maintained by [René Fischer](https://fischr.org) and is based on [jimmitchell/micro-masonry](https://github.com/jimmitchell/micro-masonry).

## ✅ Features
- Collects **all images** from your posts (front matter, Markdown, and HTML)
- Configurable **allowed file extensions**
- Adjustable **column counts** for desktop, tablet, and mobile breakpoints
- Lightweight lazy loading with graceful loading and error states
- Pure CSS/JS solution that respects your existing Micro.blog theme

## 📦 Installation
Install the plug-in from the **Micro.blog plug-in directory** or upload this repository as a custom plug-in. After installation, open the plug-in settings to configure it.

## 📝 Usage
Assign the plug-in to your site and visit `/photos` (or your custom photos URL).  
If you specify a photos category, only posts in that category are displayed; otherwise, every post image is considered.

## ⚙️ Plugin Settings
All options are available in the Micro.blog plug-in settings panel:
- `Photos category` – limit the gallery to a specific category (optional)
- `Allowed photo extensions` – comma-separated list of file types (default `jpg,jpeg,png,gif,webp,avif,heic,heif,tiff,bmp`)
- `Desktop column count` – number of masonry columns above 1200 px (default `4`)
- `Tablet column count` – number of columns between 600 px and 1200 px (default `3`)
- `Mobile column count` – number of columns below 600 px (default `2`)

## 🙏 Credits
- [jimmitchell/micro-masonry](https://github.com/jimmitchell/micro-masonry) – original plug-in
- Micro.blog community for inspiration and testing

## Changelog

### 2.1.0
- Added settings for customizable column counts on desktop, tablet, and mobile
- Added configurable photo extensions with sensible defaults
- Gathered all images per post (front matter, Markdown, and HTML) instead of only the first photo
- Improved lazy-loading behavior and alt text handling

### 2.0.0
- Initial release of the original Micro.Masonry plug-in by jimmitchell
