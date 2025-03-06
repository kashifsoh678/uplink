import Image from "next/image";
import React from "react";

const CustomImage = ({
  src = "",
  alt = "image",
  className = "",
  width,
  height,
  nextImage = true,
  priority = false,
  fill = false,
  unoptimized = false,
  ...props
}) => {
  const isExternal = typeof src === "string" && (src.startsWith("http") || src.endsWith(".svg"));

  // Use <Image /> for local images (optimized by Next.js)
  if (!isExternal && nextImage) {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        unoptimized={unoptimized}
        {...props}
      />
    );
  }

  // Use <img> for external URLs, SVGs, or when explicitly required
  return <img src={typeof src === "string" ? src : src.src} alt={alt} className={className} loading="lazy" {...props} />;
};

export default CustomImage;





// ✅ Improvement	🎯 Benefit
// Handles both local & external images	Uses <Image> for local images, <img> for external/SVGs
// Supports fill for responsive images	Allows images to scale dynamically
// Adds priority prop	Optimizes LCP (Largest Contentful Paint) for above-the-fold images
// Allows unoptimized mode	Useful for cloud-hosted images (e.g., CDN)
// Includes loading="lazy" for <img>	Improves performance for non-critical images




// 🚀 Usage Examples

// ✅ Optimized Next.js Image
// <CustomImage src="/images/profile.jpg" width={200} height={200} className="rounded-full" />

// ✅ Responsive (Fill Mode)
// <CustomImage src="/images/banner.jpg" fill className="object-cover" />

// ✅ External Image (Falls Back to <img> for SVGs/CDN)
// <CustomImage src="https://example.com/logo.svg" width={100} height={50} />

// ✅ Priority for Above-the-Fold Images
// <CustomImage src="/images/hero.jpg" width={1200} height={600} priority />