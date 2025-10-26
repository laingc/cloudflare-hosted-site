# Claude Code Documentation

This document provides comprehensive guidance for Claude Code (or any AI assistant) working on this personal landing page project.

---

## Project Overview

**Type**: Static personal landing page / digital résumé / digital business card
**Stack**: Pure HTML5, CSS3, vanilla JavaScript (no frameworks or build tools)
**Design**: Dark monochrome theme inspired by Palantir and Anduril aesthetics
**Target**: Technology and innovation executives, defence-tech sector
**Hosting**: Any static host (GitHub Pages, Netlify, Cloudflare Pages, S3, Nginx)

### Key Principles

1. **Minimalism First** - Every element serves a purpose
2. **Performance** - Fast load times, minimal dependencies
3. **Accessibility** - WCAG 2.1 Level AA compliance
4. **British English** - All copy uses British spelling conventions
5. **No Build Process** - Direct deployment of source files
6. **Self-Contained** - All assets served locally (including fonts)

---

## Project Structure

```
personal_website/
├── .gitignore              # Git ignore patterns
├── README.md               # User-facing documentation
├── CLAUDE.md              # This file - AI assistant guide
├── profile.yaml           # Source of truth for personal data
├── index.html             # Main HTML file
├── css/
│   └── style.css          # All styles (mobile-first, dark theme)
├── js/
│   └── main.js            # Minimal interactions
└── assets/
    ├── avatar.svg         # Profile image (replace with actual photo)
    ├── favicon.svg        # Site favicon
    └── fonts/
        ├── AllianceNo2-Regular.otf   # Font fallback
        └── AllianceNo2-Regular.woff2 # Primary web font
```

---

## File Responsibilities

### `profile.yaml` - Single Source of Truth

**Purpose**: Central data store for all personal information
**Format**: YAML
**Usage**: Manual updates propagate to `index.html`

**Structure**:
```yaml
name: string
title: string
tagline: string
about: multiline string
experience: array of objects
  - role: string
    organisation: string (optional)
    period: string
    description: multiline string
skills: array of strings
projects: array of objects
  - title: string
    description: multiline string
contact:
  email: string
  linkedin: URL
  website: URL
  vcard: path
```

**Workflow**: When `profile.yaml` is updated, regenerate corresponding HTML sections in `index.html`.

---

### `index.html` - Main Structure

**Purpose**: Semantic HTML structure for the landing page
**Sections** (in order):
1. **Hero** - Name, title, tagline, profile image
2. **About** - Professional summary (3 paragraphs)
3. **Experience** - Timeline of roles (reverse chronological)
4. **Capabilities** - Skills organized by category
5. **Selected Work** - Project showcase (4 cards)
6. **Get in Touch** - Contact methods
7. **Footer** - Copyright and credits

**Important Classes**:
- `.hero-content` - Animated fade-in on load
- `.timeline` - Vertical timeline with markers
- `.project-card` - Hover effects on project cards
- `.contact-link` - Interactive contact buttons

**Meta Tags**:
- Update `title`, `description`, and `author` when personal info changes
- Preload critical assets (fonts, avatar)
- Include favicon reference

---

### `css/style.css` - Styling System

**Architecture**: Single CSS file, organized into sections

**Section Order**:
1. **Web Fonts** - @font-face declarations
2. **CSS Custom Properties** - Design tokens (colours, typography, spacing)
3. **Reset & Base Styles** - Normalize across browsers
4. **Typography** - Heading and text styles
5. **Layout** - Container and grid systems
6. **Component Styles** - Hero, timeline, cards, etc.
7. **Responsive Design** - Mobile-first breakpoints
8. **Accessibility** - Reduced motion, high contrast
9. **Print Styles** - Optimised for PDF/print

**Design Tokens** (CSS Custom Properties in `:root`):

**Colours** (Dark Monochrome Palette):
```css
--colour-bg-primary: #0a0a0a      /* Main background */
--colour-bg-secondary: #121212    /* Card backgrounds */
--colour-bg-tertiary: #1a1a1a     /* Elevated surfaces */
--colour-text-primary: #e5e5e5    /* Primary text */
--colour-text-secondary: #a0a0a0  /* Secondary text */
--colour-text-tertiary: #707070   /* Muted text */
--colour-accent: #00d9ff          /* Cyan accent (sparingly) */
--colour-accent-dim: #008fa8      /* Dimmed accent */
--colour-border: #2a2a2a          /* Default borders */
--colour-border-focus: #3a3a3a    /* Focus state borders */
```

**Typography**:
```css
--font-family-primary: 'Alliance No.2', [fallbacks]
--font-family-mono: 'Alliance No.2', [fallbacks]
```

**Font Sizes** (Responsive scale):
- `xs`: 0.75rem (12px)
- `sm`: 0.875rem (14px)
- `base`: 1rem (16px)
- `lg`: 1.125rem (18px)
- `xl`: 1.5rem (24px)
- `2xl`: 2rem (32px)
- `3xl`: 2.5rem (40px)
- `4xl`: 3rem (48px) - scales up to 4.5rem on large screens

**Spacing System** (Consistent rhythm):
- `xs`: 0.5rem (8px)
- `sm`: 1rem (16px)
- `md`: 1.5rem (24px)
- `lg`: 2rem (32px)
- `xl`: 3rem (48px)
- `2xl`: 4rem (64px)
- `3xl`: 6rem (96px) - scales to 8rem on tablets

**Breakpoints** (Mobile-first):
```css
576px  - Small devices (landscape phones)
768px  - Medium devices (tablets)
1024px - Large devices (desktops)
1440px - Extra large devices
```

**Motion & Animation**:
- All animations respect `prefers-reduced-motion: reduce`
- Subtle fade-in on hero section
- Hover states on cards and links
- Smooth scrolling (disabled if reduced motion)

**Key Selectors to Know**:
- `.container` - Max-width wrapper with responsive padding
- `.section` - Standard section spacing and borders
- `.section-title` - Uppercase titles with accent underline
- `.timeline::before` - Vertical line for timeline
- `.timeline-marker` - Cyan dots on timeline
- `.project-card` - Hover lift effect
- `.contact-link` - Button-like links with icons

---

### `js/main.js` - Minimal Interactions

**Purpose**: Progressive enhancement with accessibility focus
**No Dependencies**: Pure vanilla JavaScript
**File Size**: ~2KB minified

**Features**:
1. **Smooth Scrolling** - For anchor links (respects reduced motion)
2. **Intersection Observer** - Fade-in sections on scroll (respects reduced motion)
3. **Console Message** - Friendly greeting for developers
4. **Copyright Year** - Dynamic year update in footer

**Important Functions**:
- `setupSmoothScroll()` - Enhances anchor navigation
- `setupIntersectionObserver()` - Staggered section reveals
- `updateCopyrightYear()` - Keeps footer current

**Motion Handling**:
```javascript
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```
All animations are skipped if this is `true`.

---

## Design System

### Colour Philosophy

**Primary Palette**: Dark monochrome (greys and blacks)
**Accent Colour**: Cyan (`#00d9ff`) - used sparingly for:
- Timeline markers
- Section title underlines
- Link hover states
- Focus indicators

**Contrast Ratios**:
- Text on background: 14:1 (exceeds WCAG AAA)
- Accent on background: 8:1 (exceeds WCAG AA)

### Typography Scale

**Hierarchy**:
1. **Hero Name** - 4xl (3-4.5rem), bold, tight spacing
2. **Section Titles** - 2xl (2rem), semibold, uppercase, tracked
3. **Role/Project Titles** - xl (1.5rem), semibold
4. **Body Text** - lg (1.125rem), normal, relaxed spacing
5. **Meta Info** - sm (0.875rem), monospace font

**Line Heights**:
- Headings: 1.2 (tight)
- Body text: 1.5 (normal)
- About section: 1.75 (relaxed)

### Spacing Rhythm

**Vertical Spacing**:
- Section padding: 6rem (3xl) on desktop, 4rem (2xl) on mobile
- Content gaps: 2-3rem (lg-xl)
- Element margins: 1-1.5rem (sm-md)

**Horizontal Spacing**:
- Container padding: Responsive (1.5-3rem)
- Grid gaps: 2-3rem (lg-xl)

---

## Content Guidelines

### Voice & Tone

**Professional Executive Voice**:
- Confident but not boastful
- Technical precision without jargon overload
- Action-oriented language (built, led, delivered, designed)
- Focus on impact and outcomes

**Example Good Phrasing**:
- ✓ "Delivered AI-driven systems improving mission efficiency"
- ✓ "Led teams developing ML platforms at global scale"
- ✓ "Architected data-sharing solutions for sensitive environments"

**Avoid**:
- ✗ Buzzwords without substance ("synergy", "disruption")
- ✗ Passive voice ("was responsible for")
- ✗ Vague claims ("worked on projects")

### British English

**Always Use**:
- colour (not color)
- organise, optimise (not organize, optimize)
- centre (not center)
- defence (not defense)
- analyse (not analyze)
- practise (verb), practice (noun)

**Maintained In**:
- CSS (all property names, class names, comments)
- HTML (all text content, attributes, comments)
- JavaScript (all strings, comments, console messages)
- Documentation (all markdown files)

---

## Component Patterns

### Timeline (Experience Section)

**HTML Structure**:
```html
<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
      <div class="timeline-header">
        <h3 class="role">Role Title</h3>
        <span class="period">YYYY – YYYY</span>
      </div>
      <p class="company">Organisation Name</p>
      <p class="description">Description text...</p>
    </div>
  </div>
</div>
```

**Styling Notes**:
- Vertical line created with `::before` pseudo-element
- Markers are absolutely positioned cyan circles
- Responsive: collapses padding on mobile

**Content Guidelines**:
- Roles in reverse chronological order (newest first)
- Period format: "YYYY – Present" or "YYYY – YYYY"
- Use en-dash (–) not hyphen (-) for date ranges
- Organisation optional (omit for current sensitive roles)
- Description: 1-2 sentences focusing on impact

### Project Cards

**HTML Structure**:
```html
<article class="project-card">
  <h3 class="project-title">Project Name</h3>
  <p class="project-description">Description...</p>
  <div class="project-tags">
    <span class="tag">Tag</span>
  </div>
</article>
```

**Styling Notes**:
- Grid layout: auto-fill, min 300px columns
- Hover effect: border colour change + 2px lift
- Tags optional (removed from current implementation)

**Content Guidelines**:
- Title: Clear, specific project name
- Description: 2-3 sentences, focus on technology and impact
- Avoid generic titles ("Project Alpha")
- Emphasise scale, complexity, or innovation

### Contact Links

**HTML Structure**:
```html
<a href="[url]" class="contact-link" [attributes]>
  <span class="link-icon">[icon]</span>
  <span>[text]</span>
</a>
```

**Icon Convention** (Unicode):
- Email: ✉
- LinkedIn: ◆
- Website: ⚡
- Download: ↓

**Attributes**:
- External links: `target="_blank" rel="noopener noreferrer"`
- Email: `href="mailto:..."`
- Downloads: `download` attribute

---

## Accessibility Requirements

### WCAG 2.1 Level AA Compliance

**Keyboard Navigation**:
- All interactive elements must be keyboard accessible
- Focus indicators on all focusable elements
- Logical tab order (follows visual order)

**Screen Readers**:
- Semantic HTML (nav, main, section, article, etc.)
- ARIA labels on icon-only links
- Heading hierarchy (h1 → h2 → h3, no skipping)

**Motion & Animation**:
- Respect `prefers-reduced-motion: reduce`
- No auto-playing animations
- Subtle, purposeful motion only

**Colour & Contrast**:
- Never rely on colour alone to convey information
- Minimum 4.5:1 contrast for normal text
- Minimum 3:1 contrast for large text and UI components

**Alternative Text**:
- Avatar: `alt="Profile photo"`
- Decorative images: `alt=""` or use CSS backgrounds

---

## Performance Optimization

### Current Performance Budget

**Page Weight**:
- HTML: ~12KB
- CSS: ~20KB
- JS: ~2KB
- Fonts: ~50KB (WOFF2)
- Images: ~5KB (SVG)
- **Total**: <100KB

**Load Strategy**:
1. Critical CSS inline (optional future optimization)
2. Fonts preloaded: `<link rel="preload" as="font">`
3. `font-display: swap` prevents FOIT
4. Images: SVG (scalable, tiny file size)
5. No external dependencies or CDN calls

### Image Optimization

**Current Images**:
- `avatar.svg` - Placeholder (replace with optimised photo)
- `favicon.svg` - Monochrome geometric logo

**When Adding Photos**:
- Format: WebP with JPG fallback
- Size: Max 240x240px (1x), 480x480px (2x)
- Compression: 80% quality
- Consider `loading="lazy"` for below-fold images

### Font Strategy

**Current Setup**:
- Alliance No.2 Regular (400 weight only)
- WOFF2 format (49KB) - modern browsers
- OTF format (131KB) - fallback
- Served locally (no external requests)

**Font Loading**:
```css
font-display: swap; /* Show fallback immediately, swap when loaded */
```

**Future Weights** (if needed):
- Medium (500): ~50KB
- SemiBold (600): ~52KB
- Bold (700): ~54KB
- Only add if design requires distinct weights

---

## Development Workflows

### Updating Personal Information

**Workflow**:
1. Edit `profile.yaml` with new content
2. Request AI to update corresponding sections in `index.html`
3. Preview changes locally: `python3 -m http.server 8000`
4. Commit changes with descriptive message

**Sections to Update**:
- Hero: name, title, tagline
- About: paragraphs (maintain 3-paragraph structure)
- Experience: add/remove timeline items
- Capabilities: update skill categories
- Projects: add/remove project cards
- Contact: update links

### Adding New Sections

**Process**:
1. Add HTML structure after existing sections
2. Create corresponding CSS in appropriate location
3. Maintain section pattern:
   ```html
   <section class="section [section-name]" id="[id]">
     <h2 class="section-title">Section Title</h2>
     <div class="section-content">
       <!-- Content here -->
     </div>
   </section>
   ```
4. Add border-top (automatic with `.section` class)
5. Test responsive behaviour at all breakpoints

### Styling New Components

**Process**:
1. Use existing custom properties (colours, spacing, typography)
2. Follow mobile-first approach (base styles, then media queries)
3. Add hover/focus states for interactive elements
4. Test with `prefers-reduced-motion: reduce`
5. Verify colour contrast ratios
6. Document new classes in this file

**Example Pattern**:
```css
.new-component {
    /* Base (mobile) styles */
    padding: var(--space-md);
    color: var(--colour-text-secondary);
}

@media (min-width: 768px) {
    .new-component {
        /* Tablet and up */
        padding: var(--space-lg);
    }
}

@media (prefers-reduced-motion: reduce) {
    .new-component {
        /* Disable animations */
        transition: none;
    }
}
```

---

## Testing Checklist

### Browser Testing

**Required Browsers**:
- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile Safari (iOS)
- Chrome Android

**Test Cases**:
- [ ] Page loads without errors
- [ ] Font displays correctly (not fallback)
- [ ] All sections visible and styled
- [ ] Links functional
- [ ] Smooth scrolling works (where supported)
- [ ] Hover states active

### Responsive Testing

**Breakpoints to Test**:
- [ ] 375px (iPhone SE)
- [ ] 768px (iPad portrait)
- [ ] 1024px (iPad landscape / small laptop)
- [ ] 1440px (desktop)
- [ ] 1920px (large desktop)

**Check**:
- [ ] No horizontal scroll
- [ ] Readable text sizes
- [ ] Adequate touch targets (min 44x44px)
- [ ] Timeline layout correct
- [ ] Grid layouts responsive

### Accessibility Testing

**Tools**:
- WAVE browser extension
- axe DevTools
- Lighthouse accessibility audit
- Screen reader (VoiceOver/NVDA)

**Manual Checks**:
- [ ] Keyboard navigation (Tab through all interactive elements)
- [ ] Focus indicators visible
- [ ] Heading hierarchy logical (no skipped levels)
- [ ] ARIA labels present on icon-only elements
- [ ] Colour contrast sufficient (use browser DevTools)
- [ ] Animations disable with reduced motion preference

### Performance Testing

**Tools**:
- Lighthouse performance audit
- WebPageTest
- Chrome DevTools Network tab

**Targets**:
- [ ] First Contentful Paint: <1s
- [ ] Largest Contentful Paint: <2.5s
- [ ] Total Blocking Time: <200ms
- [ ] Cumulative Layout Shift: <0.1
- [ ] Page weight: <200KB

---

## Deployment Guide

### Pre-Deployment Checks

- [ ] All personal information accurate in `profile.yaml`
- [ ] HTML content synced with `profile.yaml`
- [ ] Replace `avatar.svg` with actual photo (if available)
- [ ] vCard file present (if referenced)
- [ ] No console errors in browser
- [ ] Tested at multiple breakpoints
- [ ] Accessibility audit passed
- [ ] Git repository clean (no uncommitted changes)

### GitHub Pages Deployment

```bash
# Create GitHub repository
# Push code
git remote add origin https://github.com/username/repo.git
git push -u origin master

# Enable GitHub Pages
# Settings → Pages → Source: master branch
```

Site URL: `https://username.github.io/repo/`

### Netlify Deployment

**Option 1: Git Integration**
1. Connect GitHub repository
2. Build settings: (leave empty)
3. Publish directory: `/`
4. Deploy

**Option 2: Manual Deploy**
```bash
# Drag and drop entire folder to Netlify web UI
```

**Custom Domain**:
- Settings → Domain management → Add custom domain
- Configure DNS: CNAME to `[site-name].netlify.app`

### Cloudflare Pages

1. Connect GitHub repository
2. Build settings:
   - Build command: (empty)
   - Build output directory: `/`
3. Deploy

**Custom Domain**: Automatic if using Cloudflare DNS

### Traditional Server (Nginx)

```bash
# Copy files to server
scp -r * user@server:/var/www/html/

# Nginx config (optional)
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/javascript image/svg+xml;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
}
```

---

## Common Modifications

### Changing the Accent Colour

1. Update CSS custom property:
   ```css
   --colour-accent: #[new-hex-colour];
   --colour-accent-dim: #[dimmed-version];
   ```
2. Ensure contrast ratio remains ≥3:1 with background
3. Test all instances: timeline markers, links, section underlines

### Adding Font Weights

1. Obtain font files (Medium, SemiBold, Bold)
2. Convert to WOFF2: `fonttools ttLib.woff2 compress [file].otf`
3. Add to `assets/fonts/`
4. Add `@font-face` declarations in `style.css`:
   ```css
   @font-face {
       font-family: 'Alliance No.2';
       src: url('../assets/fonts/AllianceNo2-Medium.woff2') format('woff2');
       font-weight: 500;
       font-style: normal;
       font-display: swap;
   }
   ```

### Removing Sections

1. Delete section HTML from `index.html`
2. (Optional) Remove corresponding CSS if no longer needed
3. Update internal navigation if present
4. Test layout flow

### Adding a vCard

**Create `Christopher_Laing.vcf`**:
```vcard
BEGIN:VCARD
VERSION:3.0
FN:Christopher Laing
N:Laing;Christopher;;;
EMAIL:christopher@starboard.nz
URL:https://chrislaing.net
END:VCARD
```

Place in root directory, linked from contact section.

---

## Troubleshooting

### Font Not Loading

**Symptoms**: Site displays in fallback font (system sans-serif)

**Fixes**:
1. Check font file paths in CSS: `../assets/fonts/`
2. Verify WOFF2 file is valid: `file assets/fonts/AllianceNo2-Regular.woff2`
3. Check browser console for 404 errors
4. Ensure font MIME types correct (server config)
5. Clear browser cache

### Layout Breaking on Mobile

**Symptoms**: Horizontal scroll, text overflow, misaligned elements

**Fixes**:
1. Check for fixed widths (use max-width instead)
2. Verify viewport meta tag present in HTML
3. Test with browser DevTools responsive mode
4. Inspect grid/flexbox layouts at breakpoint
5. Check for oversized images or long unbroken text

### CSS Not Updating

**Symptoms**: Changes to CSS not reflected in browser

**Fixes**:
1. Hard refresh: Cmd/Ctrl + Shift + R
2. Clear browser cache
3. Check for CSS syntax errors (browser console)
4. Verify file saved
5. Check correct file linked in HTML

### Animations Not Working

**Symptoms**: No fade-in effects, no smooth scrolling

**Checks**:
1. User has `prefers-reduced-motion: reduce` enabled (intentional)
2. JavaScript loaded correctly (check console)
3. Intersection Observer supported (modern browsers only)
4. CSS animation classes present

---

## Git Workflow

### Commit Message Format

```
<type>: <short description>

<optional detailed description>

- Bullet points for changes
- Another change

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `style`: CSS/styling changes
- `content`: Content updates (text, images)
- `refactor`: Code restructuring (no behaviour change)
- `docs`: Documentation updates
- `chore`: Maintenance tasks

### Branching Strategy

**Simple Workflow** (single developer):
```bash
# All work on master
git add .
git commit -m "..."
git push
```

**Feature Branch Workflow** (team or experimental):
```bash
# Create feature branch
git checkout -b feature/new-section

# Work and commit
git add .
git commit -m "feat: add publications section"

# Merge to master
git checkout master
git merge feature/new-section
git push
```

---

## Future Enhancements

### Potential Additions

**Content**:
- [ ] Publications/Articles section
- [ ] Speaking engagements
- [ ] Awards/Recognition
- [ ] Media mentions
- [ ] Blog integration

**Features**:
- [ ] Dark/Light mode toggle (though dark is intentional)
- [ ] Print stylesheet optimization
- [ ] PDF download of résumé
- [ ] Contact form (requires backend or service)
- [ ] Analytics integration (privacy-respecting)

**Technical**:
- [ ] Service Worker for offline support
- [ ] Critical CSS inline
- [ ] Preload fonts more aggressively
- [ ] Lazy load images
- [ ] Add security headers (via hosting platform)

### Intentional Omissions

**Not Included** (by design):
- ❌ JavaScript frameworks (React, Vue, etc.) - unnecessary complexity
- ❌ CSS preprocessors (Sass, Less) - vanilla CSS sufficient
- ❌ Build tools (Webpack, Vite) - no build step required
- ❌ Analytics by default - privacy-first approach
- ❌ Social media embeds - performance and privacy concerns
- ❌ Cookie banners - no cookies used
- ❌ A/B testing - not a marketing site

---

## Resources & References

### Design Inspiration

- **Palantir**: Clean, technical aesthetic with purposeful motion
- **Anduril**: Minimal, black/white palette with product focus
- **Stripe**: Typography and spacing rhythm
- **Linear**: Monochrome with accent colour usage

### Typography

- **Alliance No.2**: Display typeface by Deni Anggara (Degarism Studio)
- License: Check specific license for commercial use
- Alternatives: Inter, Sohne, Untitled Sans, ABC Diatype

### Technical References

- **MDN Web Docs**: HTML/CSS/JavaScript reference
- **WCAG 2.1**: Accessibility guidelines
- **Web.dev**: Performance and best practices
- **Can I Use**: Browser compatibility

---

## Contact & Support

**For AI Assistants**: Use this document as the primary reference for all modifications. When in doubt:
1. Preserve existing patterns and structure
2. Maintain British English spelling
3. Respect accessibility requirements
4. Test at multiple breakpoints
5. Update `profile.yaml` as source of truth

**For Human Developers**: This project is intentionally simple. If you find yourself needing build tools or frameworks, reconsider the requirement. The goal is a fast, maintainable, static site that works everywhere.

---

**Last Updated**: 2025-10-24
**Project Version**: 1.0.0
**Maintained By**: Christopher Laing
