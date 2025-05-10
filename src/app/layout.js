import './globals.scss';

import { lato, leagueSpartan } from '@utils/fonts';

const title = 'Diamond Printers';
const description =
  'Diamond Printers - Offset, Mini Offset Screen Printers, Computer Stationary, Design, Sticker & Banners';
const keywords = [
  title,
  'Diamond',
  'Printers',
  'Cardboard',
  'Printing',
  'Stickers',
  'Banners',
  'Boxes',
  'Labels',
  'Stationary',
  'Stationery',
  'UV',
  'Hybrid',
  'Foil',
  'Rainbow Foil',
  'PLY',
  'Rama Road',
  'Raghav',
  'Guatam',
  'Vineet',
  'Sachdeva',
];
const url = 'https://www.diamondprinters.in';
const metaImage = `${url}/images/diamond-meta.webp`;
const logo = `${url}/images/logo.png`;

export const metadata = {
  title,
  description,
  keywords,
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Gautam Sachdeva' }],
  creator: 'Kartik Bhalla',

  openGraph: {
    title,
    description,
    url,
    images: [
      {
        url: metaImage,
        width: 1920,
        height: 1080,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [
      {
        url: metaImage,
        alt: title,
      },
    ],
    site: `@${title}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: {
      type: 'image/png',
      url: logo,
    },
  },
  referrer: 'origin-when-cross-origin',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${lato.variable} ${leagueSpartan.variable}`}>
        {children}
      </body>
    </html>
  );
}
