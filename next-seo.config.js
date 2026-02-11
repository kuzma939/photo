const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

const url = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
const img = (path = "/logo-social.jpg") => url(path);

const BRAND = "Pic Best Moments";

// Універсальний дефолт
const seoConfig = {
  defaults: {
    title: `${BRAND} — Photographer in Barcelona`,
    description:
      "Professional photo sessions in Barcelona: couples, love stories, families, portraits. Easy booking and transparent pricing.",
    keywords: [
      "Barcelona photographer",
      "love story photoshoot",
      "family photos Barcelona",
      "portrait photographer",
      "photo session Barcelona",
      "couple photography",
      "professional photographer Barcelona",
      "wedding photographer Barcelona",
    ],
    openGraph: {
      url: SITE_URL,
      title: `${BRAND} — Photographer in Barcelona`,
      description:
        "Professional photo sessions in Barcelona: couples, love stories, families, portraits. Easy booking and transparent pricing.",
      type: "website",
      locale: "en_US",
      siteName: BRAND,
      images: [{ url: img("/logo-social.jpg"), width: 1200, height: 628, alt: BRAND }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${BRAND} — Photographer in Barcelona`,
      description:
        "Professional photo sessions in Barcelona: couples, love stories, families, portraits.",
      images: [img("/logo-social.jpg")],
    },
    canonical: SITE_URL,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  },

  // Contact / Booking page
  contact: {
    title: "Contact & Booking | Pic Best Moments",
    description: "Book your photo session in Barcelona: pick date, time and duration. We reply within 24 hours.",
    keywords: [
      "book photographer Barcelona",
      "contact photographer",
      "photo session booking",
      "Barcelona photography booking",
    ],
    openGraph: {
      url: url("/contact"),
      title: "Contact & Booking | Pic Best Moments",
      description: "Book your photo session in Barcelona: pick date, time and duration.",
      type: "website",
      locale: "en_US",
      siteName: BRAND,
      images: [{ url: img("/og/contact.jpg"), width: 1200, height: 628, alt: "Contact & Booking" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact & Booking | Pic Best Moments",
      description: "Book your photo session in Barcelona.",
      images: [img("/og/contact.jpg")],
    },
    canonical: url("/contact"),
    robots: {
      index: true,
      follow: true,
    },
  },

  // Love Stories (портфоліо парних зйомок)
  loveStory: {
    title: "Love Stories | Pic Best Moments",
    description: "Romantic couple photo sessions in Barcelona. Explore our love story portfolio.",
    keywords: [
      "love story photoshoot",
      "couple photography Barcelona",
      "romantic photos",
      "engagement photos Barcelona",
    ],
    openGraph: {
      url: url("/love-story"),
      title: "Love Stories | Pic Best Moments",
      description: "Romantic couple photo sessions in Barcelona.",
      type: "website",
      locale: "en_US",
      siteName: BRAND,
      images: [{ url: img("/og/love-stories.jpg"), width: 1200, height: 628, alt: "Love Stories" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Love Stories | Pic Best Moments",
      description: "Romantic couple photo sessions in Barcelona.",
      images: [img("/og/love-stories.jpg")],
    },
    canonical: url("/love-story"),
    robots: {
      index: true,
      follow: true,
    },
  },

  // Gallery (загальна галерея робіт)
  gallery: {
    title: "Gallery | Pic Best Moments",
    description: "A curated gallery of photo sessions captured around Barcelona.",
    keywords: [
      "photo gallery Barcelona",
      "photography portfolio",
      "Barcelona photos",
      "professional photography examples",
    ],
    openGraph: {
      url: url("/Gallery"),
      title: "Gallery | Pic Best Moments",
      description: "A curated gallery of photo sessions captured around Barcelona.",
      type: "website",
      locale: "en_US",
      siteName: BRAND,
      images: [{ url: img("/og/gallery.jpg"), width: 1200, height: 628, alt: "Gallery" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Gallery | Pic Best Moments",
      description: "A curated gallery of photo sessions captured around Barcelona.",
      images: [img("/og/gallery.jpg")],
    },
    canonical: url("/Gallery"),
    robots: {
      index: true,
      follow: true,
    },
  },

  // Favorite Spots / Gallery Locations
  favoriteSpots: {
    title: "Favorite Spots in Barcelona | Pic Best Moments",
    description: "Best photo locations in Barcelona with real session examples and tips.",
    keywords: [
      "Barcelona photo locations",
      "best spots for photos Barcelona",
      "photography locations",
      "Barcelona landmarks",
    ],
    openGraph: {
      url: url("/GalleryLocationsPage"),
      title: "Favorite Spots in Barcelona | Pic Best Moments",
      description: "Best photo locations in Barcelona with real session examples and tips.",
      type: "website",
      locale: "en_US",
      siteName: BRAND,
      images: [{ url: img("/og/favorite-spots.jpg"), width: 1200, height: 628, alt: "Favorite Spots" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Favorite Spots in Barcelona | Pic Best Moments",
      description: "Best photo locations in Barcelona with real session examples and tips.",
      images: [img("/og/favorite-spots.jpg")],
    },
    canonical: url("/GalleryLocationsPage"),
    robots: {
      index: true,
      follow: true,
    },
  },

  // Terms & Conditions
  conditions: {
    title: "Terms & Conditions | Pic Best Moments",
    description: "Read our Terms & Conditions and Privacy Policy.",
    keywords: ["terms and conditions", "privacy policy", "photographer terms"],
    openGraph: {
      url: url("/Conditions"),
      title: "Terms & Conditions | Pic Best Moments",
      description: "Read our Terms & Conditions and Privacy Policy.",
      type: "website",
      locale: "en_US",
      siteName: BRAND,
      images: [{ url: img("/og/conditions.jpg"), width: 1200, height: 628, alt: "Terms & Conditions" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Terms & Conditions | Pic Best Moments",
      description: "Read our Terms & Conditions and Privacy Policy.",
      images: [img("/og/conditions.jpg")],
    },
    canonical: url("/Conditions"),
    robots: {
      index: true,
      follow: true,
    },
  },
  allProducts: {
    title: "Favorite Spots — PBM",
    description: "Best photo spots in Barcelona.",
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/favorite-spots`,
      title: "Favorite Spots — PBM",
      description: "Best photo spots in Barcelona.",
      type: "website",
      images: [
        { url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/logo-social.jpg`, width: 1200, height: 628, alt: "PBM" }
      ]
    },
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/favorite-spots`,
    robots: "index, follow"
  },

};

export default seoConfig;
