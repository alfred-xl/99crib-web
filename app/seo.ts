import type { Metadata } from "next";

export const siteUrl = "https://99crib.com";

const socialImage = "/images/sections/hero-students.jpg";

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: { url: string; alt: string };
}): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | 99 Crib`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "99 Crib",
      locale: "en_NG",
      type: "website",
      images: [
        image ?? {
          url: socialImage,
          width: 1920,
          height: 1080,
          alt: "Students exploring accommodation with 99 Crib",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image?.url ?? socialImage],
    },
  };
}
