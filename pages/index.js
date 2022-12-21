
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
      <div>
        <div className={styles['main-header-wrapper']}>
          <div className={styles['inner-main-header-wrapper']}>
            <div className={styles['header-container']}>
              <h1 className={styles['about-header']}>Men&apos;s Shoes</h1>
            </div>
          </div>
          <div className={styles['sub-header-container']}>
            <p className={styles['sub-header-itself']}>
              Home<FaChevronDown className={styles['chevron-right']} />
              Men&apos;s Shoes</p>
          </div>
        </div>
        <Hero />
        <div className={styles['general-wrapper clearfix']}>
          <Sidebar />
          {
            filtered_items.map((i, index) => {
              const { id, images, bestsellers, names, prices } = i
              return (
                <div className={styles['image-container']} key={index}>
                  <div className={styles['image-width']} key={id}>
                    <Link href={`product/${id}`}>
                      <AnimatePresence>
                        <motion.div
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          whileHover={{ scale: 1.2 }}
                          className={styles['image-float']}>
                          <div className={styles['image-properties']}>
                            <div className={styles['shoes-images']}>
                              <div className={styles['shoe-container']}>
                                <picture>
                                  <img src={`../../images/${images}`}
                                    alt="" className={styles['shoe-one']} />
                                </picture>
                              </div>
                              <div className={styles['image-info-container']}>
                                <p className={styles['image-bestsellers']}>{bestsellers}</p>
                                <p className={styles['image-names']}>{names}</p>
                                <p className={styles['image-prices']}>${prices}</p>
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
    </div>
  )
}

export default Home
