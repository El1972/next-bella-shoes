import '../styles/globals.css'
import { ContextAPI } from '../contexts/ProductsContext'
import { FiltersProvider } from '../contexts/FiltersContext'
import { AddToCartProvider } from '../contexts/AddToCartContext'
import Header from '../components/Header'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <ContextAPI>
        <FiltersProvider>
          <AddToCartProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </AddToCartProvider>
        </FiltersProvider>
      </ContextAPI>
    </>
  )
}

export default MyApp
