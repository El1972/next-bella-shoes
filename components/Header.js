import styles from '../styles/Home.module.css'
import ShoppingBagComponent from '../components/ShoppingBagComponent'
import { FaHome, FaChevronDown, FaCartArrowDown } from 'react-icons/fa';
import Link from 'next/link';
import { useAddToCartContext } from '../contexts/AddToCartContext';



const Header = () => {

    const { both_carts_items_total } = useAddToCartContext()

    return (

        <div>
            <div className={`${styles['login-cart-container']} ${styles['clearfix']}`}>
                <div className={styles['inner-login-cart-container']}>
                    <Link href={'./products'}>
                        <ShoppingBagComponent className={styles['shopping-bag-component']} />
                        <p className={styles['cart-number']}>{both_carts_items_total}</p>
                    </Link>
                </div>
            </div>
            <div className={styles['brandname-container']}>
                <div className={styles['inner-brandname-container']}>
                    <Link href={'./'}>
                        <h1 className={styles['brandname-header-itself']}>Bella</h1>
                    </Link>
                </div>
                <div className={styles['brandname-sentence']}>
                    <p className={styles['brandname-sentence-edit']}>
                        One and Only</p>
                </div>

            </div>
            <div className={styles['width-header']}>
                <div className={styles['structure-header']}>
                    <div className={styles['lines-header']}>
                        <div className={styles['properties-header']}>
                            <ul className={styles['header-links']}>
                                <li className={styles['nav-links hommer']}><Link href='/' className={styles['react-link-home']}><i className={styles['home-logo']}><FaHome /></i></Link></li>
                                <li className={styles['nav-links first']}><Link href='/' className={styles['react-link-home']}>Men&apos;s Shoes<FaChevronDown className={styles['chevron']} /></Link></li>
                                <li className={styles['nav-links']}><Link href='/women' className={styles['react-link']}>Women&apos;s Shoes<FaChevronDown className={styles['chevron']} /></Link></li>
                                <li className={styles['nav-links']}><Link href='/about' className={styles['react-link']}>About Us</Link></li>
                                <li className={`${styles['nav-links']} ${styles['last']}`}><Link href='/contact' className={styles['react-link']}>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header