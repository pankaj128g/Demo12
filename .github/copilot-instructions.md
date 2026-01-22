# Copilot Instructions for Apna College Practice Repository

## Project Overview

This is a **front-end practice/learning repository** containing HTML, CSS, and JavaScript exercises from Apna College web development course. The project is organized as a flat structure with practice problems labeled as `PQs*.html` (Practice Questions) and various learning examples (e.g., `bootstrap*.html`, `form_input.html`).

## Key Project Characteristics

- **Nature**: Educational practice exercises (not a production application)
- **Stack**: Vanilla HTML5, CSS3, and JavaScript (ES5/ES6 basics)
- **Organization**: Flat file structure with minimal directory nesting
- **Assets**: Located in `assets/` directory (images, stylesheets, scripts)
- **Hosting**: XAMPP localhost (c:\xampp\htdocs)

## File Organization Patterns

### HTML Files
- **Practice Problems**: `PQs*.html`, `PracticeQ*.html` - exercises with corresponding CSS files
- **Topic Examples**: `bootstrap*.html`, `form_input.html`, `table.html` - demonstration files for specific concepts
- **Main Pages**: `index.html`, `main.html` - likely dashboard or entry points
- **Naming Convention**: Inconsistent capitalization (PQs, pQscss, PracticeQs) - typical of learning projects

### CSS Files
- Each major HTML typically has a corresponding CSS file (e.g., `PracticeQ.html` + `PracticeQ.css`)
- Inline styles in HTML are common in practice files
- CSS selectors demonstrate: classes, IDs, pseudo-selectors (`:hover`, `::first-letter`), attribute selectors
- **Example Pattern**: [index.css](index.css) uses colors, hover effects, input styling

### JavaScript Files
- `jscript.js` [assets/jscript.js](assets/jscript.js) - basic tutorials (movie guessing game with `prompt()`, `while` loops)
- `app.js` [assets/app.js](assets/app.js) - minimal scripts (e.g., `alert()` for page interactions)
- Generally contains simple, direct code without frameworks or advanced patterns

## Development Conventions

### HTML
- Standard HTML5 boilerplate with `<!DOCTYPE html>`
- Semantic markup in learning context (e.g., `<header>`, `<nav>`, `<main>`)
- ID and class naming is inconsistent but functional (IDs for interactivity, classes for styling)

### CSS
- Direct element selectors, class selectors, and ID selectors (no advanced patterns like BEM)
- Color values use hex (`#f52936`), rgb, and named colors interchangeably
- Hover states and pseudo-elements demonstrate CSS capabilities

### JavaScript
- Procedural, non-modular approach (global scope, direct DOM manipulation via IDs)
- Common patterns: `prompt()` for user input, `console.log()` for debugging, `alert()` for notifications
- Event handlers attached via HTML attributes or DOM queries

## Key Workflows

### Viewing Practice Problems
1. Open any `PQs*.html` or `PracticeQ*.html` in browser via XAMPP
2. Check corresponding `.css` file for styling
3. Open browser console (F12) to see JavaScript output from `assets/jscript.js`

### Adding New Practice Exercises
- Create `PQs<N>.html` (following existing naming)
- Create `PQs<N>.css` if styling is needed
- Link external assets: `<link rel="stylesheet" href="PQs<N>.css">`
- For scripts: `<script src="assets/jscript.js"></script>`

### Testing/Debugging
- Use browser DevTools: F12 → Console tab for `console.log()` output
- Verify CSS by inspecting elements in DevTools
- Check HTML structure for semantic accuracy

## Common Patterns to Preserve

1. **Flat HTML-CSS pairing**: Each major practice file has a companion CSS
2. **Asset centralization**: Images and shared scripts in `assets/` (app.js, images)
3. **Simple interactivity**: JavaScript via `prompt()`, event listeners on IDs
4. **Educational focus**: Code intentionally keeps concepts visible and simple (no minification, clear comments discouraged as learning exercise)

## When Assisting

- Assume files are practice/learning code, not production-ready
- Preserve verbose, clear code structure even if it could be minified
- Follow existing inconsistent naming (don't attempt refactoring for consistency)
- Suggest HTML5 semantic elements and vanilla JS patterns
- For CSS, use existing color scheme and simple selectors as models
