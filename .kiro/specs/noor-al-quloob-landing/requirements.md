# Requirements Document

## Introduction

This document specifies the requirements for the Noor Al-Quloob Academy landing page - a single-page website for an Islamic educational academy serving women and children. The academy provides free Quran and Islamic sciences education. The landing page must be in Arabic with RTL support, feature award-worthy design aesthetics, and showcase the academy's offerings through multiple content sections.

## Glossary

- **Landing Page**: The single-page website that serves as the primary web presence for the academy
- **RTL (Right-to-Left)**: Text direction used for Arabic language content
- **Hero Section**: The first visible section of the page containing the main headline and call-to-action
- **MagicUI**: The React component library used for UI elements and animations
- **Gallery Component**: The photo showcase section displaying academy images
- **Founders Section**: The section presenting profiles of the two academy founders
- **Video Section**: The embedded video presentation area
- **Footer Component**: The bottom section containing contact information and social media links
- **Responsive Layout**: Design that adapts to different screen sizes from mobile to desktop

## Requirements

### Requirement 1

**User Story:** As a visitor, I want to see an engaging hero section when I first land on the page, so that I immediately understand what the academy offers and feel welcomed.

#### Acceptance Criteria

1. WHEN the page loads THEN the Landing Page SHALL display a hero section with the academy name "أكاديمية نور القلوب للقرآن والعلوم الشرعية" in Arabic
2. WHEN the hero section renders THEN the Landing Page SHALL include a compelling headline and subheadline in Arabic describing the academy's mission
3. WHEN the hero section displays THEN the Landing Page SHALL present a primary call-to-action button
4. WHEN viewing the hero section THEN the Landing Page SHALL use MagicUI animation components for smooth entrance effects
5. WHEN the hero section loads THEN the Landing Page SHALL render all text in RTL direction

### Requirement 2

**User Story:** As a visitor, I want to watch a video presentation about the academy, so that I can understand the academy's approach and offerings in detail.

#### Acceptance Criteria

1. WHEN the user scrolls to the video section THEN the Landing Page SHALL display an embedded video player
2. WHEN the video section renders THEN the Landing Page SHALL use MagicUI Safari component or similar for video presentation
3. WHEN the video section is visible THEN the Landing Page SHALL include a section title in Arabic introducing the video content
4. WHEN the video player loads THEN the Landing Page SHALL provide standard video controls for play, pause, and volume
5. WHEN viewing on mobile devices THEN the Video Section SHALL maintain responsive video dimensions

### Requirement 3

**User Story:** As a visitor, I want to browse through photos of the academy, so that I can visualize the learning environment and activities.

#### Acceptance Criteria

1. WHEN the gallery section renders THEN the Landing Page SHALL display all 18 images from the gallery folder (image1.jpeg through image18.jpeg)
2. WHEN displaying gallery images THEN the Gallery Component SHALL use MagicUI layout components such as BentoGrid or Marquee
3. WHEN gallery images load THEN the Landing Page SHALL implement lazy loading for images below the fold
4. WHEN viewing the gallery THEN the Landing Page SHALL arrange images in an aesthetically pleasing grid or masonry layout
5. WHEN gallery images are displayed THEN the Landing Page SHALL ensure images are optimized and load efficiently
6. WHEN the gallery renders THEN the Landing Page SHALL include smooth scroll animations using MagicUI components

### Requirement 4

**User Story:** As a visitor, I want to learn about the academy founders, so that I can understand who is leading the educational programs.

#### Acceptance Criteria

1. WHEN the founders section renders THEN the Landing Page SHALL display profiles for both founders: أ. فاتحة محمد and أ. وسيلة أم أيوب
2. WHEN founder profiles display THEN the Founders Section SHALL include the supervisor information: الشيخة الفاضلة أم ياسين
3. WHEN viewing founder profiles THEN the Landing Page SHALL present information in Arabic with RTL text direction
4. WHEN the founders section loads THEN the Landing Page SHALL use MagicUI card components such as MagicCard for profile presentation
5. WHEN displaying founder information THEN the Landing Page SHALL include appropriate visual hierarchy and spacing

### Requirement 5

**User Story:** As a visitor, I want to access contact information and social media links, so that I can connect with the academy on various platforms.

#### Acceptance Criteria

1. WHEN the footer renders THEN the Footer Component SHALL include links to Telegram, WhatsApp, and YouTube social media platforms
2. WHEN social media links display THEN the Footer Component SHALL use recognizable icons for each platform
3. WHEN the footer loads THEN the Footer Component SHALL include copyright information in Arabic
4. WHEN viewing the footer THEN the Footer Component SHALL display contact information if available
5. WHEN social media links are clicked THEN the Footer Component SHALL open links in new browser tabs

### Requirement 6

**User Story:** As a visitor using a mobile device, I want the landing page to work seamlessly on my screen size, so that I can access all content comfortably.

#### Acceptance Criteria

1. WHEN viewing on mobile devices THEN the Responsive Layout SHALL adapt all sections to fit mobile screen widths
2. WHEN the page renders on different screen sizes THEN the Responsive Layout SHALL maintain readability and usability across all breakpoints
3. WHEN viewing on tablets THEN the Responsive Layout SHALL optimize layout for medium-sized screens
4. WHEN accessing from desktop THEN the Responsive Layout SHALL utilize available screen space effectively
5. WHEN switching between device sizes THEN the Responsive Layout SHALL preserve all functionality and content accessibility

### Requirement 7

**User Story:** As a visitor, I want the page to load quickly and perform smoothly, so that I have a pleasant browsing experience.

#### Acceptance Criteria

1. WHEN the page initially loads THEN the Landing Page SHALL prioritize loading above-the-fold content first
2. WHEN images are below the viewport THEN the Landing Page SHALL implement lazy loading to defer image loading
3. WHEN animations execute THEN the Landing Page SHALL maintain 60fps performance using CSS transforms
4. WHEN MagicUI components load THEN the Landing Page SHALL only import components that are actually used
5. WHEN the page renders THEN the Landing Page SHALL minimize bundle size through code splitting where appropriate

### Requirement 8

**User Story:** As an Arabic-speaking visitor, I want all content displayed in proper Arabic with correct text direction, so that I can read and navigate naturally.

#### Acceptance Criteria

1. WHEN the page loads THEN the Landing Page SHALL set the HTML dir attribute to "rtl"
2. WHEN text content renders THEN the Landing Page SHALL display all user-facing text in Arabic language
3. WHEN applying spacing and margins THEN the Landing Page SHALL use logical CSS properties (margin-inline-start, padding-inline-end)
4. WHEN using Tailwind utilities THEN the Landing Page SHALL use RTL-aware classes (ms-4, me-4)
5. WHEN typography renders THEN the Landing Page SHALL use appropriate Arabic fonts with proper line-height (1.8-2.0)

### Requirement 9

**User Story:** As a visitor, I want to experience smooth, award-worthy animations and visual effects, so that the website feels modern and professionally designed.

#### Acceptance Criteria

1. WHEN sections come into view THEN the Landing Page SHALL trigger entrance animations using MagicUI components
2. WHEN the user interacts with elements THEN the Landing Page SHALL provide visual feedback through hover states and transitions
3. WHEN scrolling through the page THEN the Landing Page SHALL implement smooth scroll behavior
4. WHEN animations play THEN the Landing Page SHALL use MagicUI animation components such as AnimatedBeam, BlurFade, or FadeText
5. WHEN visual effects render THEN the Landing Page SHALL maintain performance without causing layout shifts or jank

### Requirement 10

**User Story:** As a visitor, I want to understand the academy's educational offerings, so that I know what programs are available.

#### Acceptance Criteria

1. WHEN the page content displays THEN the Landing Page SHALL communicate that programs are free of charge
2. WHEN describing the target audience THEN the Landing Page SHALL indicate the academy serves women and children including non-Arabic speakers
3. WHEN presenting educational content THEN the Landing Page SHALL mention Quran recitation, memorization, Islamic sciences, family guidance, mental health support, and Seerah
4. WHEN displaying program information THEN the Landing Page SHALL present content in Arabic with clear, readable typography
5. WHEN describing the teaching approach THEN the Landing Page SHALL mention the use of Telegram and Zoom platforms
