import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';
import Heart from '../../../components/Heart';
import Pencil from '../../../components/Pencil';
import QuestionIcon from '../../../components/QuestionIcon';
import Message from '../../../components/Message';
import { BsHandbag } from "react-icons/bs";
import WomenModal from '../../women_modal';
import { useRouter } from 'next/router';
import { useState } from 'react';


const WomenSingleProduct = ({ women_one_shoe }) => {

    const [modalOpen, setModalOpen] = useState(false)

    console.log(women_one_shoe);

    const { id, names, images, prices,
        crossed_price, count, stock, amount,
        descriptions, one, two, three, four, five, six } = women_one_shoe

    return (

        <div>
            <div className="general-single-container">
                <div className="general-single">

                    <div className="main-header-wrapper">
                        <div className="inner-main-header-wrapper">
                            <div className="header-container">
                                <h1 className='about-header'>{names}</h1>
                            </div>
                        </div>
                        <div className="sub-header-container">
                            <p className='sub-header-itself'>
                                Italy<FaChevronDown className='chevron-right' />
                                France<FaChevronDown className='chevron-right' />
                                London<FaChevronDown className='chevron-right' />
                                Tokyo<FaChevronDown className='chevron-right' />
                                New York</p>
                        </div>
                    </div>

                    <div className="single-image-top-line-container">
                        <Link href={'/women'} className="back-to-list-button">
                            <FaChevronDown className='chevron-left' />
                            <p className='single-image-top-line'>Back To List</p>
                            <div className="single-image-top-line-itself"></div>
                        </Link>
                    </div>

                    <div className='single-image'>
                        <div className='single-image-container'>
                            <div className="single-image-inner-container clearfix">
                                <div className="single-image-width">
                                    <div className="single-image-properties">
                                        <picture>
                                            <img src={`../../images/${images}`}
                                                alt="" className='single-image-shoe'
                                            />
                                        </picture>
                                    </div>
                                </div>
                                <div className="single-info-width">
                                    <div className="single-info-properties">
                                        <div className="price-size-cart-bar">
                                            <div className="inner-price-size-cart-bar">

                                                <div className="single-info-price-container">
                                                    <p className='single-info-price'>${prices}</p>
                                                    <p className='crossed-price'>${crossed_price}</p>
                                                </div>


                                                <div className="single-info-cart-container">
                                                    <Link href={'.'} onClick={() => setModalOpen(true)}>
                                                        <p className='single-info-cart'>
                                                            <BsHandbag className='cart-icon' />Add To Cart
                                                        </p>
                                                    </Link>
                                                </div>

                                                {/* <div className="single-info-size-container"> */}
                                                <div className='single-info-size-button'
                                                    onClick={() => setModalOpen(true)}>
                                                    <p className='single-info-size'>
                                                        Size
                                                    </p>
                                                    {modalOpen && <WomenModal
                                                        id={id}
                                                        images={images}
                                                        names={names}
                                                        count={count}
                                                        prices={prices}
                                                        stock={stock}
                                                        amount={amount}
                                                    />}
                                                </div>
                                                {/* </div> */}


                                            </div>
                                            <div className="manufacture-container">
                                                <div className="inner-manufacture-container">
                                                    <span className='manufacture'>Manufacturing and FREE delivery to</span>
                                                    <span className='usa'>
                                                        United States
                                                        <div className="pencil-container">
                                                            <Pencil />
                                                        </div>
                                                    </span>
                                                    <span className='couple-of-weeks'>
                                                        in 1-2 weeks
                                                        <div
                                                            className="question-icon-container"
                                                        >
                                                            <QuestionIcon />
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="border"></div>
                                            <div className="product-actions">
                                                <span className='save-wishlist'>
                                                    <div className="heart-container">
                                                        <Heart className='heart' data-heart="moo" />
                                                    </div>
                                                    Save to wishlist
                                                </span>
                                                <span className='send-inquiry'>
                                                    <div className="message-container">
                                                        <Message className='message' />
                                                    </div>
                                                    Send inquiry
                                                </span>
                                            </div>
                                            <div className="middle-border"></div>

                                            <div className="description-wrapper">
                                                <ul className='description-block'>
                                                    <li className='description'>Description</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-info-text-container">
                                        <div className="inner-single-info-text-container">
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
export default WomenSingleProduct



export const getStaticProps = async (context) => {

    const id = context.params.womenid

    const response = await fetch(`http://localhost:8888/women_single_shoe.php/${id}`)
    const women_shoe = await response.json()

    return {
        props: {
            women_one_shoe: women_shoe
        }
    }

}



export const getStaticPaths = async () => {
    const get_women_paths = await fetch('http://localhost:8888/women.php')
    const women_paths = await get_women_paths.json()

    const women_path = women_paths.map((p) => {
        return {
            params: {
                womenid: p.id.toString()
            }
        }
    })
    return {
        paths: women_path,
        fallback: false
    }
}





