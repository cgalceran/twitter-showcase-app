import './globals.css'
import { Inter } from "@next/font/google";
import Navbar from '@/app/Navbar';
import { Footer } from './Footer';

const inter = Inter({
  weight: ['100', '200' ,'400','700','800', "900"],
  subsets: ['latin'],
  variable: "--font-inter", 
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>Twitter Showcase</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
