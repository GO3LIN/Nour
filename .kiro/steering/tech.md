---
inclusion: always
---

# Technology Stack

## Core Technologies

- **React 18+**: Use functional components with hooks exclusively
- **Vite**: Build tool and dev server (preferred over CRA)
- **MagicUI**: Primary UI component library - https://magicui.design/
- **Tailwind CSS**: Utility-first styling (MagicUI dependency)

## MagicUI Component Usage

**CRITICAL**: Always prefer MagicUI native components over custom implementations.

### Common MagicUI Components to Use
- Animations: `<AnimatedBeam>`, `<BlurFade>`, `<FadeText>`, `<Particles>`
- Layout: `<BentoGrid>`, `<Marquee>`, `<DotPattern>`
- Interactive: `<ShimmerButton>`, `<AnimatedGradientText>`, `<MagicCard>`
- Media: `<Safari>` (for video embeds), `<Avatar>`, `<AvatarCircles>`

### Installation Pattern
```bash
npx magicui-cli add [component-name]
```

Each component is installed individually as needed. Check https://magicui.design/docs/components for full catalog.

## RTL (Right-to-Left) Requirements

### HTML Setup
```jsx
<html dir="rtl" lang="ar">
```

### CSS Best Practices
- Use logical properties: `margin-inline-start` instead of `margin-left`
- Use logical properties: `padding-inline-end` instead of `padding-right`
- Tailwind RTL utilities: `ms-4` (margin-start), `me-4` (margin-end)
- Test all layouts in RTL mode - elements should mirror naturally

### Tailwind RTL Configuration
Ensure `tailwindcss-rtl` plugin is configured if needed, or use Tailwind's built-in logical property utilities.

## Arabic Typography

- Use web-safe Arabic fonts or Google Fonts (e.g., 'Cairo', 'Tajawal', 'Amiri')
- Ensure proper line-height for Arabic text (typically 1.8-2.0)
- Use appropriate font weights (Arabic fonts often need 500-600 for readability)

## Asset Management

### Gallery Images
- **Location**: `/gallery/image1.jpeg` through `/gallery/image18.jpeg`
- **DO NOT**: Create, generate, or request new images
- **Import pattern**: `import image1 from '../gallery/image1.jpeg'`
- **Optimization**: Use lazy loading for gallery images

## Performance Guidelines

- Lazy load images below the fold
- Use React.lazy() for code splitting if needed
- Minimize bundle size - only import used MagicUI components
- Optimize animations for 60fps (use CSS transforms, avoid layout thrashing)

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (runs on http://localhost:5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Add MagicUI component
npx magicui-cli add [component-name]
```

## Code Style Conventions

- Use ES6+ syntax (arrow functions, destructuring, template literals)
- Prefer `const` over `let`, avoid `var`
- Use optional chaining (`?.`) and nullish coalescing (`??`)
- Keep components under 200 lines - extract subcomponents if larger
- Use meaningful Arabic variable names for content, English for technical terms
