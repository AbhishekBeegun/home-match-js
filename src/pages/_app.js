import Footer from "@/components/BasicLayout/Footer"
import Navbar from "@/components/Navbar/Navbar"
import NavbarMobile from "@/components/Navbar/NavbarMobile"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
  <>
  <Navbar/>
  <NavbarMobile/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
