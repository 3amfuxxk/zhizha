import type { Metadata } from 'next'
import './globals.css'
import { Manrope } from 'next/font/google'
import { StoreProvider } from '@/store/StoreProvider';
import { CookiesProvider } from 'react-cookie';

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'carefully!',
  description: 'rain is coming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={manrope.className}>{children}</body>
      </html>
    </StoreProvider>
  )
}
