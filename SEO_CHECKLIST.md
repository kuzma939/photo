# SEO Quick Checklist - Pic Best Moments

## ✅ Already Completed

- [x] Fixed all page components to use proper Next.js 15 metadata
- [x] Removed deprecated `<Head>` from `next/head`
- [x] Added comprehensive keywords to all pages
- [x] Added Twitter Card metadata
- [x] Created sitemap.js (`/sitemap.xml`)
- [x] Created robots.js (`/robots.txt`)
- [x] Added LocalBusiness JSON-LD schema
- [x] Enhanced SEO configuration file
- [x] Added canonical URLs to all pages
- [x] Configured advanced robots directives
- [x] Google Analytics already installed (G-KGLK5J3JEE)

## 🎯 To Do Before Launch

### Critical (Do First)
- [ ] Set `NEXT_PUBLIC_SITE_URL` environment variable in production
- [ ] Create Open Graph images (1200x628px):
  - [ ] `/public/logo-social.jpg`
  - [ ] `/public/og/contact.jpg`
  - [ ] `/public/og/gallery.jpg`
  - [ ] `/public/og/love-stories.jpg`
  - [ ] `/public/og/favorite-spots.jpg`
  - [ ] `/public/og/conditions.jpg`
- [ ] Verify favicon files exist:
  - [ ] `/public/favicon-32x32.png`
  - [ ] `/public/favicon-16x16.png`
  - [ ] `/public/favicon.ico`

### Important (Do Within First Week)
- [ ] Set up Google Search Console
- [ ] Verify website ownership
- [ ] Submit sitemap to Google Search Console
- [ ] Create/claim Google Business Profile for Barcelona
- [ ] Add business hours and contact info to Google Business
- [ ] Request indexing for main pages

### Testing (Before Launch)
- [ ] Test sitemap: `https://yourdomain.com/sitemap.xml`
- [ ] Test robots.txt: `https://yourdomain.com/robots.txt`
- [ ] Run Google Rich Results Test on homepage
- [ ] Test Open Graph with Facebook Sharing Debugger
- [ ] Run Lighthouse audit (aim for 90+ SEO score)
- [ ] Check mobile responsiveness
- [ ] Test page load speed

### Content Optimization
- [ ] Add descriptive alt text to all images
- [ ] Check heading structure (one H1 per page)
- [ ] Add internal links between related pages
- [ ] Create location-specific content (Gothic Quarter, Park Güell, etc.)
- [ ] Add client testimonials/reviews

### Optional (But Recommended)
- [ ] Add breadcrumb navigation with JSON-LD
- [ ] Create FAQ section with FAQ schema
- [ ] Set up review schema for client testimonials
- [ ] Add Twitter/X handle if you have one
- [ ] Create blog posts about Barcelona photo locations
- [ ] Build backlinks from Barcelona directories

## 📊 Monthly Monitoring

- [ ] Check Google Search Console for errors
- [ ] Review indexing status
- [ ] Analyze search queries and CTR
- [ ] Check Core Web Vitals
- [ ] Monitor Google Business reviews
- [ ] Update content based on search trends

## 🚨 Common Issues to Watch For

- Missing `NEXT_PUBLIC_SITE_URL` → causes localhost URLs in production
- Missing Open Graph images → poor social media sharing
- No Google Search Console → can't monitor search performance
- Slow page load → hurts SEO rankings
- Missing alt text → accessibility and SEO issues

## 📞 Quick Tests

```bash
# Test the build
npm run build

# Test in production mode
npm run start

# Check for any console errors
# Open Chrome DevTools → Console

# Run Lighthouse
# Chrome DevTools → Lighthouse → Generate report
```

## 🎉 You're All Set!

Once you complete the "Critical" and "Important" tasks, your SEO will be in excellent shape. The foundation is solid, now it's about content and promotion!

---

**Need the full guide?** See `SEO_GUIDE.md` for detailed instructions.
