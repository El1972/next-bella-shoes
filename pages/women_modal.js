import React, { useState, useEffect } from 'react'
import { BsHandbag } from "react-icons/bs";
import { FaHome, FaChevronDown } from 'react-icons/fa';
import { useAddToCartContext } from '../contexts/AddToCartContext';
import Link from 'next/link';




const Women_Modal = (props) => {

    const { sizes, womenAddToCart } = useAddToCartContext();

    console.log(sizes);

    const [setSize, setSetSize] = useState(sizes)

    const { id, images, names, count, prices, stock, amount } = props

    return (
        <div>
            <div className="modal-browser-wrapper">
                <div className="inner-modal-browser-wrapper">

                    <div className="modal-window-measure">
                        <div className="modal-window-qualities-position">

                            <div className="modal-window-position-container">

                                {/* Blocks Of Buttons Inside Of Window */}


                                {/* First: Block Of Add To Cart Buttons */}
                                <div className="buttons-container">
                                    <div className="inner-buttons-container">

                                        <div className="modal-single-info-size-container">
                                            <Link href={'.'}
                                                className="modal-single-info-size-button"
                                            >
                                                <p className='modal-single-info-size'>
                                                    Size
                                                </p>
                                            </Link>
                                        </div>

                                        <div className="modal-single-info-cart-container">
                                            <Link href={'/products'} className="modal-single-info-cart-button"
                                                onClick={() => womenAddToCart(id, images, names, count, prices, stock, amount, setSize)}
                                            >
                                                <p className='modal-single-info-cart'>
                                                    <BsHandbag className='modal-cart-icon' />Add To Cart
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End Of First: Block Of Add To Cart Buttons */}


                                {/* 1 */}
                                {/* Second: Block Of Countries Buttons */}
                                <div className="countries-container clearfix">
                                    <div className="inner-countries-container">
                                    </div>
                                </div>
                                {/* End Of Second: Block Of Countries Buttons */}



                                {/* 2 */}
                                {/* Third: Block Of Countries Buttons */}
                                <div className="sizes-container clearfix">
                                    <div className="inner-sizes-container">
                                        {sizes.map((s, index) => {
                                            return (
                                                <button key={index}
                                                    className={`size-button ${s === setSize ? ' active' : null}`}
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
                                <div className="size-heading-container clearfix">
                                    <div className="inner-size-heading-container">
                                        <h4>Choose Your size:</h4>
                                    </div>
                                </div>
                                {/* End Of Fourth: Block Of Countries Buttons */}

                                {/* Fifth: Block Of Countries Buttons */}
                                <div className="what-my-size-container clearfix">
                                    <div className="inner-what-my-size-container">
                                        <span className='what-my-size'>What&apos;s my size?</span>
                                    </div>
                                </div>
                                {/* End Of Fifth: Block Of Countries Buttons */}

                                {/* Sixth: Block Of Countries Buttons */}
                                <div className="what-go-home-container clearfix">
                                    <div className="inner-what-go-home-container">

                                        <Link href={'/'} className="go-home-sentence-button">
                                            <p className='go-home-sentence'>
                                                <FaHome className='go-home' />
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
        </div>
    )
}

export default Women_Modal