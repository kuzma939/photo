const seoConfig = { 
  contact: {
    title: "Контакти | Магазин жіночого одягу",
    description: "Контактна сторінка для запитів та зв'язку.",
    openGraph: {
      url: "https://shoopingsite-my9e.vercel.app/contact",
      title: "Контакти | Магазин жіночого одягу",
      description: "Отримайте контактну інформацію для вашого запиту.",
      type: "website",
      images: [
        { 
          url: "https://shoopingsite-my9e.vercel.app/logo-social.jpg", // Додаємо повний шлях до зображення
          width: 1200, // Рекомендовані розміри
          height: 628,
          alt: "Contact Page Image" // Альтернативний текст
        }
      ]
    },
    canonical: "https://shoopingsite-my9e.vercel.app/contact",
    robots: "index, follow"
  },
loveStory: {
  title: "Love Story | Магазин жіночого одягу",
  description: "Найромантичніші образи, натхненні коханням. Ексклюзивні луки для закоханих пар.",
  openGraph: {
    url: "https://shoopingsite-my9e.vercel.app/love-story",
    title: "Love Story | Магазин жіночого одягу",
    description: "Найромантичніші образи, натхненні коханням. Ексклюзивні луки для закоханих пар.",
    images: [
      { 
        url: "https://shoopingsite-my9e.vercel.app/love-story-preview.jpg",
        width: 1200,
        height: 628,
        alt: "Love Story Preview Image"
      }
    ]
  },
  canonical: "https://shoopingsite-my9e.vercel.app/love-story",
  robots: "index, follow"
},


  gallery: {
    title: "Галерея | Магазин жіночого одягу",
    description: "Дивіться нашу галерею та популярні колекції.",
    openGraph: {
      url: "https://shoopingsite-my9e.vercel.app/gallery",
      title: "Галерея | Магазин жіночого одягу",
      description: "Наша галерея для стильних образів.",
      images: [
        {
          url: "https://shoopingsite-my9e.vercel.app/gallery-preview.jpg",
          width: 1200,
          height: 628,
          alt: "Gallery Page Image"
        }
      ]
    },
    canonical: "https://shoopingsite-my9e.vercel.app/gallery",
    robots: "index, follow"
  },

  conditions: {
    title: "Умови користування | Магазин жіночого одягу",
    description: "Перегляньте наші умови користування та політику конфіденційності.",
    openGraph: {
      url: "https://shoopingsite-my9e.vercel.app/conditions",
      title: "Умови користування | Магазин жіночого одягу",
      description: "Важлива інформація щодо умов користування сервісом.",
      images: [
        { 
          url: "https://shoopingsite-my9e.vercel.app/conditions-preview.jpg",
          width: 1200,
          height: 628,
          alt: "Conditions Page Image"
        }
      ]
    },
    canonical: "https://shoopingsite-my9e.vercel.app/conditions",
    robots: "index, follow"
  },

  allProducts: {
    title: "Всі товари | Магазин жіночого одягу",
    description: "Перегляньте всі доступні товари нашого магазину.",
    openGraph: {
      url: "https://shoopingsite-my9e.vercel.app/all-products",
      title: "Всі товари | Магазин жіночого одягу",
      description: "Дізнайтеся більше про наші колекції жіночого одягу.",
      images: [
        { 
          url: "https://shoopingsite-my9e.vercel.app/all-products-preview.jpg",
          width: 1200,
          height: 628,
          alt: "All Products Page Image"
        }
      ]
    },
    canonical: "https://shoopingsite-my9e.vercel.app/all-products",
    robots: "index, follow"
  },

  galleryLocations: {
    title: "Галерея локацій | Магазин жіночого одягу",
    description: "Дивіться наші локації та популярні фотосесії.",
    openGraph: {
      url: "https://shoopingsite-my9e.vercel.app/gallery-locations-page",
      title: "Галерея локацій | Магазин жіночого одягу",
      description: "Галерея локацій для стильних образів.",
      images: [
        {
          url: "https://shoopingsite-my9e.vercel.app/gallery-locations-page-preview.jpg",
          width: 1200,
          height: 628,
          alt: "Gallery Locations Page Image"
        }
      ]
    },
    canonical: "https://shoopingsite-my9e.vercel.app/gallery-locations-page",
    robots: "index, follow"
  }
};

export default seoConfig;
