// import './globals.css'
// // import { Analytics } from "../vercel/analytics/next"
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// export const metadata = {
//   title: 'Uneeb Ahmed Portfolio',
//   description: 'Portfolio website for Data Analyst & Business Analyst',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="relative min-h-screen ">
//        <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
//          <Navbar />   {/* Shows on every page */}
//         <main>{children}</main>
//         {/* <Analytics/> */}
//         <Footer />   {/* Shows on every page */}
        
//       </body>
//     </html>
//   )
// }
import './globals.css'
import { Montserrat, Lato } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Uneeb Ahmed Portfolio',
  description: 'Portfolio website for Data Analyst & Business Analyst',
}

// Import Google Fonts
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body className="relative min-h-screen font-sans">
        {/* Background */}
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>

        <Navbar /> {/* Shows on every page */}
        <main>{children}</main>
        <Footer /> {/* Shows on every page */}
      </body>
    </html>
  )
}
