"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../Functions/useLanguage";
import Head from "next/head";

// Lazy-loaded video component
const LazyVideo = ({ src, poster }) => {
  const wrapperRef = useRef(null);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRenderVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) observer.unobserve(wrapperRef.current);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="w-full h-auto max-h-[400px] rounded-lg overflow-hidden">
      {shouldRenderVideo ? (
        <video
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          className="w-full h-auto object-cover rounded-lg"
        />
      ) : (
        <Image
          src={poster}
          alt="Latore preview"
          className="w-full h-auto object-cover rounded-lg"
        />
      )}
    </div>
  );
};

const Hero = () => {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "hero");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Latore - Український бренд жіночого одягу" />
        <meta name="keywords" content="Latore, жіночий одяг, українська мода, стильний одяг" />
        <meta property="og:title" content="Latore - Український бренд жіночого одягу" />
        <meta property="og:description" content="Ласкаво просимо на наш сайт! Досліджуйте останні тренди моди." />
        <meta property="og:image" content="/hoom/hero2.avif" />
        <meta property="og:url" content="https://example.com" />
      </Head>

      {/* Desktop Hero Section */}
      <section className="hidden lg:flex relative w-[1280px] xl:w-[1800px] 2xl:w-[2400px] h-[400px] xl:h-[550px] 2xl:h-[650px] mx-auto justify-center items-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hoom/baner-desk.avif"
            alt="Latore Collection"
            width={2400}
            height={650}
            className="absolute inset-0 object-cover"
            quality={100}
            priority
          />
        </div>
        <div className="absolute mt-64 lg:mt-64 xl:mt-[420px] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 px-6">
          <p className="text-lg sm:text-3xl lg:text-3xl xl:text-5xl">{menuItems[0]}</p>
        </div>
      </section>

      {/* Mobile/Tablet Hero Section */}
      <section
        className="flex flex-row justify-center items-center gap-2 sm:gap-16 section-container overflow-hidden lg:hidden"
        aria-labelledby="hero-heading"
        role="banner"
      >
        {isClient && (
          <div className="relative w-[200px] max-w-[300px] h-auto flex-shrink-0 overflow-hidden">
            <LazyVideo src="/hoom/baner.mp4" poster="/hoom/baner-mal.avif" />
            <noscript>
              <Image src="/hoom/baner-mal.avif" alt="Latore video" className="rounded-lg" />
            </noscript>
          </div>
        )}

        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left w-[40vw] sm:w-auto">
          <div className="relative w-[35vw] sm:w-[300px] lg:w-[350px] max-w-[600px] h-auto overflow-hidden">
            <Image
              src="/hoom/baner-mal.avif"
              alt="Latore Collection Style"
              width={600}
              height={500}
              className="object-cover shadow-lg w-full h-auto rounded-lg"
              priority
            />
          </div>
          <h2 className="text-xl sm:text-5xl lg:text-7xl font-bold text-gray-700 dark:text-white ml-2 sm:ml-12 sm:mt-2">
            LATORE
          </h2>
          <p className="text-xs sm:text-xl lg:text-3xl text-gray-600 dark:text-white ml-2 sm:ml-12 sm:mt-4">
            {menuItems[1]}
          </p>
          <p className="text-xs sm:text-xl lg:text-3xl text-gray-600 dark:text-white ml-2 sm:ml-16">
            {menuItems[2]}
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;