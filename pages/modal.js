import styles from '../styles/Home.module.css'
import Link from 'next/link';
import { BsHandbag } from "react-icons/bs";
import { FaHome } from 'react-icons/fa';
import { useAddToCartContext } from '../contexts/AddToCartContext';
import { useState } from 'react';




const Modal = (props) => {

    const { sizes, addToCart } = useAddToCartContext();

    const [setSize, setSetSize] = useState(sizes)

    const { id, images, names, count, prices, stock, amount } = props



    return (

        <div>
            <div className={styles['modal-browser-wrapper']}>
                <div className={styles['inner-modal-browser-wrapper']}>

                    <div className={styles['modal-window-measure']}>
                        <div className={styles['modal-window-qualities-position']}>

                            <div className={styles['modal-window-position-container']}>

                                {/* Blocks Of Buttons Inside Of Window */}


                                {/* First: Block Of Add To Cart Buttons */}
                                <div className={styles['buttons-container']}>
                                    <div className={styles['inner-buttons-container']}>

                                        <div className={styles['modal-single-info-size-container']}>
                                            <Link href={'.'}
                                                className={styles['modal-single-info-size-button']}
                                            >
                                                <p className={styles['modal-single-info-size']}>
                                                    Size
                                                </p>
                                            </Link>
                                        </div>

                                        <div className={styles['modal-single-info-cart-container']}>
                                            <Link href={'/products'} className={styles['modal-single-info-cart-button']}
                                                onClick={() => addToCart(id, images, names, count, prices, stock, amount, setSize)}
                                            >
                                                <p className={styles['modal-single-info-cart']}>
                                                    <BsHandbag className={styles['modal-cart-icon']} />Add To Cart
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End Of First: Block Of Add To Cart Buttons */}


                                {/* 1 */}
                                {/* Second: Block Of Countries Buttons */}
                                <div className={`${styles['countries-container']} ${styles['clearfix']}`}>
                                    <div className={styles['inner-countries-container']}>
                                        {/* <button onClick={() => coordinate(setSize, 'uk')}>uk</button> */}
                                        {/* <button onClick={() => coordinate('eu')}>eu</button> */}
                                    </div>
                                </div>
                                {/* End Of Second: Block Of Countries Buttons */}



                                {/* 2 */}
                                {/* Third: Block Of Countries Buttons */}
                                <div className={`${styles['sizes-container']} ${styles['clearfix']}`}>
                                    <div className={styles['inner-sizes-container']}>
                                        {sizes.map((s, index) => {
                                            return (
                                                <button key={index}
                                                    className={`${styles['size-button']} ${s === setSize ? `${styles['active']}` : null}`}
                                                    onClick={() => setSetSize(s)}
                                                >
                                                    {s.us}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                                {/* End Of Third: Block Of Countries Buttons */}



                                {/* Fourth: Block Of Countries Buttons */}
                                <div className={`${styles['size-heading-container']} ${styles['clearfix']}`}>
                                    <div className={styles['inner-size-heading-container']}>
                                        <h4>Choose Your size:</h4>
                                    </div>
                                </div>
                                {/* End Of Fourth: Block Of Countries Buttons */}

                                {/* Fifth: Block Of Countries Buttons */}
                                <div className={`${styles['what-my-size-container']} ${styles['clearfix']}`}>
                                    <div className={styles['inner-what-my-size-container']}>
                                        <span className={styles['what-my-size']}>What&apos;s my size?</span>
                                    </div>
                                </div>
                                {/* End Of Fifth: Block Of Countries Buttons */}

                                {/* Sixth: Block Of Countries Buttons */}
                                <div className={`${styles['what-go-home-container']} ${styles['clearfix']}`}>
                                    <div className={styles['inner-what-go-home-container']}>

                                        <Link href={'/'} className={styles['go-home-sentence-button']}>
                                            <p className={styles['go-home-sentence']}>
                                                <FaHome className={styles['go-home']} />
                                                Go Back
                                            </p>
                                        </Link>

                                    </div>
                                </div>
                                {/* End Of Sixth: Block Of Countries Buttons */}

                                {/* Blocks Of Buttons Inside Of Window */}

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Modal