# Implementation Plan

- [x] 1. Initialize React project with Vite and configure RTL support


  - Create new Vite + React project structure
  - Install dependencies: React 18+, Tailwind CSS, MagicUI CLI
  - Configure Tailwind with RTL support and logical properties
  - Set up HTML with dir="rtl" and lang="ar" attributes
  - Create basic App.jsx structure with all section placeholders
  - Configure Arabic fonts (Cairo, Tajawal, or Amiri) in CSS
  - Set global line-height for Arabic typography (1.8-2.0)
  - _Requirements: 8.1, 8.2, 8.5_



- [ ]* 2. Set up testing infrastructure
  - Install Vitest and React Testing Library
  - Install fast-check for property-based testing
  - Configure Vitest with jsdom environment
  - Create test utilities for RTL rendering
  - Set up test file structure matching component structure


  - _Requirements: All (testing foundation)_

- [ ] 3. Implement Hero component with animations
  - Create Hero.jsx component file
  - Add academy name: "أكاديمية نور القلوب للقرآن والعلوم الشرعية"
  - Add compelling headline and subheadline in Arabic about academy mission
  - Install and implement MagicUI animation components (FadeText, BlurFade, or AnimatedGradientText)
  - Add primary CTA button with Arabic text
  - Install and add background effects (DotPattern or Particles)
  - Apply RTL-aware spacing using ms-* and me-* Tailwind utilities
  - Implement responsive typography with proper breakpoints
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ]* 3.1 Write unit tests for Hero component
  - Test that academy name renders correctly
  - Test that headline and subheadline are present
  - Test that CTA button exists


  - Test that MagicUI animation components are used
  - Verify RTL direction is applied
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ] 4. Implement VideoSection component
  - Create VideoSection.jsx component file
  - Install MagicUI Safari component using: npx magicui-cli add safari
  - Add section title in Arabic introducing the video
  - Implement video embed with Safari component or standard video element
  - Add video controls (play, pause, volume)
  - Implement responsive video container with aspect ratio preservation (16:9)
  - Apply centered layout with appropriate padding
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ]* 4.1 Write unit tests for VideoSection component
  - Test that video player element exists
  - Test that MagicUI Safari component is used
  - Test that section title in Arabic is present
  - Test that video controls are available
  - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [x]* 4.2 Write property test for responsive video dimensions


  - **Property 1: Responsive layout adaptation (VideoSection)**
  - **Validates: Requirements 2.5**
  - Generate random viewport widths (320px to 2560px)
  - Render VideoSection at each width
  - Verify video maintains proper dimensions without overflow

- [ ] 5. Implement Gallery component with image grid
  - Create Gallery.jsx component file
  - Import all 18 images from gallery folder (image1.jpeg through image18.jpeg)
  - Install MagicUI layout component: npx magicui-cli add bento-grid (or marquee)
  - Implement image grid using BentoGrid or Marquee component
  - Add lazy loading attribute (loading="lazy") to images below the fold
  - Install and add BlurFade animation for entrance effects
  - Implement responsive grid: single/two columns on mobile, 3-4 columns on desktop
  - Add hover effects for interactivity
  - Include Arabic alt text for all images
  - _Requirements: 3.1, 3.2, 3.3, 3.6, 7.2_



- [ ]* 5.1 Write unit tests for Gallery component
  - Test that exactly 18 images are rendered
  - Verify image src attributes match expected paths (image1.jpeg through image18.jpeg)
  - Test that MagicUI layout components (BentoGrid or Marquee) are used
  - Verify lazy loading attribute is present on images
  - Test that MagicUI animation components are present
  - _Requirements: 3.1, 3.2, 3.3, 3.6_

- [ ] 6. Implement Founders component with profile cards
  - Create Founders.jsx component file
  - Install MagicUI card component: npx magicui-cli add magic-card
  - Define founder data: أ. فاتحة محمد and أ. وسيلة أم أيوب
  - Define supervisor data: الشيخة الفاضلة أم ياسين
  - Implement profile cards using MagicCard component
  - Apply RTL text alignment and direction
  - Implement responsive layout: stack on mobile, side-by-side on desktop


  - Add proper spacing and visual hierarchy
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [ ]* 6.1 Write unit tests for Founders component
  - Test that both founder names appear: أ. فاتحة محمد and أ. وسيلة أم أيوب
  - Test that supervisor information appears: الشيخة الفاضلة أم ياسين
  - Verify RTL text direction is applied
  - Test that MagicCard components are used
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [ ] 7. Implement Footer component with social media links
  - Create Footer.jsx component file
  - Define social links array with Telegram, WhatsApp, and YouTube
  - Add social media icons for each platform
  - Implement links with target="_blank" and rel="noopener noreferrer"
  - Add copyright text in Arabic
  - Add optional contact information section
  - Apply centered layout with proper spacing


  - Ensure touch targets are minimum 44x44px for mobile
  - Add hover effects on icons
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ]* 7.1 Write unit tests for Footer component
  - Test that all three social media links exist (Telegram, WhatsApp, YouTube)
  - Verify icons are present for each platform
  - Test that copyright text in Arabic is present
  - Verify links have target="_blank" attribute
  - Test conditional rendering of contact information
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 8. Add educational content and program information
  - Add content section or integrate into Hero/About area


  - Include text stating programs are free of charge
  - Mention target audience: women and children including non-Arabic speakers
  - List educational offerings: Quran recitation, memorization, Islamic sciences, family guidance, mental health support, Seerah
  - Mention teaching platforms: Telegram and Zoom
  - Ensure all content is in Arabic with proper typography
  - _Requirements: 10.1, 10.2, 10.3, 10.5_

- [ ]* 8.1 Write unit tests for educational content
  - Test that free program text appears
  - Test that target audience description is present
  - Verify all educational topics are mentioned
  - Test that platform names (Telegram, Zoom) appear
  - _Requirements: 10.1, 10.2, 10.3, 10.5_



- [ ] 9. Implement smooth animations and interactions
  - Add scroll-triggered animations for sections coming into view
  - Implement smooth scroll behavior (CSS scroll-behavior: smooth)
  - Add hover states and transitions to interactive elements
  - Ensure animations use CSS transforms for 60fps performance
  - Add entrance animations using MagicUI components (AnimatedBeam, BlurFade, FadeText)
  - Test animations across different devices
  - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [ ]* 9.1 Write unit tests for animations and interactions
  - Test that MagicUI animation components are present
  - Verify hover styles are defined in CSS
  - Test that smooth scroll CSS property is applied
  - _Requirements: 9.1, 9.2, 9.3, 9.4_



- [ ] 10. Implement comprehensive responsive design
  - Test all sections at mobile breakpoint (320px-767px)
  - Test all sections at tablet breakpoint (768px-1023px)
  - Test all sections at desktop breakpoint (1024px+)
  - Ensure no horizontal overflow at any breakpoint
  - Verify all content remains accessible across viewport sizes
  - Adjust typography sizes for different breakpoints
  - Optimize touch targets for mobile devices
  - _Requirements: 6.1, 6.3, 6.5_

- [ ]* 10.1 Write property test for responsive layout adaptation
  - **Property 1: Responsive layout adaptation**
  - **Validates: Requirements 6.1, 6.3, 6.5**
  - Generate random viewport widths between 320px and 2560px
  - Render entire page at each generated width
  - Verify no horizontal overflow occurs (scrollWidth <= clientWidth)
  - Confirm all sections and content remain accessible

- [ ] 11. Implement RTL support and Arabic typography
  - Verify dir="rtl" is set on root HTML element
  - Replace all margin-left/right with margin-inline-start/end
  - Replace all padding-left/right with padding-inline-start/end
  - Convert Tailwind ml-*/mr-* classes to ms-*/me-* classes
  - Verify Arabic fonts are loaded and applied
  - Ensure line-height is 1.8-2.0 for all Arabic text
  - Test text alignment and direction across all components
  - _Requirements: 8.1, 8.3, 8.4, 8.5_

- [ ]* 11.1 Write unit tests for RTL support
  - Test that dir="rtl" attribute is present on root element
  - Verify all text content is in Arabic
  - Test that logical CSS properties are used
  - Verify RTL-aware Tailwind classes are present
  - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [ ]* 11.2 Write property test for Arabic typography line-height
  - **Property 2: Arabic typography line-height**
  - **Validates: Requirements 8.5**
  - Generate random text elements from the page
  - Get computed line-height for each element
  - Verify all line-height values are between 1.8 and 2.0

- [ ]* 11.3 Write property test for RTL direction and logical properties
  - **Property 3: RTL direction and logical properties**
  - **Validates: Requirements 8.1, 8.3, 8.4**
  - Render page multiple times
  - Verify dir="rtl" is always present on root element
  - Check that spacing styles use logical properties or RTL-aware classes
  - Validate no hardcoded left/right directional styles exist

- [x] 12. Optimize performance and bundle size


  - Implement code splitting for heavy components if needed
  - Verify only used MagicUI components are imported
  - Optimize images for web (already provided in gallery folder)
  - Add error boundaries around major sections
  - Implement error handling for image loading failures
  - Add fallback UI for video loading failures
  - Test page load performance
  - _Requirements: 7.4_

- [ ]* 12.1 Write unit tests for error handling
  - Test error boundary catches component errors
  - Test image onError handler
  - Verify fallback UI displays on errors
  - Test that other sections continue functioning when one fails

- [x] 13. Final integration and polish



  - Integrate all components into App.jsx
  - Verify smooth transitions between sections
  - Test complete user flow from top to bottom
  - Verify all Arabic content is correct and properly displayed
  - Test on multiple browsers (Chrome, Firefox, Safari)
  - Verify mobile responsiveness on actual devices
  - Check accessibility with screen readers
  - Validate all links work correctly
  - _Requirements: All_

- [ ]* 14. Checkpoint - Ensure all tests pass
  - Run all unit tests and verify they pass
  - Run all property-based tests and verify they pass
  - Fix any failing tests
  - Ensure test coverage is adequate
  - Ask the user if questions arise
