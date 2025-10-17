# Micro.Masonry Plus
![](icon.png)

**Micro.Masonry Plus** adds a responsive masonry-style gallery to your Micro.blog photos page.  
This fork is maintained by [René Fischer](https://fischr.org) and is based on [jimmitchell/micro-masonry](https://github.com/jimmitchell/micro-masonry).

## ✅ Features
- Collects **all images** from your posts (front matter, Markdown, and HTML) with an option to keep just the first
- Configurable **allowed file extensions**
- Adjustable **column counts** for desktop, tablet, and mobile breakpoints
- Optional **layout mode** to choose column-first or row-first arrangement
- Section exclusions to keep non-photo pages (e.g. book covers) out of the gallery
- Lightweight lazy loading with graceful loading and error states
- Pure CSS/JS solution that respects your existing Micro.blog theme

![](docs/example.jpg)

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
- `Show all photos per post` – toggle to display every photo or only the first image from each post (default `true`)
- `Layout mode` – choose between `columns` (column-first Masonry) and `rows` (row-first Masonry) (default `columns`)
- `Exclude sections` – comma-separated list of sections that should never appear in the gallery (e.g. `books,reading`)

## 🙏 Credits
- [jimmitchell/micro-masonry](https://github.com/jimmitchell/micro-masonry) – original plug-in
- Micro.blog community for inspiration and testing

## Changelog

### 2.4.0
- Added exclusion list for sections (e.g. bookshelf pages) and exposed it as a plug-in setting
- `Show all photos per post` is now a checkbox in Micro.blog settings
- Removed gray loading background behind photos for cleaner presentation

### 2.3.0
- Added optional layout mode to switch between column-first and row-first masonry ordering
- Introduced CSS Grid-based layout for row-first mode with responsive column counts
- Improved image load handler to recalculate grid spans on resize
- Fixed custom extension filtering so excluded file types are respected

### 2.2.0
- Added setting to toggle whether every photo per post is shown or only the first image
- Replaced `findRESubmatch` usage for wider Hugo compatibility

### 2.1.0
- Added settings for customizable column counts on desktop, tablet, and mobile
- Added configurable photo extensions with sensible defaults
- Gathered all images per post (front matter, Markdown, and HTML) instead of only the first photo
- Improved lazy-loading behavior and alt text handling

### 2.0.0
- Initial release of the original Micro.Masonry plug-in by jimmitchell
