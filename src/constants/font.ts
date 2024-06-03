import localFont from '@next/font/local';
import { Barlow } from 'next/font/google';

export const edingu = localFont({
  src: [
    {
      path: '../../public/fonts/TWKLausanne.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-f-lausanne-300',
});

export const barlow = Barlow({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});
