
import styles from '../styles/Home.module.css'
import { FaChevronDown } from 'react-icons/fa';
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useFiltersContext } from '../contexts/FiltersContext';




const Home = () => {

  let { filtered_items } = useFiltersContext();

  return (
    <div>


      <div className='main-header-wrapper'>
        <div className='inner-main-header-wrapper'>
          <div className='header-container'>
            <h1 className='about-header'>Men&apos;s Shoes</h1>
          </div>
        </div>
        <div className='sub-header-container'>
          <p className='sub-header-itself'>
            Home<FaChevronDown className='chevron-right' />
            Men&apos;s Shoes</p>
        </div>
      </div>
      <Hero />
      <div className='general-wrapper clearfix'>
        <Sidebar />
        {
          filtered_items.map((i, index) => {
            const { id, images, bestsellers, names, prices } = i
            return (
              <div className='image-container' key={index}>
                <div className='image-width' key={id}>
                  <Link href={`products/${id}`}>
                    <AnimatePresence>
                      <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ scale: 1.2 }}
                        className='image-float'>
                        <div className='image-properties'>
                          <div className='shoes-images'>
                            <div className='shoe-container'>
                              <picture>
                                <img src={`../../images/${images}`}
                                  alt="" className='shoe-one' />
                              </picture>
                            </div>
                            <div className='image-info-container'>
                              <p className='image-bestsellers'>{bestsellers}</p>
                              <p className='image-names'>{names}</p>
                              <p className='image-prices'>${prices}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
