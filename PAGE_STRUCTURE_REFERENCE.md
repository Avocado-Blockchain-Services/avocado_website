# Page Structure Reference

Quick reference for what each pSEO page template includes.

---

## 🏦 Industry Pages
**URL Pattern:** `/industries/{slug}`

### Page Sections (in order):
1. **Hero**
   - Industry icon + name
   - Title (SEO optimized)
   - Description
   - CTA: "Get a Free Quote"

2. **Pain Points** (bg-void-surface)
   - 4 common challenges
   - Cards with problem numbering

3. **Solutions**
   - 4 approaches to solve pain points
   - Link to Protocol page

4. **Case Study** (bg-void-surface)
   - Featured client success story
   - Challenge/Solution/Results
   - Tech stack + timeline
   - Link to full case study

5. **Related Solutions**
   - 3 solution cards with links
   - Icons, descriptions, CTAs

6. **Related Technologies** (bg-void-surface)
   - 3 tech links
   - Hover effects

7. **FAQ**
   - 4 industry-specific questions

8. **CTA Section**
   - Standard Avocado CTA

### SEO Features:
- Article schema
- Service schema
- Meta title: "{Industry} | Avocado"
- Tracking: page view, CTA clicks, tech links

---

## 🤖 Solution Pages
**URL Pattern:** `/solutions/{slug}`

### Page Sections (in order):
1. **Hero**
   - Solution icon + name
   - Description
   - Timeline badge
   - CTA: "Get a Free Quote"

2. **Features** (bg-void-surface)
   - 4+ key features
   - Numbered cards

3. **Tech Stack**
   - Technology badges
   - Flex layout

4. **4-Phase Process** (bg-void-surface)
   - Recon, Scaffold, Sprint, Deploy
   - 2x2 grid
   - Link to Protocol page

5. **Related Links**
   - MVP, Services, Protocol, Company
   - 4-column grid

6. **FAQ** (bg-void-surface)
   - 4 solution-specific questions

7. **CTA Section**
   - Standard Avocado CTA

### SEO Features:
- Service schema
- Meta title: Full solution title from JSON
- Tracking: page view, CTA clicks, internal links

---

## 💎 Technology Pages
**URL Pattern:** `/tech/{slug}`

### Page Sections (in order):
1. **Hero**
   - Tech icon + name
   - Description
   - CTA: "Start a {Tech} Project"

2. **Capabilities** (bg-void-surface)
   - 4+ capabilities
   - 2-column grid

3. **Use Cases**
   - 4+ real-world applications
   - 4-column grid

4. **Related Solutions** (bg-void-surface)
   - Dynamically filtered by tech stack
   - Up to 3 solutions
   - Cards with links

5. **Why Avocado**
   - 3 benefits (Proven, Fast, Fixed Price)
   - Link to Company page

6. **FAQ** (bg-void-surface)
   - 4 tech-specific questions

7. **CTA Section**
   - Standard Avocado CTA

### SEO Features:
- Article schema
- Meta title: Full tech title from JSON
- Tracking: page view, CTA clicks

---

## 📊 Case Study Pages
**URL Pattern:** `/case-studies/{slug}`

### Page Sections (in order):
1. **Hero**
   - Client name
   - Description
   - Industry badge with icon

2. **Quick Stats** (bg-void-surface)
   - Client / Timeline / Industry
   - 3-column layout

3. **Challenge**
   - Problem statement
   - Card layout

4. **Solution** (bg-void-surface)
   - How Avocado helped
   - Card layout

5. **Results**
   - 3+ measurable impacts
   - Checkmark icons
   - 3-column grid

6. **Tech Stack** (bg-void-surface)
   - Technologies used
   - Badge layout

7. **Process**
   - 4 phases + post-launch
   - 2x2 grid

8. **Related Industry** (bg-void-surface)
   - Industry overview card
   - Link to industry page

9. **CTA**
   - "Build Your Own Success Story"
   - Custom CTA + standard CTASection

### SEO Features:
- Article schema
- Meta title: Full case study title from JSON
- Tracking: page view, CTA clicks

---

## 🎨 Common Design Patterns

### Typography Scale:
- H1: `text-4xl md:text-5xl` (Hero titles)
- H2: `text-3xl md:text-4xl` (Section titles)
- H3: `text-xl md:text-2xl` (Card titles)
- Body: `text-lg` (Hero descriptions)
- Body: `text-base` (Regular text)
- Small: `text-sm` (Card descriptions)
- Tiny: `text-xs` (Labels)

### Color Palette:
- `text-signal` - Green accent (#00FF00 equivalent)
- `text-white` - Primary text
- `text-white/80` - Body text
- `text-white/60` - Secondary text
- `bg-void-surface` - Alternating background
- `bg-void-base` - Default background
- `border-void-elevated` - Border color

### Spacing:
- Section padding: `py-20` or `py-24`
- Card padding: `p-6` or `p-8`
- Grid gaps: `gap-6` or `gap-8`
- Margin bottom: `mb-3`, `mb-4`, `mb-6`, `mb-12`, `mb-16`

### Components:
```tsx
<Section className="py-20">           // Container
<Card className="p-6">                // Content box
<Button variant="primary">            // CTA button (green)
<Button variant="secondary">          // Secondary button (outlined)
<FAQ items={faqItems} />              // Accordion FAQ
<CTASection />                        // Standard CTA
<SEO title="" description="" />       // Meta tags
<Schema data={schemaObject} />        // JSON-LD
```

### Tracking Events:
```tsx
trackEvent('Landing Page Viewed', { page, keyword, intent })
trackEvent('Industry Hero CTA Clicked', { industry })
trackEvent('Solution Hero CTA Clicked', { solution })
trackEvent('Tech Hero CTA Clicked', { tech })
trackEvent('Case Study CTA Clicked', { client })
trackEvent('Industry Tech Link Clicked', { industry, tech })
trackEvent('Solution Internal Link Clicked', { destination })
```

---

## 📋 Adding New Pages

### To add a new industry:
1. Add entry to `src/data/industries.json`
2. URL automatically works: `/industries/{slug}`

### To add a new solution:
1. Add entry to `src/data/solutions.json`
2. URL automatically works: `/solutions/{slug}`

### To add a new technology:
1. Add entry to `src/data/technologies.json`
2. URL automatically works: `/tech/{slug}`

### To add a new case study:
1. Add entry to `src/data/case-studies.json`
2. URL automatically works: `/case-studies/{slug}`

No code changes required—just update JSON!

---

## 🔗 Internal Linking Matrix

| From Page     | Links To                                    |
|---------------|---------------------------------------------|
| Industry      | Solutions, Tech, Case Study, Protocol, Signal |
| Solution      | MVP, Services, Protocol, Company, Signal    |
| Tech          | Solutions (filtered), Company, Signal       |
| Case Study    | Industry, Signal                            |

All pages link to Signal (contact/CTA).

---

## 📱 Responsive Design

All pages use:
- Mobile-first approach
- `md:` breakpoint for tablets/desktop
- Grid layouts: `md:grid-cols-2`, `md:grid-cols-3`, `md:grid-cols-4`
- Stacked on mobile, side-by-side on desktop
- Centered content with max-width containers

---

## ✅ Checklist for Review

Before committing:
- [ ] Check all JSON data is accurate
- [ ] Verify all internal links work
- [ ] Test responsive design on mobile
- [ ] Validate Schema.org markup
- [ ] Check Amplitude tracking fires
- [ ] Review SEO titles/descriptions
- [ ] Test 404 handling for invalid slugs
- [ ] Verify all images/logos exist
- [ ] Check typography hierarchy
- [ ] Test all CTA buttons work

---

**Templates are production-ready and follow Avocado design system 100%.**
