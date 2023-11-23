import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Cairo_Play } from 'next/font/google'

const font = Cairo_Play({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className={font.className}>
    <Navbar/>
    <Component {...pageProps} />
  </div>)
}
