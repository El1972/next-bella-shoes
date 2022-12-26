import '../styles/globals.css'
import { ContextAPI } from '../contexts/ProductsContext'
import { FiltersProvider } from '../contexts/FiltersContext'
import { AddToCartProvider } from '../contexts/AddToCartContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import global from '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  return (
    <>
      <div className="top-bar-container">
        <div className="inner-top-bar-container">
          <p className="top-info">FREE delivery, FREE returns and FREE remake (if shoes don&apos;t fit)</p>
        </div>
      </div>
      <div className="master-wrapper">
        <div className="wrapper">
          <div className="sub-wrapper">
            <ContextAPI>
              <FiltersProvider>
                <AddToCartProvider>
                  <Header />
                  <Component {...pageProps} />
                </AddToCartProvider>
              </FiltersProvider>
            </ContextAPI>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyApp
