# SEO Implementation Guide - Pic Best Moments

## ✅ What Has Been Implemented

### 1. **Fixed All Pages - Proper Next.js 15 App Router SEO**

All pages have been updated to use the correct metadata export pattern instead of the deprecated `<Head>` component:

- ✅ **Homepage** (`/src/app/page.js`)
- ✅ **Contact Page** (`/src/app/contact/page.js`)
- ✅ **Gallery Page** (`/src/app/Gallery/page.js`)
- ✅ **Love Story Page** (`/src/app/love-story/page.jsx`)
- ✅ **Gallery Locations** (`/src/app/GalleryLocationsPage/page.js`)
- ✅ **Terms & Conditions** (`/src/app/Conditions/page.js`)

**Changes:**
- Removed `"use client"` directive from pages (making them server components)
- Removed deprecated `<Head>` from `next/head`
- Added proper `metadata` exports with title, description, keywords, OpenGraph, Twitter cards, and robots directives
- Removed unnecessary dynamic imports with `{ ssr: false }`

### 2. **Enhanced SEO Configuration** (`next-seo.config.js`)

Added comprehensive SEO metadata for all pages:
- ✅ **Keywords** for each page
- ✅ **Twitter/X Card metadata**
- ✅ **Enhanced OpenGraph** with locale and siteName
- ✅ **Advanced robots directives** for better crawling
- ✅ **Canonical URLs** for all pages

### 3. **Added Sitemap** (`/src/app/sitemap.js`)

Automatically generates an XML sitemap at `/sitemap.xml` with:
- All main pages
- Change frequency hints
- Priority indicators
- Last modified dates

**Access at:** `https://yourdomain.com/sitemap.xml`

### 4. **Added Robots.txt** (`/src/app/robots.js`)

Automatically generates a robots.txt at `/robots.txt` with:
- Allow all crawlers
- Disallow /api/ and /private/ directories
- Sitemap reference

**Access at:** `https://yourdomain.com/robots.txt`

### 5. **LocalBusiness Schema** (`/src/app/seo/loyout-jsonld.js`)

Added LocalBusiness JSON-LD structured data for Barcelona local SEO:
- Business name and description
- Geographic coordinates (Barcelona)
- Contact information
- Opening hours
- Social media links
- Aggregate rating

### 6. **Enhanced Root Layout** (`/src/app/layout.js`)

Improved global metadata with:
- Title template for consistent branding
- Enhanced keywords
- Better robots configuration
- Canonical URL
- All three JSON-LD schemas (Organization, WebSite, LocalBusiness)

---

## 🎯 Next Steps for Optimal SEO

### Immediate Actions

1. **Set Environment Variable**
   ```bash
   # Add to your .env.local or production environment
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

2. **Create Open Graph Images**
   Create these images in your `/public` folder:
   - `/public/logo-social.jpg` (1200x628px)
   - `/public/og/contact.jpg` (1200x628px)
   - `/public/og/gallery.jpg` (1200x628px)
   - `/public/og/love-stories.jpg` (1200x628px)
   - `/public/og/favorite-spots.jpg` (1200x628px)
   - `/public/og/conditions.jpg` (1200x628px)

3. **Add Favicon Files**
   Ensure you have:
   - `/public/favicon-32x32.png`
   - `/public/favicon-16x16.png`
   - `/public/favicon.ico`

### Google Search Console Setup

1. **Verify Your Site**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your property
   - Choose verification method (DNS or HTML tag)
   - If using HTML tag, add to `/src/app/layout.js`:
     ```javascript
     verification: {
       google: "your-verification-code-here",
     }
     ```

2. **Submit Your Sitemap**
   - In Google Search Console, go to "Sitemaps"
   - Submit: `https://yourdomain.com/sitemap.xml`

3. **Request Indexing**
   - Submit your main pages for immediate indexing
   - Monitor the "Coverage" report for issues

### Google Business Profile

Since you're a Barcelona-based photographer:

1. **Create/Claim Your Google Business Profile**
   - Visit [Google Business](https://www.google.com/business/)
   - Add your business location
   - Add photos of your work
   - Encourage client reviews

2. **Update Business Information**
   Make sure it matches your website:
   - Name: "Pic Best Moments"
   - Phone: "+34 600 123 456" (update if different)
   - Email: "photographbusiness01@gmail.com"
   - Service area: Barcelona

### Content Optimization

1. **Add Alt Text to All Images**
   Example:
   ```jsx
   <Image
     src="/photo.avif"
     alt="Couple photoshoot in Barcelona Gothic Quarter at sunset"
     width={800}
     height={600}
   />
   ```

2. **Optimize Heading Structure**
   - One H1 per page
   - Use H2 for main sections
   - Use H3 for subsections

3. **Internal Linking**
   Link related pages together:
   - Link from Gallery to specific Love Story sessions
   - Link from Contact to Gallery
   - Link from locations to Gallery examples

### Performance Optimization

1. **Optimize Images**
   - Use Next.js `<Image>` component everywhere
   - Ensure AVIF/WebP formats are being served
   - Add proper `loading="lazy"` attributes

2. **Test Performance**
   ```bash
   # Run Lighthouse audit
   npm run build
   npm run start
   # Then test with Chrome DevTools Lighthouse
   ```

3. **Monitor Core Web Vitals**
   - Check in Google Search Console
   - Aim for:
     - LCP (Largest Contentful Paint): < 2.5s
     - FID (First Input Delay): < 100ms
     - CLS (Cumulative Layout Shift): < 0.1

### Social Media Integration

1. **Update Social Links**
   In `/src/app/seo/loyout-jsonld.js`, verify:
   - Instagram: "https://www.instagram.com/pic.best.moments/"
   - Facebook: "https://www.facebook.com/pic.best.moments"

2. **Add Twitter/X Handle** (if you have one)
   In `next-seo.config.js`, add:
   ```javascript
   twitter: {
     card: "summary_large_image",
     site: "@yourhandle",
     creator: "@yourhandle",
   }
   ```

---

## 📊 Testing Your SEO

### 1. Test Structured Data
- Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
- Test your homepage URL
- Check for errors in Organization and LocalBusiness schemas

### 2. Test Open Graph
- Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Test all your main pages
- Clear cache if needed

### 3. Test Twitter Cards
- Use [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- Test your main pages

### 4. Test Metadata
```bash
# View source of your pages and check for:
curl https://yourdomain.com | grep -A 5 "og:image"
```

---

## 🔍 SEO Monitoring

### Weekly Tasks
- [ ] Monitor Google Search Console for errors
- [ ] Check indexing status of new content
- [ ] Review search queries and click-through rates

### Monthly Tasks
- [ ] Analyze top-performing pages
- [ ] Update content based on search queries
- [ ] Check backlinks and domain authority
- [ ] Review and respond to any Google Business reviews

### Tools to Use
- **Google Search Console** - Free, essential
- **Google Analytics** - Already installed (GA4: G-KGLK5J3JEE)
- **Google PageSpeed Insights** - Free performance testing
- **Ahrefs/SEMrush** - Optional, for advanced SEO analysis

---

## 📝 Content Recommendations

### Create These Pages/Posts
1. **Location Guides**
   - "Best Photo Spots in Gothic Quarter"
   - "Park Güell Photography Tips"
   - "Beach Photography in Barcelona"

2. **Service Pages**
   - "Couple Photography Packages"
   - "Wedding Photography in Barcelona"
   - "Family Photo Sessions"

3. **Blog/Portfolio Posts**
   - "Maria & John's Love Story in Barcelona"
   - "How to Prepare for Your Photo Session"
   - "What to Wear for Barcelona Photos"

### Keywords to Target
- Primary: "Barcelona photographer", "photo session Barcelona"
- Secondary: "couple photography Barcelona", "love story photoshoot"
- Long-tail: "best photographer for couples in Barcelona", "where to take photos in Barcelona"

---

## ✨ Advanced SEO Features (Optional)

### 1. Add Breadcrumbs
Improves navigation and SEO:
```javascript
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourdomain.com" },
    { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://yourdomain.com/Gallery" }
  ]
};
```

### 2. Add FAQ Schema
For common questions:
```javascript
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a photo session cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our photo sessions start at €150..."
      }
    }
  ]
};
```

### 3. Add Review Schema
When you have client reviews:
```javascript
const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LocalBusiness",
    "name": "Pic Best Moments"
  },
  "author": {
    "@type": "Person",
    "name": "Client Name"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "Amazing photographer!"
};
```

---

## 🚀 Quick SEO Checklist

Before going live:
- [ ] Set `NEXT_PUBLIC_SITE_URL` in production
- [ ] Create all Open Graph images
- [ ] Add alt text to all images
- [ ] Test sitemap: `yourdomain.com/sitemap.xml`
- [ ] Test robots.txt: `yourdomain.com/robots.txt`
- [ ] Verify all metadata with View Source
- [ ] Test on Google Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (already done: G-KGLK5J3JEE)
- [ ] Create Google Business Profile
- [ ] Test mobile responsiveness
- [ ] Check page load speed with Lighthouse

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Run `npm run build` to check for build errors
3. Verify all environment variables are set
4. Test in production mode (`npm run build && npm run start`)

## Resources

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Web.dev SEO Guide](https://web.dev/learn/seo/)

---

**Last Updated:** February 11, 2026
**Status:** ✅ All core SEO features implemented and ready for production
