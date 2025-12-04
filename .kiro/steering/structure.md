---
inclusion: always
---

# Project Structure & Architecture

## Directory Organization

### Current Structure
```
/
├── .kiro/steering/     # AI guidance documents
├── gallery/            # 18 pre-existing images (image1.jpeg - image18.jpeg)
└── start.md            # Project requirements
```

### Expected React Structure
```
/
├── src/
│   ├── components/     # Section components (one per file)
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── public/             # Static assets
├── gallery/            # DO NOT MODIFY - existing gallery images
├── index.html          # HTML entry
└── package.json        # Dependencies
```

## Component Architecture

### Component Naming & Organization
- **One component per file**: `Hero.jsx`, `VideoSection.jsx`, `Gallery.jsx`, `Founders.jsx`, `Footer.jsx`
- **Component order matches page flow**: Hero → Video → Gallery → Founders → Footer
- **Use functional components** with hooks (no class components)
- **Export as default** from component files

### File Naming Conventions
- Components: PascalCase (e.g., `Hero.jsx`, `VideoSection.jsx`)
- Utilities: camelCase (e.g., `utils.js`)
- Styles: Match component name if component-specific

## Asset Management

### Gallery Images
- **Location**: `/gallery/image1.jpeg` through `/gallery/image18.jpeg`
- **Usage**: Import or reference these existing images - DO NOT create, generate, or request new images
- **Path reference**: Use relative paths from src (e.g., `../gallery/image1.jpeg`)

### Other Assets
- Place additional assets in `src/assets/` or `public/` as appropriate
- Prefer `public/` for static files that don't need processing

## Styling Approach

- **Primary**: MagicUI component library (use native components)
- **RTL Support**: Enforce `dir="rtl"` at root level, use logical CSS properties (`margin-inline-start` vs `margin-left`)
- **Responsive**: Mobile-first breakpoints
- **CSS Organization**: Component-scoped styles or CSS modules preferred

## Code Style

### React Patterns
- Functional components with hooks
- Destructure props in function parameters
- Use semantic HTML elements
- Keep components focused on single responsibility

### Arabic Content
- All user-facing strings in Arabic
- Use proper Arabic typography and spacing
- Test RTL layout thoroughly

### Import Order
1. React/external libraries
2. MagicUI components
3. Local components
4. Assets/images
5. Styles

## Build Configuration

- **Vite** recommended for React setup (fast, modern)
- Configure base path if deploying to subdirectory
- Optimize images during build
- Enable RTL-aware CSS processing if needed
