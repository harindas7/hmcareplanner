# HMCarePlanner SEO Plan
## Target: UK Domiciliary Care Agencies
**Domain:** https://www.hmcareplanner.co.uk  
**Last Updated:** April 2026

---

## 1. CURRENT SEO AUDIT

### What's Already in Place ✅
- Unique `<title>` and `<meta description>` on all 12 pages
- `<meta keywords>` on most pages
- Canonical URLs on all pages
- Open Graph & Twitter Card meta on homepage
- JSON-LD structured data (SoftwareApplication) on homepage
- Semantic HTML with proper heading hierarchy
- Mobile-responsive design (Tailwind CSS)
- `lang="en-GB"` attribute
- Clean URL structure with trailing slashes

### What's Missing ❌
- **No `robots.txt`** — search engines have no crawl guidance
- **No `sitemap.xml`** — Google can't discover all pages efficiently
- **No favicon / brand assets** — looks unprofessional in SERPs
- **No `og:image`** — social shares show no preview image
- **No blog / content hub** — zero informational keyword coverage
- **No Google Search Console / Analytics** — no tracking
- **No internal linking strategy** — pages are siloed
- **No alt text on images** (SVG icons only, no real images yet)
- **No page speed optimisation** — Tailwind loaded from CDN (render-blocking)
- **No backlink strategy**
- **No local business schema** — only SoftwareApplication schema
- **Features overview page has wrong title** — says "Service Client Record Keeping" instead of "All Features"

---

## 2. TARGET KEYWORD STRATEGY

### Primary Keywords (High Intent — Bottom of Funnel)
These are what agencies search when they're ready to buy:

| Keyword | Est. Monthly Searches | Target Page |
|---------|----------------------|-------------|
| domiciliary care software | 500–1,000 | Homepage |
| home care software UK | 300–500 | Homepage |
| care agency management software | 200–400 | Homepage |
| care planning software UK | 200–300 | Homepage / Features |
| domiciliary care software UK | 200–300 | Homepage |
| care rostering software | 100–200 | Scheduling page |
| eMAR software UK | 100–200 | eMAR page |
| care scheduling software | 100–200 | Scheduling page |
| CQC compliance software | 100–200 | Features page |
| home care management system | 100–200 | Homepage |

### Secondary Keywords (Comparison / Evaluation)
These capture agencies comparing options:

| Keyword | Target Page |
|---------|-------------|
| best domiciliary care software UK | New: Comparison blog post |
| care software pricing UK | Pricing page |
| birdie alternative | New: Comparison page |
| careplanner alternative | New: Comparison page |
| log my care vs | New: Comparison page |
| free care management software | Free Trial page |
| care agency software reviews | New: Testimonials page |
| domiciliary care software comparison | New: Blog post |

### Long-Tail Keywords (Informational — Top of Funnel)
These attract agencies researching solutions — perfect for blog content:

| Keyword | Content Type |
|---------|-------------|
| how to pass CQC inspection domiciliary care | Blog post |
| CQC compliance checklist home care | Blog post / downloadable |
| how to start a domiciliary care agency UK | Blog post |
| domiciliary care record keeping requirements | Blog post |
| eMAR benefits for care agencies | Blog post |
| how to reduce missed visits domiciliary care | Blog post |
| care agency staff retention tips | Blog post |
| digital social care records DSCR | Blog post |
| NHS assured solutions list care software | Blog post |
| domiciliary care KPIs to track | Blog post |
| care worker scheduling best practices | Blog post |
| how to manage medication in domiciliary care | Blog post |

### Local / Geo Keywords
Target agencies in major UK cities:

| Keyword Pattern | Example |
|----------------|---------|
| domiciliary care software [city] | domiciliary care software London |
| home care agency software [region] | home care software Manchester |
| care management software [city] | care management software Birmingham |

**Priority Cities:** London, Manchester, Birmingham, Leeds, Bristol, Glasgow, Edinburgh, Cardiff, Liverpool, Sheffield, Nottingham

---

## 3. TECHNICAL SEO — IMMEDIATE ACTIONS

### 3.1 Create robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://www.hmcareplanner.co.uk/sitemap.xml
```

### 3.2 Create sitemap.xml
Include all 11 public pages with `<lastmod>`, `<changefreq>`, and `<priority>` values.

### 3.3 Add Favicon
Create and add:
- `/favicon.ico` (32x32)
- `/apple-touch-icon.png` (180x180)
- `/favicon-32x32.png`
- `/favicon-16x16.png`
- `/site.webmanifest`

### 3.4 Page Speed Improvements
- **Replace Tailwind CDN** with a production build (purged CSS, ~15KB vs ~300KB)
- Add `loading="lazy"` to any below-fold images
- Minify `custom.css` and `components.js` for production
- Add preconnect hints for external resources
- Consider inlining critical CSS

### 3.5 Fix Features Page Title
Change from "Service Client Record Keeping | HMCarePlanner Features" to:
"All Features | Domiciliary Care Software | HMCarePlanner"

### 3.6 Add OG Images
Create a branded OG image (1200x630px) for social sharing. Add to all pages:
```html
<meta property="og:image" content="https://www.hmcareplanner.co.uk/images/og-default.jpg">
```

### 3.7 Add Missing Schema Markup
**Organization schema** (every page via components.js):
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HMCarePlanner",
  "url": "https://www.hmcareplanner.co.uk",
  "logo": "https://www.hmcareplanner.co.uk/images/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-208-058-0920",
    "contactType": "sales",
    "areaServed": "GB",
    "availableLanguage": "English"
  },
  "sameAs": []
}
```

**FAQ schema** on features and pricing pages (boosts SERP real estate).

**BreadcrumbList schema** on all sub-pages.

### 3.8 Register with Search Engines
- **Google Search Console** — verify ownership, submit sitemap
- **Bing Webmaster Tools** — submit sitemap
- **Google Business Profile** — create listing (even for SaaS, it helps)
- **Google Analytics 4** — add tracking code

---

## 4. ON-PAGE SEO IMPROVEMENTS

### 4.1 Title Tag Optimisation
Ensure every title follows: `Primary Keyword | Secondary Keyword | Brand`

| Page | Current Title | Recommended Title |
|------|--------------|-------------------|
| Home | Home Care & Domiciliary Care Software UK \| HMCarePlanner | Domiciliary Care Software UK \| Home Care Agency Management \| HMCarePlanner |
| Features | Service Client Record Keeping \| HMCarePlanner Features | Care Software Features \| Rostering, eMAR, CQC Compliance \| HMCarePlanner |
| Scheduling | Care Visit Scheduling \| HMCarePlanner Features Overview | Care Rostering & Scheduling Software UK \| HMCarePlanner |
| eMAR | eMAR Module - Electronic Medication Administration Records | eMAR Software UK \| Electronic Medication Records \| HMCarePlanner |
| Call Monitoring | Call Monitoring With Geo Location \| HMCarePlanner Features | GPS Check-In & Visit Monitoring \| Care Software \| HMCarePlanner |
| Pricing | Pricing Plan \| Home Care Agency Management Software | Pricing \| Domiciliary Care Software from £59.99/mo \| HMCarePlanner |
| Contact | Contact HMCarePlanner - Get in Touch for Assistance | Contact Us \| Domiciliary Care Software Support \| HMCarePlanner |
| Free Trial | Start Free Trial \| HMCarePlanner | Free 14-Day Trial \| Domiciliary Care Software \| HMCarePlanner |
| Mobile App | Mobile App Download \| HMCarePlanner | Carer Mobile App \| iOS & Android \| HMCarePlanner |
| Client Records | Client Record Keeping with HMCarePlanner | Care Client Record Keeping Software UK \| HMCarePlanner |

### 4.2 Meta Description Optimisation
Each description should:
- Be 150–160 characters
- Include primary keyword
- Include a call-to-action
- Mention "UK" for geo-relevance

### 4.3 Header Tag Strategy
- Only one `<h1>` per page (currently correct)
- `<h2>` for main sections
- `<h3>` for sub-sections
- Include target keywords naturally in headings

### 4.4 Internal Linking
Every page should link to at least 3 other pages contextually:
- Feature pages → link to pricing and free trial
- Homepage → link to all feature sub-pages
- Blog posts → link to relevant feature pages
- All pages → contextual links in body copy (not just nav)

### 4.5 Image SEO (When Images Are Added)
- Descriptive file names: `domiciliary-care-scheduling-dashboard.webp`
- Alt text with keywords: `HMCarePlanner care visit scheduling dashboard showing weekly roster`
- Use WebP format for smaller file sizes
- Include `width` and `height` attributes to prevent layout shift

---

## 5. CONTENT MARKETING STRATEGY

### 5.1 Blog Hub (HIGH PRIORITY)
Create `/blog/` section. Publish 2–4 articles per month.

**Month 1–2: Foundation Content**
1. "The Complete Guide to Domiciliary Care Software in the UK (2026)"
2. "How to Choose the Right Care Agency Management Software"
3. "CQC Compliance Checklist for Domiciliary Care Agencies"
4. "What Is eMAR and Why Your Care Agency Needs It"

**Month 3–4: Problem-Solving Content**
5. "How to Reduce Missed Visits in Home Care: A Practical Guide"
6. "Care Staff Retention: 7 Proven Strategies for UK Agencies"
7. "Paper Records vs Digital Care Plans: The Real Cost Comparison"
8. "How GPS Check-In Improves CQC Ratings"

**Month 5–6: Comparison & Authority Content**
9. "Best Domiciliary Care Software UK: 2026 Comparison Guide"
10. "HMCarePlanner vs Birdie: Which Is Right for Your Agency?"
11. "HMCarePlanner vs Log my Care: Feature-by-Feature Comparison"
12. "How to Get on the NHS Assured Solutions List (DSCR)"

**Month 7–8: Advanced / Thought Leadership**
13. "The Future of Domiciliary Care Technology in the UK"
14. "Understanding Digital Social Care Records (DSCR) Requirements"
15. "How Small Care Agencies Can Compete with Larger Providers Using Technology"
16. "A Guide to Care Agency KPIs: What to Track and Why"

### 5.2 Resource / Download Pages
Create gated content to capture leads:
- **CQC Inspection Readiness Checklist** (PDF download)
- **Care Agency Startup Guide** (PDF)
- **ROI Calculator** — "How much can you save with HMCarePlanner?"
- **Free Care Plan Template**

### 5.3 Testimonials / Case Studies Page
Create `/testimonials/` or `/case-studies/`:
- Feature real UK agency names and results
- Include photos and quotes
- Add Review schema markup
- Target: "care software reviews UK"

### 5.4 FAQ Page
Create `/faq/` targeting common questions:
- "How much does domiciliary care software cost?"
- "Is HMCarePlanner CQC compliant?"
- "Can I use HMCarePlanner on my phone?"
- "How long does it take to set up?"
- "Do you offer training?"
- Add FAQPage schema for rich snippets in Google

---

## 6. OFF-PAGE SEO & LINK BUILDING

### 6.1 Directory Listings (Quick Wins)
Submit HMCarePlanner to:
- **G2** (g2.com) — software review platform
- **Capterra** (capterra.co.uk) — software comparison
- **Software Advice** — care software category
- **SourceForge** — home care software UK
- **GetApp** — care management category
- **NHS Digital Social Care Records (DSCR) Assured List** — if eligible
- **Care England** directory
- **UKHCA** (United Kingdom Homecare Association) — partner/member listing
- **Google Business Profile**
- **Bing Places for Business**
- **Yell.com**
- **Trustpilot** — collect and display reviews

### 6.2 Guest Posting & PR
Target publications and blogs read by care agency owners:
- **Care Home Management** magazine
- **Home Care Insight** (homecareinsight.co.uk)
- **Care Talk** magazine
- **Community Care** (communitycare.co.uk)
- **The Carer** (thecareruk.com)
- **Digital Health** (digitalhealth.net)

Pitch topics:
- "How Technology Is Solving the UK Care Staffing Crisis"
- "Why Digital MAR Charts Should Replace Paper in Every Care Agency"
- "5 Ways Small Care Agencies Can Improve CQC Ratings With Software"

### 6.3 Social Proof & Reviews
- Actively request reviews on **Trustpilot**, **G2**, **Capterra**
- Display review widgets on the homepage
- Aim for 20+ reviews within 6 months

### 6.4 Partnership Links
- Integration partners (accounting software, payroll providers)
- Care training providers (link exchanges)
- Care recruitment agencies

---

## 7. LOCAL SEO

Even as a SaaS, local signals help:
- **Google Business Profile** — category: "Software Company"
- **NAP consistency** — same name, address, phone everywhere
- **Local landing pages** — optional, e.g., "Domiciliary Care Software for London Agencies"
- **Google Maps** listing with reviews

---

## 8. TRACKING & MEASUREMENT

### KPIs to Track Monthly
| Metric | Tool | Target (6 months) |
|--------|------|--------------------|
| Organic traffic | GA4 | +200% from baseline |
| Keyword rankings (top 10) | Google Search Console / Ahrefs | 15+ keywords |
| Domain authority | Ahrefs / Moz | 20+ |
| Backlinks | Ahrefs | 50+ referring domains |
| Contact form submissions | GA4 events | 30+ per month |
| Free trial signups | GA4 events | 20+ per month |
| Core Web Vitals | PageSpeed Insights | All green |
| Bounce rate | GA4 | Below 55% |
| Average session duration | GA4 | 2+ minutes |

### Tools to Set Up
1. **Google Search Console** — free, essential
2. **Google Analytics 4** — free, essential
3. **Bing Webmaster Tools** — free
4. **Ahrefs / SEMrush** — paid, for competitor analysis & rank tracking (pick one)
5. **Google PageSpeed Insights** — free, check monthly

---

## 9. IMPLEMENTATION PRIORITY & TIMELINE

### Week 1 — Technical Foundation (CRITICAL)
- [ ] Create `robots.txt`
- [ ] Create `sitemap.xml`
- [ ] Set up Google Search Console & submit sitemap
- [ ] Set up Google Analytics 4
- [ ] Fix features page title tag
- [ ] Add favicon and OG images
- [ ] Register Google Business Profile

### Week 2 — On-Page Optimisation
- [ ] Update all title tags (per table above)
- [ ] Refine all meta descriptions to 150–160 chars with CTAs
- [ ] Add Organization + BreadcrumbList schema to all pages
- [ ] Add FAQ schema to pricing and features pages
- [ ] Improve internal linking across all pages
- [ ] Add OG tags to all sub-pages (currently only homepage has them)

### Week 3–4 — Page Speed & Technical
- [ ] Replace Tailwind CDN with production build
- [ ] Minify CSS/JS
- [ ] Test Core Web Vitals, fix issues
- [ ] Add preconnect/preload hints
- [ ] Check mobile usability in Search Console

### Month 2 — Content Launch
- [ ] Create `/blog/` template page
- [ ] Publish first 4 blog posts (foundation content)
- [ ] Create FAQ page with schema
- [ ] Submit to 5+ software directories (Capterra, G2, etc.)

### Month 3–4 — Content Scaling
- [ ] Publish 4 more blog posts (problem-solving)
- [ ] Create 1–2 case studies
- [ ] Start Trustpilot review collection
- [ ] Begin guest posting outreach
- [ ] Create comparison pages

### Month 5–6 — Authority Building
- [ ] Publish comparison & authority content
- [ ] Create downloadable resources (CQC checklist, templates)
- [ ] Pursue partnership link opportunities
- [ ] Review and refine strategy based on Search Console data

---

## 10. COMPETITOR ANALYSIS SUMMARY

### Main Competitors
| Competitor | Domain Authority | Key Strength |
|-----------|-----------------|-------------|
| **Birdie** (birdie.care) | High | Strong blog, VC-funded marketing |
| **Log my Care** (logmycare.co.uk) | Medium | Free tier drives signups |
| **CarePlanner** (careplanner.co.uk) | Medium | Established brand |
| **PASS by everyLIFE** (everylifetechnologies.com) | Medium-High | NHS DSCR assured |
| **Access Group** (theaccessgroup.com) | Very High | Enterprise, huge domain |
| **Careberry** (careberry.com) | Low-Medium | Aggressive content marketing |

### Competitive Advantages to Highlight
- **Affordable pricing** — competitor Birdie starts much higher
- **All-in-one platform** — some competitors are modular (extra cost)
- **eMAR included** — many charge extra for medication management
- **UK-based support** — emphasise vs offshore competitors
- **Free 14-day trial** — lower barrier than competitors requiring demos

---

## QUICK-WIN CHECKLIST (Do This Week)

1. ✅ Create `robots.txt` and `sitemap.xml`
2. ✅ Register Google Search Console and submit sitemap
3. ✅ Register Google Analytics 4
4. ✅ Fix features page title tag
5. ✅ Update all title tags per recommendations
6. ✅ Register on Capterra, G2, and Trustpilot
7. ✅ Create Google Business Profile
