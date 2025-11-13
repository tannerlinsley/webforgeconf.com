# Adding Your Creator Entry

Thank you for being part of Web Forge Conference! This guide will help you add your project/creator entry to the website.

## Steps to Add Your Entry

### 1. Prepare Your Logo Image

- **Format**: PNG format is recommended (JPG/JPEG also accepted)
- **Shape**: Round/circular images are preferred (the site displays logos in circular badges)
- **Dimensions**: **400px × 400px** (square, 1:1 aspect ratio)
- **File size**: **Maximum 100KB** - optimize your image to keep it under this limit
- **Background**: Transparent backgrounds are preferred, but solid backgrounds work too
- **File naming**: Use lowercase, no spaces (e.g., `myproject.png`, `awesome-tool.png`)

> **⚠️ Important**: Non-circular images will be automatically cropped to a circle. Make sure your logo looks good when cropped to a circular shape, or provide a pre-cropped circular version.

### 2. Upload Your Image

1. Navigate to the `public/creators/` directory in this repository
2. Upload your logo image file to this directory
3. Make sure the filename matches what you'll use in the JSON entry

### 3. Add Your Entry to creators.json

1. Open `src/data/creators.json`
2. Add a new entry to the array following this format:

```json
{
  "name": "Your Project Name",
  "image": "/creators/your-logo-filename.png",
  "url": "https://your-project-website.com"
}
```

**Example:**

If your project is called "Awesome Framework", your logo file is `awesome-framework.png`, and your website is `https://awesomeframework.com`, your entry would look like:

```json
{
  "name": "Awesome Framework",
  "image": "/creators/awesome-framework.png",
  "url": "https://awesomeframework.com"
}
```

**Note**: The `url` field is optional. If you don't provide a URL, the card won't be clickable.

### 4. Complete Example

Here's what a complete `creators.json` file might look like with multiple entries:

```json
[
  {
    "name": "TanStack",
    "image": "/creators/tanstack.png",
    "url": "https://tanstack.com"
  },
  {
    "name": "Awesome Framework",
    "image": "/creators/awesome-framework.png",
    "url": "https://awesomeframework.com"
  },
  {
    "name": "Your Project",
    "image": "/creators/your-project.png",
    "url": "https://yourproject.com"
  }
]
```

## Important Notes

- **Image path**: Always use `/creators/` as the path prefix (not `public/creators/`)
- **JSON format**: Make sure your JSON is valid - include commas between entries, but no trailing comma after the last entry
- **Order**: Entries will appear in the order they're listed in the JSON file
- **Placeholders**: The site automatically adds placeholder badges if there are fewer than 3 creators, so don't worry about adding placeholders manually

## Need Help?

If you have questions or need assistance, please reach out to the Web Forge Conference team.

Thank you for being part of Web Forge Conference! 🎉
