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
            <div className='general-single-container'>
                <div className='general-single'>

                    <div className='main-header-wrapper'>
                        <div className='inner-main-header-wrapper'>
                            <div className='header-container'>
                                <h1 className='about-header'>{names}</h1>
                            </div>
                        </div>
                        <div className='sub-header-container'>
                            <p className='sub-header-itself'>
                                Italy<FaChevronDown className='chevron-right' />
                                France<FaChevronDown className='chevron-right' />
                                London<FaChevronDown className='chevron-right' />
                                Tokyo<FaChevronDown className='chevron-right' />
                                New York</p>
                        </div>
                    </div>

                    <div className='single-image-top-line-container'>
                        <Link href={'/'} className='back-to-list-button'>
                            <FaChevronDown className='chevron-left' />
                            <p className='single-image-top-line'>Back To List</p>
                            <div className='single-image-top-line-itself'></div>
                        </Link>
                    </div>

                    <div className='single-image'>
                        <div className='single-image-container'>
                            <div className='single-image-inner-container clearfix'>
                                <div className='single-image-width'>
                                    <div className='single-image-properties'>
                                        <picture>
                                            <img src={`../../images/${images}`}
                                                alt="" className='single-image-shoe'
                                            />
                                        </picture>
                                    </div>
                                </div>
                                <div className='single-info-width'>
                                    <div className='single-info-properties'>
                                        <div className='price-size-cart-bar'>
                                            <div className='inner-price-size-cart-bar'>

                                                <div className='single-info-price-container'>
                                                    <p className='single-info-price'>${prices}</p>
                                                    <p className='crossed-price'>${crossed_price}</p>
                                                </div>


                                                <div className='single-info-cart-container'>
                                                    <Link href={'.'} onClick={() => setModalOpen(true)}>
                                                        <p className='single-info-cart'>
                                                            <BsHandbag className='cart-icon' />Add To Cart
                                                        </p>
                                                    </Link>
                                                </div>

                                                {/* <div className="single-info-size-container"> */}
                                                <Link href='#' className='single-info-size-button'
                                                    onClick={() => setModalOpen(true)}>
                                                    <p className='single-info-size'>
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
                                            <div className='manufacture-container'>
                                                <div className='inner-manufacture-container'>
                                                    <span className='manufacture'>Manufacturing and FREE delivery to</span>
                                                    <span className='usa'>
                                                        United States
                                                        <div className='pencil-container'>
                                                            <Pencil />
                                                        </div>
                                                    </span>
                                                    <span className='couple-of-weeks'>
                                                        in 1-2 weeks
                                                        <div
                                                            className='question-icon-container'>
                                                            <QuestionIcon />
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='border'></div>
                                            <div className='product-actions'>
                                                <div className='inner-product-actions'>
                                                    <span className='save-wishlist'>
                                                        <div className='heart-container'>
                                                            <Heart className='heart' data-heart="moo" />
                                                        </div>
                                                        Save to wishlist
                                                    </span>
                                                    <span className='send-inquiry'>
                                                        <div className='message-container'>
                                                            <Message className='message' />
                                                        </div>
                                                        Send inquiry
                                                    </span>
                                                </div>
                                            </div>
                                            <div className='middle-border'></div>

                                            <div className='description-wrapper'>
                                                <ul className='description-block'>
                                                    <li className='description'>Description</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='single-info-text-container'>
                                        <div className='inner-single-info-text-container'>
                                            <p className='single-info-description'>{descriptions}</p>
                                            <ul className='single-info-text'>
                                                <li className='single-info-text-one'>{one}</li>
                                                <li className='single-info-text-two'>{two}</li>
                                                <li className='single-info-text-three'>{three}</li>
                                                <li className='single-info-text-four'>{four}</li>
                                                <li className='single-info-text-five'>{five}</li>
                                                <li className='single-info-text-six'>{six}</li>

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

    const response = await fetch(`http://localhost:8888/single_shoe.php/${id}`)
    const men_shoe = await response.json()

    return {
        props: {
            one_shoe: men_shoe
        }
    }

}



export const getStaticPaths = async () => {
    const get_paths = await fetch('http://localhost:8888/men.php')
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





