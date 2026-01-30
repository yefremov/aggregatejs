# GitHub Pages Setup Instructions

Your TypeDoc documentation has been generated and is ready to be published on GitHub Pages!

## What's Been Done

✅ **TypeDoc installed** - Professional API documentation generator
✅ **Configuration created** - `typedoc.json` with optimized settings
✅ **Documentation generated** - HTML documentation in the `docs/` folder
✅ **npm scripts added** - `npm run docs` and `npm run docs:watch`
✅ **GitHub Actions workflow** - Automatically regenerates docs on changes

## How to Enable GitHub Pages

Follow these steps to publish your documentation:

### 1. Push Changes to GitHub

First, commit and push all the new files:

```bash
git add .
git commit -m "docs: add TypeDoc GitHub Pages setup"
git push origin master
```

### 2. Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: https://github.com/yefremov/aggregatejs
2. Click on **Settings** (top menu)
3. Scroll down to the **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `master`
   - Folder: `/docs`
5. Click **Save**

### 3. Wait for Deployment

GitHub Pages will take 1-2 minutes to deploy. Once ready, your documentation will be live at:

**https://yefremov.github.io/aggregatejs/**

### 4. Add Documentation Link to README (Optional)

You can add a badge to your README.md:

```markdown
[![Documentation](https://img.shields.io/badge/docs-TypeDoc-blue)](https://yefremov.github.io/aggregatejs/)
```

## Updating Documentation

### Manual Updates

Anytime you want to regenerate the documentation manually:

```bash
npm run docs
```

### Automatic Updates

The GitHub Actions workflow (`.github/workflows/docs.yml`) will automatically:
- Regenerate documentation when you push changes to `src/`, `README.md`, or config files
- Commit the updated docs back to the repository
- Trigger a new GitHub Pages deployment

## Development

While developing, you can use watch mode to auto-regenerate docs:

```bash
npm run docs:watch
```

## Documentation Features

Your documentation includes:

- ✅ All exported functions with type signatures
- ✅ JSDoc comments and examples from your source code
- ✅ Parameter and return type documentation
- ✅ Error handling information (@throws tags)
- ✅ README.md as the landing page
- ✅ Full-text search functionality
- ✅ Responsive design
- ✅ Direct links to source code on GitHub
- ✅ Navigation by modules and functions

## Troubleshooting

**Documentation not showing up?**
- Make sure you've pushed the `docs/` folder to GitHub
- Check that GitHub Pages is enabled in repository settings
- Wait a few minutes for GitHub Pages to deploy

**Want to customize the documentation?**
- Edit `typedoc.json` to change configuration
- Run `npm run docs` to regenerate
- Push changes to update the live site

**GitHub Actions workflow needs permissions?**
- Go to Settings → Actions → General
- Under "Workflow permissions", select "Read and write permissions"
- Click Save
