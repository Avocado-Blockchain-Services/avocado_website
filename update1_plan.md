# Update 1: Navigation Fixes + Company Page (NEW)

## Part A: Navigation Fixes

### Issues
1. **Logo not clickable** - No way to return to home from subpages
2. **No Home link in nav** - Users expect explicit Home navigation
3. **Not using actual logo assets** - Currently text-based `[▀ AVOCADO]`
4. **CTA button not linked** - Should go to /signal

### Available Logo Assets
```
assets/logo/
├── avocado_blue_logo.svg    # Signal blue (#0000FF)
├── avocado_white_logo.svg   # White variant
```

### Changes to Header.tsx

**1. Copy logos to public:**
```bash
cp assets/logo/avocado_blue_logo.svg public/logo-blue.svg
cp assets/logo/avocado_white_logo.svg public/logo-white.svg
```

**2. Logo links home (replace lines 39-43):**
```tsx
<a href="/" className="flex items-center gap-2 group">
  <img
    src="/logo-blue.svg"
    alt="Avocado"
    className="h-8 w-auto group-hover:opacity-80 transition-opacity"
  />
</a>
```

**3. Update nav to include Company (replace line 46):**
```tsx
{['Home', 'Protocol', 'Company', 'Ventures', 'Services'].map((item) => {
  const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`
  return (
    <a key={item} href={href} className="text-text-secondary hover:text-signal transition-colors">
      {item}
    </a>
  )
})}
```

**4. CTA button links to /signal (replace lines 53-55):**
```tsx
<Button variant="primary" size="sm" className="hidden md:inline-flex" asChild>
  <a href="/signal">[█ START A PROJECT]</a>
</Button>
```

---

## Part B: Homepage CTA Update

### Current State
- Section header: "OUR VENTURES"
- CTA: "view our builds" → links to /ventures

### New State
- Section header: **"TRACK RECORD"**
- CTA: **"Enterprise clients. Startup speed."** → links to /company

### Rationale
"Track Record" signals proof without corporate blandness. The CTA addresses the core tension enterprise decision-makers face: they need reliability (hence ISO, big banks) but hate slow agency timelines. This positions Avocado as the best of both worlds.

### Files to Change
- `src/pages/Home.tsx` - Update section header and CTA text/link

---

## Part C: NEW /company Page

### Architecture Decision
**/company and /ventures are SEPARATE pages:**
- `/company` - Credibility, certifications, enterprise clients, founding story
- `/ventures` - Persea Labs products (stays as-is, showcases R&D/product arm)

### Company Page Content

**Credentials & Certifications:**
- Google Web3 & AI Partner (badge)
- ISO27001 Certified (badge)
- ESPMX Venture Capital backed
- Founded 2018, CDMX

**Enterprise Clients:**
| Sector | Client | Project | Logo |
|--------|--------|---------|------|
| Sports | Chivas de Guadalajara | Pioneer NFT strategy | ✓ |
| Banking | Banorte | Blockchain consortium PoCs | ✓ |
| Finance | BBVA | Loyalty program + NFT projects | ✓ |
| Retail | Grupo Salinas | MarTech + Web3 integration | ✓ |
| Crypto | Bitso | Blockchain fan engagement | ✓ |
| PropTech | HouseBlocks | Blockchain real estate | ✓ |
| Sports | Selección Mexicana | Blockchain fan engagement | ✗ |
| Sports | Club América | Historic "Clásico" project | ✗ |

### New Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│  > COMPANY                                                  │
│  Enterprise clients. Startup speed.                         │
│  Mexico City | Since 2018                                   │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  CREDENTIALS                                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │ Google   │  │ ISO27001 │  │ ESPMX VC │                  │
│  │ Web3 &   │  │ Certified│  │ Backed   │                  │
│  │ AI       │  │          │  │          │                  │
│  │ Partner  │  │          │  │          │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  > CHAMPIONS PORTFOLIO                                      │
│  Sports & National Impact                                   │
│                                                             │
│  [Selección] [Chivas] [América] [Bitso]                    │
│  "Bringing Web3 to the heart of Mexican culture"           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  > ENTERPRISE CLIENTS                                       │
│  Banking & Finance                                          │
│                                                             │
│  [Banorte] [BBVA Global] [BBVA Mexico] [Grupo Salinas]     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  > OUR PRODUCTS                                             │
│  See what we build for ourselves                            │
│                                                             │
│  [View Persea Labs →] (links to /ventures)                 │
└─────────────────────────────────────────────────────────────┘
```

### Assets Available (in assets/clients/)

**Credentials:**
- [x] `Google for Startups black color letter.png` - Google Partner
- [x] `iso27001.png` - ISO27001 Certified
- [x] `espmx.vc.png` - ESPMX Venture Capital

**Client Logos:**
- [x] `BBVA Logo.png`
- [x] `Banorte Logo.png`
- [x] `BitSo Logo.png`
- [x] `ChivasLogo.png`
- [x] `Grupo Salinas Logo.png`
- [x] `HouseBlocks Logo.png`

**Still needed:**
- [ ] Selección Mexicana logo
- [ ] Club América logo
- [ ] Coinrex logo (optional)

### Files to Create/Change
1. `src/pages/Company.tsx` → **NEW FILE**
2. `src/App.tsx` → Add /company route
3. `src/components/layout/Header.tsx` → Add "Company" to nav

---

## Part D: Ventures Page (KEEP AS-IS)

/ventures stays focused on Persea Labs products:
- Persea.social - Nano-influencer platform
- Persea.ai - AI suite for Web3 workflows

This page serves as "proof we can ship product" and links FROM /company as R&D showcase.

---

## Updated Navigation Structure

```
[Logo] → /
Home → /
Protocol → /protocol
Company → /company (NEW - credibility/clients)
Ventures → /ventures (existing - Persea products)
Services → /services
[START A PROJECT] → /signal
```

---

## Schema.org Updates

**Home page:** Keep Organization schema
**Company page:** Add:
- LocalBusiness schema with CDMX address
- hasCredential for ISO27001
- member/partner for Google partnership

**Ventures page:** Keep SoftwareApplication schemas for Persea products

---

## Execution Order

1. **Part A** - Nav fixes (logo clickable, add Home link)
2. **Part B** - Homepage CTA update (TRACK RECORD + new CTA text)
3. **Part C** - Create /company page
4. **Part D** - Update nav to include both Company and Ventures

## Questions Before Proceeding
- Do you have client logo assets, or should I use placeholder boxes?
- Any clients to exclude from the website?
- Preferred order for client logos (by prestige, chronology, or sector)?
