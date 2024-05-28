import './globals.scss';

import { lato, leagueSpartan } from '@utils/fonts';

export const metadata = {
  title: 'Diamond Printers',
  description:
    'Diamond Printers - Offset, Mini Offset Screen Printers, Computer Stationary, Design, Sticker & Banners,',
  keywords: [
    'Diamond Printers',
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
  ],
  referrer: 'origin-when-cross-origin',
  authors: [{ name: 'Gautam Sachdeva' }],
  creator: 'Kartik Bhalla',
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
