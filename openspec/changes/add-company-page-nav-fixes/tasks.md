## 1. Asset Setup
- [x] 1.1 Copy `assets/logo/avocado_blue_logo.svg` to `public/logo-blue.svg`
- [x] 1.2 Copy `assets/logo/avocado_white_logo.svg` to `public/logo-white.svg`
- [x] 1.3 Create `public/clients/` directory
- [x] 1.4 Copy all client logos from `assets/clients/` to `public/clients/`

## 2. Navigation Fixes (Header.tsx)
- [x] 2.1 Replace text logo with clickable image logo linking to /
- [x] 2.2 Add "Home" to nav items array
- [x] 2.3 Add "Company" to nav items array
- [x] 2.4 Wrap CTA button in link to /signal

## 3. Homepage Update (Home.tsx)
- [x] 3.1 Change "OUR VENTURES" section header to "TRACK RECORD"
- [x] 3.2 Update section CTA text to "Enterprise clients. Startup speed."
- [x] 3.3 Update section CTA link from /ventures to /company

## 4. Company Page (NEW)
- [x] 4.1 Create `src/pages/Company.tsx`
- [x] 4.2 Add hero section with tagline
- [x] 4.3 Add credentials section (Google Partner, ISO27001, ESPMX VC)
- [x] 4.4 Add enterprise clients grid with logos
- [x] 4.5 Add link to /ventures for Persea Labs
- [x] 4.6 Add LocalBusiness Schema.org structured data
- [x] 4.7 Add SEO component with meta tags

## 5. Routing (App.tsx)
- [x] 5.1 Import Company component
- [x] 5.2 Add Route for /company

## 6. Verification
- [x] 6.1 Run `npm run build` to verify no TypeScript errors
- [x] 6.2 Test logo click navigates to home
- [x] 6.3 Test all nav links work
- [x] 6.4 Test homepage CTA links to /company
- [x] 6.5 Verify company page displays all credentials and logos
- [x] 6.6 Verify Schema.org data with structured data testing tool