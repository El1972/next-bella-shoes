import styles from '../styles/Home.module.css'
import { FaChevronDown, FaPhoneAlt } from 'react-icons/fa';
import { BsLock, BsTruck, BsArrowRepeat, BsChatSquareText } from "react-icons/bs";




const Contact = () => {
    return (
        <div>
            <div className={styles['contact']}>
                <div className={styles['contact-main-wrapper']}>

                    <div className={styles['main-header-wrapper']}>
                        <div className={styles['inner-main-header-wrapper']}>
                            <div className={styles['header-container']}>
                                <h1 className={styles['about-header']}>Contact Us</h1>
                            </div>
                        </div>
                        <div className={styles['sub-header-container']}>
                            <p className={styles['sub-header-itself']}>
                                Home<FaChevronDown className={styles['chevron-right']} />
                                We Answer</p>
                        </div>
                    </div>


                    <div className={`${styles['telephone-address-container']} ${styles['clearfix']}`}>

                        <div className={styles['telephone-measure']}>
                            <div className={styles['telephone-qualities']}>
                                <p className={styles['call-us']}>Call Us:</p>
                                <div className={styles['telephone-info']}>
                                    <p className={styles['telephone-one']}>+1 (210) 734-2158 US</p>
                                    <p className={styles['telephone-two']}>+44 20 2653 1836 UK</p>
                                    <p className={styles['telephone-three']}>(9:00 - 17:00 Monday - Friday)</p>
                                    <p className={styles['telephone-four']}>info@hammet.com</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles['address-measure']}>
                            <div className={styles['address-qualities']}>
                                <p className={styles['address-us']}>Address:</p>
                                <div className={styles['address-info']}>
                                    <p className={styles['address-one']}>6300 VESTAL ROAD, USA</p>
                                    <p className={styles['address-two']}>Vestal, NY 13620</p>
                                    <p className={styles['address-three']}>CHENANGO COUNTY</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className={styles['complaints-notice-measures']}>
                        <div className={styles['complaints-notice-properties']}>
                            <p className={styles['complaints-notice']}> If you have any suggestions or complaints you can send them directly to our management team: </p><br />
                            <p className={styles['complaints-notice-two']}>management@bella.com</p>
                        </div>
                    </div>


                    <div className={`${styles['form-container']} ${styles['clearfix']}`}>
                        <div className={styles['form-measure']}>
                            <div className={styles['form-qualities']}>
                                <form className={styles['contact-form']}>
                                    <span className={styles['contact-sign']}>Contact Form:</span>
                                    <div className={styles['input-style']}>
                                        <label htmlFor=""></label>
                                        <input type="text" placeholder='Name:'
                                            className={styles['contact-input']} /><br />
                                    </div>
                                    <div className={styles['input-style']}>
                                        <label htmlFor=""></label>
                                        <input type="email" placeholder='Email:'
                                            className={styles['contact-input']} /><br />
                                    </div>
                                    <div className={styles['input-style']}>
                                        <label htmlFor=""></label>
                                        <input type="phone" placeholder='Phone:'
                                            className={styles['contact-input']} /><br />
                                    </div>
                                    <div className={styles['input-style']}>
                                        <label htmlFor=""></label>
                                        <textarea name="" id="" className={styles['contact-textarea']}
                                            cols="30" rows="10" style={{ resize: "none" }}></textarea>
                                    </div>
                                    <div className={styles['button-container']}>
                                        <div className="button-style clearfix">
                                            <input type='submit' className={styles['button']} value='Send' />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles['info-container']} ${styles['clearfix']}`}>
                        <div className={styles['payment-columns-measure']}>
                            <div className={styles['payment-columns-qualities']}>
                                <i><BsLock className={styles['lock']} /></i>
                                <p className={styles['columns']}>Secure Payments in your <br /> Local Currency</p>
                            </div>
                        </div>
                        <div className={styles['express-columns-measure']}>
                            <div className={styles['express-columns-qualities']}>
                                <i><BsTruck className={styles['truck']} /></i>
                                <p className={styles['columns']}>Free Express Delivery <br /> over £50</p>
                            </div>
                        </div>
                        <div className={styles['returns-columns-measure']}>
                            <div className={styles['returns-columns-qualities']}>
                                <i><BsArrowRepeat className={styles['returns']} /></i>
                                <p className={styles['columns']}>International Returns <br /> & Exchanges</p>
                            </div>
                        </div>
                        <div className={styles['contact-columns-measure']}>
                            <div className={styles['contact-columns-qualities']}>
                                <i><BsChatSquareText className={styles['contact-icon']} /></i>
                                <p className={styles['columns']}>You Can Contact Us Anytime <br /> Anywhere</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div>
    )
}

export default Contact