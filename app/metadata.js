const metadata = {
  metadataBase: new URL("https://calcool-five.vercel.app"),

  title: {
    default: "CalCool - Free Tape Calculator",
    template: "%s | CalCool",
  },

  description:
    "CalCool is a free tape calculator for fast, accurate calculations with calculation history, memory functions, PDF export, and a clean modern interface.",

  keywords: [
    "CalCool",
    "tape calculator",
    "calculator",
    "free calculator",
    "online calculator",
    "desktop calculator",
    "accounting calculator",
    "business calculator",
    "calculation tape",
    "calculator with history",
    "calculator PDF export",
  ],

  authors: [
    {
      name: "MohsinDev",
    },
  ],

  creator: "MohsinDev",
  publisher: "CalCool",
  applicationName: "CalCool",
  category: "calculator",

  alternates: {
    canonical: "https://calcool-five.vercel.app",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://calcool-five.vercel.app",
    title: "CalCool - Free Tape Calculator",

    description:
      "A fast and easy tape calculator with calculation history, memory functions, PDF export, and more.",

    siteName: "CalCool",
    locale: "en_US",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CalCool - Free Tape Calculator",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "CalCool - Free Tape Calculator",

    description:
      "A free tape calculator with history, memory functions, PDF export, and a clean modern interface.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default metadata;
