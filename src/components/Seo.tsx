import { Metadata } from "next";
import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function seoGenerateMetadata({ title, description, url }: SeoProps): Metadata {
  return {
    alternates: {
      canonical: url,
      languages: {
        'en-US': '/en-US'
      },
    },
    title,
    description,
    openGraph: {
      title,
      description,
      images: "/og-image.png",
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: "/og-image.png",
    },
  };
}

const Seo = ({ title, description, image, url }: SeoProps) => (
  <Head>
    <title>{title}</title>
    <link rel="alternate" hrefLang="en-US" href="/en-US" />
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {url && <link rel="canonical" href={url}/>}
    
    {image && <meta property="og:image" content={"/og-image.png"} />}
    {url && <meta property="og:url" content={url} />}
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
);

export default Seo;
