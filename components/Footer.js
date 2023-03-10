import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Facebook from './Facebook';
import Instagram from './Instagram';
import Pinterest from './Pinterest';
import Twitter from './Twitter';
import Youtube from './Youtube';



const Footer = () => {

    const update = () => {
        console.log('me');
    }

    return (
        <div>
            <div className='footer'>
                <div className="container">

                    <div className="inner-container-columns clearfix">
                        <div className="footer-column-one">
                            <div className="footer-column-one-styling">
                                <h4 className='footer-header'>About Us:</h4>
                                <br />
                                <ul className='footer-column-first'>
                                    <li>About</li><br />
                                    <li>Manufacturing</li><br />
                                    <li>Why custom made</li><br />
                                    <li>Special sizes</li><br />
                                    <li>Legal Notice</li><br />
                                    <li>Contacts</li><br />
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-column-two">
                            <div className="footer-column-two-styling">
                                <h4 className='footer-header'>Shopping:</h4>
                                <br />
                                <ul className='footer-column-second'>
                                    <li>Custom Shoes</li><br />
                                    <li>Custom Made Men&apos;s</li><br />
                                    <li>Shoes</li><br />
                                    <li>How it works</li><br />
                                    <li>Personal Inscription</li><br />
                                    <li>How to choose size</li><br />
                                    <li>Reviews</li><br />
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-column-three">
                            <div className="footer-column-three-styling">
                                <h4 className='footer-header'>Orders:</h4>
                                <br />
                                <ul className='footer-column-third'>
                                    <li>Track order</li><br />
                                    <li>Payment Methods</li><br />
                                    <li>Delivery</li><br />
                                    <li>Returns</li><br />
                                    <li>Terms and Conditions</li><br />
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className="men-women">
                            <div className="men-women-styling">
                                <h4 className='stay-updated'>Stay Updated</h4>
                                <input type="text" placeholder='E-mail...'
                                    className='footer-input' />
                                <br />
                                <div className='men-women-container'>
                                    <span onClick={update}
                                        className='men-button'>Men</span>
                                    <span onClick={update}
                                        className='women-button'>Women</span>
                                </div>
                            </div>
                        </div>
                        <div className="footer-logo">
                            <div className="footer-logo-styling">
                                <h1 className='bella'>Bella</h1>
                                <h4 className='shoemaker'>Shoemakers</h4>
                                <br />
                            </div>
                        </div>
                        <div className="footer-social">
                            <div className="footer-social-media">

                                <div className="facebook-container">
                                    <Link href={'https://www.facebook.com'}>
                                        <span className='facebook-icon'>
                                            <Facebook />
                                        </span>
                                    </Link>
                                </div>

                                <div className="twitter-container">
                                    <Link href={'https://twitter.com'}>
                                        <span className='twitter-icon'>
                                            <Twitter />
                                        </span>
                                    </Link>
                                </div>

                                <div className="instagram-container">
                                    <Link href={'https://www.instagram.com'}>
                                        <span className='instagram-icon'>
                                            <Instagram />
                                        </span>
                                    </Link>
                                </div>

                                <div className="pinterest-container">
                                    <Link href={'https://www.pinterest.com'}>
                                        <span className='pinterest-icon'>
                                            <Pinterest />
                                        </span>
                                    </Link>
                                </div>

                                <div className="youtube-container">
                                    <Link href={'https://www.youtube.com'}>
                                        <span className='youtube-icon'>
                                            <Youtube />
                                        </span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className="footer-sentence-width">
                            <div className="footer-sentence-properties">
                                <span className='copyright-sentence'>?? 2009 - 2022 CUSTOM DESIGN ITALY S.R.L. - All rights reserved. VAT: IT12281840962 - Vendor information</span>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-footer">
                        <div className="inner-bottom-footer">

                        </div>
                    </div>

                </div>
            </div>
            {/* <div className={styles['footer']}>
                <div className={styles['container']}>

                    <div className={`${styles['inner-container-columns']} ${styles['two-thirds']}`}>
                        <div className={styles['footer-column-one']}>
                            <div className={styles['footer-column-one-styling']}>
                                <h4 className={styles['footer-header']}>About Us:</h4>
                                <br />
                                <ul className={styles['footer-column-first']}>
                                    <li>About</li><br />
                                    <li>Manufacturing</li><br />
                                    <li>Why custom made</li><br />
                                    <li>Special sizes</li><br />
                                    <li>Legal Notice</li><br />
                                    <li>Contacts</li><br />
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles['footer-column-two']}>
                            <div className={styles['footer-column-two-styling']}>
                                <h4 className={styles['footer-header']}>Shopping:</h4>
                                <br />
                                <ul className={styles['footer-column-second']}>
                                    <li>Custom Shoes</li><br />
                                    <li>Custom Made Men&apos;s</li><br />
                                    <li>Shoes</li><br />
                                    <li>How it works</li><br />
                                    <li>Personal Inscription</li><br />
                                    <li>How to choose size</li><br />
                                    <li>Reviews</li><br />
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles['footer-column-three']}>
                            <div className={styles['footer-column-three-styling']}>
                                <h4 className={styles['footer-header']}>Orders:</h4>
                                <br />
                                <ul className={styles['footer-column-third']}>
                                    <li>Track order</li><br />
                                    <li>Payment Methods</li><br />
                                    <li>Delivery</li><br />
                                    <li>Returns</li><br />
                                    <li>Terms and Conditions</li><br />
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles['men-women']}>
                            <div className={styles['men-women-styling']}>
                                <h4 className={styles['stay-updated']}>Stay Updated</h4>
                                <input type="text" placeholder='E-mail...'
                                    className={styles['footer-input']} />
                                <br />
                                <div className={styles['men-women-container']}>
                                    <span onClick={update}
                                        className={styles['men-button']}>Men</span>
                                    <span onClick={update}
                                        className={styles['women-button']}>Women</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles['footer-logo']}>
                            <div className={styles['footer-logo-styling']}>
                                <h1 className={styles['bella']}>Bella</h1>
                                <h4 className={styles['shoemaker']}>Shoemakers</h4>
                                <br />
                            </div>
                        </div>
                        <div className={styles['footer-social']}>
                            <div className={styles['footer-social-media']}>

                                <div className={styles['facebook-container']}>
                                    <Link href={'https://www.facebook.com'}>
                                        <span className={styles['facebook-icon']}>
                                            <Facebook />
                                        </span>
                                    </Link>
                                </div>

                                <div className={styles['twitter-container']}>
                                    <Link href={'https://twitter.com'}>
                                        <span className={styles['twitter-icon']}>
                                            <Twitter />
                                        </span>
                                    </Link>
                                </div>

                                <div className={styles['instagram-container']}>
                                    <Link href={'https://www.instagram.com'}>
                                        <span className={styles['instagram-icon']}>
                                            <Instagram />
                                        </span>
                                    </Link>
                                </div>

                                <div className={styles['pinterest-container']}>
                                    <Link href={'https://www.pinterest.com'}>
                                        <span className={styles['pinterest-icon']}>
                                            <Pinterest />
                                        </span>
                                    </Link>
                                </div>

                                <div className={styles['youtube-container']}>
                                    <Link href={'https://www.youtube.com'}>
                                        <span className={styles['youtube-icon']}>
                                            <Youtube />
                                        </span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <div className={styles['footer-sentence-width']}>
                            <div className={styles['footer-sentence-properties']}>
                                <span className={styles['copyright-sentence']}>?? 2009 - 2022 CUSTOM DESIGN ITALY S.R.L. - All rights reserved. VAT: IT12281840962 - Vendor information</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles['bottom-footer']}>
                        <div className={styles['inner-bottom-footer']}>

                        </div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default Footer