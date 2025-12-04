# Design Document

## Overview

The Noor Al-Quloob Academy landing page is a single-page React application built with Vite, MagicUI components, and Tailwind CSS. The design prioritizes award-worthy aesthetics with smooth animations, proper RTL support for Arabic content, and responsive layouts that work seamlessly across all devices. The page consists of five main sections: Hero, Video Presentation, Gallery, Founders, and Footer.

The application follows a component-based architecture where each section is a self-contained React functional component. MagicUI provides the animation and UI primitives, while custom styling ensures cultural appropriateness and visual excellence suitable for an Islamic educational institution.

## Architecture

### Technology Stack

- **Framework**: React 18+ with functional components and hooks
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Library**: MagicUI for animations and interactive components
- **Styling**: Tailwind CSS with RTL support and logical properties
- **Language**: Arabic (RTL) throughout the entire application

### Application Structure

```
src/
├── components/
│   ├── Hero.jsx           # Hero section with academy name and CTA
│   ├── VideoSection.jsx   # Video presentation component
│   ├── Gallery.jsx        # Photo gallery with 18 images
│   ├── Founders.jsx       # Founder profiles section
│   └── Footer.jsx         # Footer with social links
├── App.jsx                # Main app component orchestrating sections
├── main.jsx               # Entry point with RTL configuration
└── index.css              # Global styles and Tailwind imports
```

### Component Hierarchy

```
App
├── Hero
├── VideoSection
├── Gallery
├── Founders
└── Footer
```

Each component is responsible for its own section and can be developed and tested independently.

## Components and Interfaces

### Hero Component

**Purpose**: First impression section with academy branding and primary call-to-action

**Props**: None (uses static content)

**Key Features**:
- Academy name display: "أكاديمية نور القلوب للقرآن والعلوم الشرعية"
- Compelling headline and subheadline in Arabic
- Primary CTA button
- MagicUI animations: `<FadeText>`, `<AnimatedGradientText>`, or `<BlurFade>`
- Background effects using `<DotPattern>` or `<Particles>`

**Styling Considerations**:
- Large, readable Arabic typography
- Proper line-height (1.8-2.0) for Arabic text
- RTL-aware spacing using `ms-*` and `me-*` utilities
- Responsive font sizes across breakpoints

### VideoSection Component

**Purpose**: Showcase academy through embedded video presentation

**Props**: 
```typescript
{
  videoUrl: string  // URL to the academy video
  title?: string    // Optional section title in Arabic
}
```

**Key Features**:
- MagicUI `<Safari>` component for elegant video presentation
- Section title introducing the video
- Responsive video container
- Standard video controls (play, pause, volume)

**Styling Considerations**:
- Centered layout with appropriate padding
- Video aspect ratio preservation (16:9)
- Mobile-optimized video dimensions

### Gallery Component

**Purpose**: Display 18 academy photos in an aesthetically pleasing layout

**Props**: None (uses images from `/gallery` folder)

**Key Features**:
- Import all 18 images (image1.jpeg through image18.jpeg)
- MagicUI layout: `<BentoGrid>` for varied grid layout or `<Marquee>` for scrolling effect
- Lazy loading for images below the fold
- Smooth entrance animations using `<BlurFade>`

**Image Loading Strategy**:
```javascript
// Lazy loading implementation
const images = [
  { src: '../gallery/image1.jpeg', alt: 'أكاديمية نور القلوب' },
  // ... remaining images
];
```

**Styling Considerations**:
- Masonry or grid layout with varied image sizes
- Proper image aspect ratios
- Hover effects for interactivity
- Mobile: single or two-column layout
- Desktop: multi-column grid (3-4 columns)

### Founders Component

**Purpose**: Present profiles of academy founders and supervisor

**Props**: None (uses static founder data)

**Key Features**:
- Two founder profiles: أ. فاتحة محمد and أ. وسيلة أم أيوب
- Supervisor information: الشيخة الفاضلة أم ياسين
- MagicUI `<MagicCard>` for profile cards
- Optional: `<AvatarCircles>` or `<Avatar>` components

**Data Structure**:
```javascript
const founders = [
  { name: 'أ. فاتحة محمد', role: 'مؤسسة' },
  { name: 'أ. وسيلة أم أيوب', role: 'مؤسسة' }
];
const supervisor = { name: 'أم ياسين', title: 'الشيخة الفاضلة' };
```

**Styling Considerations**:
- Card-based layout with proper spacing
- Visual hierarchy emphasizing names
- RTL text alignment
- Responsive: stack on mobile, side-by-side on desktop

### Footer Component

**Purpose**: Provide contact information and social media access

**Props**: None (uses static links)

**Key Features**:
- Social media links: Telegram, WhatsApp, YouTube
- Recognizable platform icons
- Copyright text in Arabic
- Links open in new tabs (target="_blank" rel="noopener noreferrer")

**Social Links Structure**:
```javascript
const socialLinks = [
  { platform: 'Telegram', url: '#', icon: TelegramIcon },
  { platform: 'WhatsApp', url: '#', icon: WhatsAppIcon },
  { platform: 'YouTube', url: '#', icon: YouTubeIcon }
];
```

**Styling Considerations**:
- Centered layout with social icons
- Hover effects on icons
- Adequate spacing between elements
- Mobile-friendly touch targets (min 44x44px)

## Data Models

### Image Data Model

```typescript
interface GalleryImage {
  src: string;      // Path to image file
  alt: string;      // Arabic alt text for accessibility
  loading?: 'lazy' | 'eager';  // Loading strategy
}
```

### Founder Data Model

```typescript
interface Founder {
  name: string;     // Arabic name
  role: string;     // Arabic role/title
  bio?: string;     // Optional biography in Arabic
}
```

### Social Link Data Model

```typescript
interface SocialLink {
  platform: string;  // Platform name
  url: string;       // Link URL
  icon: ReactComponent;  // Icon component
  ariaLabel: string;     // Arabic accessibility label
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Responsive layout adaptation

*For any* viewport size (mobile, tablet, desktop), all page sections should adapt their layout to fit the screen width without horizontal overflow, and all content should remain accessible and functional.

**Validates: Requirements 2.5, 6.1, 6.3, 6.5**

### Property 2: Arabic typography line-height

*For any* text element containing Arabic content, the computed line-height should be within the range of 1.8 to 2.0 to ensure proper readability.

**Validates: Requirements 8.5**

### Property 3: RTL direction and logical properties

*For any* page render, the root element should have dir="rtl" attribute, and all spacing/margin styles should use logical CSS properties (margin-inline-start, padding-inline-end) or RTL-aware Tailwind classes (ms-*, me-*).

**Validates: Requirements 1.5, 4.3, 8.1, 8.3, 8.4**

## Error Handling

### Image Loading Failures

**Scenario**: Gallery images fail to load due to network issues or missing files

**Handling Strategy**:
- Provide fallback alt text in Arabic for accessibility
- Display placeholder or skeleton UI while loading
- Log errors to console for debugging
- Gracefully degrade: show available images, hide failed ones

**Implementation**:
```javascript
<img 
  src={imageSrc} 
  alt="أكاديمية نور القلوب"
  onError={(e) => {
    e.target.style.display = 'none';
    console.error('Failed to load image:', imageSrc);
  }}
/>
```

### Video Embedding Failures

**Scenario**: Video fails to load or embed

**Handling Strategy**:
- Display error message in Arabic
- Provide alternative contact information
- Ensure page remains functional without video
- Consider fallback to static image or text description

### Component Rendering Errors

**Scenario**: React component throws error during render

**Handling Strategy**:
- Implement Error Boundaries around major sections
- Display user-friendly error message in Arabic
- Log error details for debugging
- Allow other sections to continue functioning

**Implementation**:
```javascript
class SectionErrorBoundary extends React.Component {
  state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return <div>عذراً، حدث خطأ في تحميل هذا القسم</div>;
    }
    return this.props.children;
  }
}
```

### Responsive Layout Issues

**Scenario**: Layout breaks on unexpected screen sizes

**Handling Strategy**:
- Use min/max width constraints
- Test across common breakpoints (320px, 768px, 1024px, 1440px)
- Implement overflow handling (overflow-x: hidden on body)
- Use flexible units (rem, %, vw) instead of fixed pixels

### Missing Social Media Links

**Scenario**: Social media URLs are not yet available

**Handling Strategy**:
- Display icons but disable links
- Show "قريباً" (coming soon) on hover
- Ensure footer remains visually balanced
- Easy to update when URLs become available

## Testing Strategy

### Unit Testing Approach

The landing page will use **Vitest** as the testing framework with **React Testing Library** for component testing. Unit tests will focus on:

**Component Rendering Tests**:
- Verify each component renders without crashing
- Check that required elements are present in the DOM
- Validate that correct Arabic text content appears
- Ensure proper component structure

**Example Tests**:
- Hero component displays academy name
- Footer contains all three social media links
- Gallery renders exactly 18 images
- Founders section shows both founder names

**RTL and Accessibility Tests**:
- Verify dir="rtl" attribute is set
- Check that logical CSS properties are used
- Validate ARIA labels are in Arabic
- Ensure keyboard navigation works

**Integration Points**:
- App component correctly renders all child sections
- Props are passed correctly between components
- Event handlers function as expected

### Property-Based Testing Approach

Property-based testing will use **fast-check** library to verify universal properties across many inputs. The testing strategy will:

**Configuration**:
- Run minimum of 100 iterations per property test
- Use custom generators for viewport sizes and Arabic text
- Tag each test with format: `**Feature: noor-al-quloob-landing, Property {number}: {property_text}**`

**Property Test Coverage**:

1. **Responsive Layout Property** (Property 1):
   - Generate random viewport widths (320px to 2560px)
   - Render page at each width
   - Verify no horizontal overflow
   - Confirm all sections remain accessible

2. **Arabic Typography Property** (Property 2):
   - Generate random text elements
   - Check computed line-height values
   - Verify all fall within 1.8-2.0 range

3. **RTL Direction Property** (Property 3):
   - Render page multiple times
   - Verify dir="rtl" is always present
   - Check that spacing uses logical properties
   - Validate RTL-aware class usage

**Custom Generators**:
```javascript
// Viewport size generator
const viewportGen = fc.integer({ min: 320, max: 2560 });

// Arabic text generator
const arabicTextGen = fc.stringOf(
  fc.integer({ min: 0x0600, max: 0x06FF }).map(n => String.fromCharCode(n))
);
```

**Test Execution**:
- Property tests run alongside unit tests
- Each property maps to specific requirements
- Failures provide counterexamples for debugging
- Tests ensure correctness across input space

### Testing Requirements Summary

- **Unit tests**: Verify specific examples, component structure, and integration
- **Property tests**: Verify universal properties hold across all inputs
- **Both approaches are complementary**: Unit tests catch concrete bugs, property tests verify general correctness
- **Framework**: Vitest + React Testing Library + fast-check
- **Coverage goal**: All components and critical user paths
- **RTL testing**: Explicit tests for Arabic/RTL correctness
- **Performance**: Tests should run quickly (< 5 seconds total)
