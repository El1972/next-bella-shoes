import '../styles/globals.css'
import { ContextAPI } from '../contexts/ProductsContext'
import { FiltersProvider } from '../contexts/FiltersContext'
import { AddToCartProvider } from '../contexts/AddToCartContext'

function MyApp({ Component, pageProps }) {

  return (
    <ContextAPI>
      <FiltersProvider>
        <AddToCartProvider>
          <Component {...pageProps} />
        </AddToCartProvider>
      </FiltersProvider>
    </ContextAPI>
  )
}

export default MyApp
