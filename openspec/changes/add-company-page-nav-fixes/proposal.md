# Change: Add Company Page and Navigation Fixes

## Why
The current navigation has usability issues (logo not clickable, no Home link) and the website undersells Avocado's enterprise credibility. A new /company page is needed to showcase credentials (Google Partner, ISO27001, ESPMX VC) and enterprise clients (Chivas, Banorte, BBVA, etc.).

## What Changes

### Navigation (Header.tsx)
- Logo becomes clickable link to home using actual SVG asset
- Add "Home" link to nav menu
- Add "Company" link to nav menu
- CTA button links to /signal

### Homepage (Home.tsx)
- Change section header from "OUR VENTURES" to "TRACK RECORD"
- Change section CTA to "Enterprise clients. Startup speed." → /company

### New Company Page
- Hero with tagline "Enterprise clients. Startup speed."
- Credentials section: Google Partner, ISO27001, ESPMX VC badges
- Enterprise clients grid with logos (Chivas, Banorte, BBVA, Grupo Salinas, Bitso, HouseBlocks)
- Link to /ventures for Persea Labs products
- Schema.org LocalBusiness structured data

### Assets
- Copy logo SVGs to public/
- Copy client logos to public/clients/

## Impact
- Affected specs: navigation (new), company-page (new)
- Affected code: Header.tsx, Home.tsx, App.tsx, Company.tsx (new)
- No breaking changes
