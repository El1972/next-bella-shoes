import styles from '../../styles/Home.module.css'
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import Heart from '../../components/Heart';
import Pencil from '../../components/Pencil';
import QuestionIcon from '../../components/QuestionIcon';
import Message from '../../components/Message';
import { BsHandbag } from "react-icons/bs";
import Modal from '../modal';
import { useRouter } from 'next/router';
import { useState } from 'react';




const SingleProduct = ({ one_shoe }) => {

    const [modalOpen, setModalOpen] = useState(false)


    // const router = useRouter();
    // const single_item = router.query.single_item

    const { id, names, images, prices,
        crossed_price, count, stock, amount,
        descriptions, one, two, three, four, five, six } = one_shoe

    return (

        <div>
            <div className={styles['general-single-container']}>
                <div className={styles['general-single']}>

                    <div className={styles['main-header-wrapper']}>
                        <div className={styles['inner-main-header-wrapper']}>
                            <div className={styles['header-container']}>
                                <h1 className={styles['about-header']}>{names}</h1>
                            </div>
                        </div>
                        <div className={styles['sub-header-container']}>
                            <p className={styles['sub-header-itself']}>
                                Italy<FaChevronDown className={styles['chevron-right']} />
                                France<FaChevronDown className={styles['chevron-right']} />
                                London<FaChevronDown className={styles['chevron-right']} />
                                Tokyo<FaChevronDown className={styles['chevron-right']} />
                                New York</p>
                        </div>
                    </div>

                    <div className={styles['single-image-top-line-container']}>
                        <Link href={'/'} className={styles['back-to-list-button']}>
                            <FaChevronDown className={styles['chevron-left']} />
                            <p className={styles['single-image-top-line']}>Back To List</p>
                            <div className={styles['single-image-top-line-itself']}></div>
                        </Link>
                    </div>

                    <div className={styles['single-image']}>
                        <div className={styles['single-image-container']}>
                            <div className={`${styles['single-image-inner-container']} ${styles['clearfix']}`}>
                                <div className={styles['single-image-width']}>
                                    <div className={styles['single-image-properties']}>
                                        <picture>
                                            <img src={`../../images/${images}`}
                                                alt="" className={styles['single-image-shoe']}
                                            />
                                        </picture>
                                    </div>
                                </div>
                                <div className={styles['single-info-width']}>
                                    <div className={styles['single-info-properties']}>
                                        <div className={styles['price-size-cart-bar']}>
                                            <div className={styles['inner-price-size-cart-bar']}>

                                                <div className={styles['single-info-price-container']}>
                                                    <p className={styles['single-info-price']}>${prices}</p>
                                                    <p className={styles['crossed-price']}>${crossed_price}</p>
                                                </div>


                                                <div className={styles['single-info-cart-container']}>
                                                    <Link href={'.'} onClick={() => setModalOpen(true)}>
                                                        <p className={styles['single-info-cart']}>
                                                            <BsHandbag className={styles['cart-icon']} />Add To Cart
                                                        </p>
                                                    </Link>
                                                </div>

                                                {/* <div className="single-info-size-container"> */}
                                                <Link href='#' className={styles['single-info-size-button']}
                                                    onClick={() => setModalOpen(true)}>
                                                    <p className={styles['single-info-size']}>
                                                        Size
                                                    </p>
                                                    {modalOpen && <Modal
                                                        id={id}
                                                        images={images}
                                                        names={names}
                                                        count={count}
                                                        prices={prices}
                                                        stock={stock}
                                                        amount={amount}
                                                    />}
                                                </Link>
                                                {/* </div> */}


                                            </div>
                                            <div className={styles['manufacture-container']}>
                                                <div className={styles['inner-manufacture-container']}>
                                                    <span className={styles['manufacture']}>Manufacturing and FREE delivery to</span>
                                                    <span className={styles['usa']}>
                                                        United States
                                                        <div className={styles['pencil-container']}>
                                                            <Pencil />
                                                        </div>
                                                    </span>
                                                    <span className={styles['couple-of-weeks']}>
                                                        in 1-2 weeks
                                                        <div
                                                            className={styles['question-icon-container']}>
                                                            <QuestionIcon />
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles['border']}></div>
                                            <div className={styles['product-actions']}>
                                                <div className={styles['inner-product-actions']}>
                                                    <span className={styles['save-wishlist']}>
                                                        <div className={styles['heart-container']}>
                                                            <Heart className={styles['heart']} data-heart="moo" />
                                                        </div>
                                                        Save to wishlist
                                                    </span>
                                                    <span className={styles['send-inquiry']}>
                                                        <div className={styles['message-container']}>
                                                            <Message className={styles['message']} />
                                                        </div>
                                                        Send inquiry
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles['middle-border']}></div>

                                            <div className={styles['description-wrapper']}>
                                                <ul className={styles['description-block']}>
                                                    <li className={styles['description']}>Description</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['single-info-text-container']}>
                                        <div className={styles['inner-single-info-text-container']}>
                                            <p className={styles['single-info-description']}>{descriptions}</p>
                                            <ul className={styles['single-info-text']}>
                                                <li className={styles['single-info-text-one']}>{one}</li>
                                                <li className={styles['single-info-text-two']}>{two}</li>
                                                <li className={styles['single-info-text-three']}>{three}</li>
                                                <li className={styles['single-info-text-four']}>{four}</li>
                                                <li className={styles['single-info-text-five']}>{five}</li>
                                                <li className={styles['single-info-text-six']}>{six}</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct



export const getStaticProps = async (context) => {

    const id = context.params.id

    const response = await fetch(`https://mybellshoes.com/single_shoe.php/${id}`)
    const men_shoe = await response.json()

    return {
        props: {
            one_shoe: men_shoe
        }
    }

}



export const getStaticPaths = async () => {
    const get_paths = await fetch('https://mybellshoes.com/women.php')
    const path = await get_paths.json()

    const paths = path.map((p) => {
        return {
            params: {
                id: p.id.toString()
            }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}





