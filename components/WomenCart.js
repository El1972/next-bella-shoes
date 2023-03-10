import Link from 'next/link';
import { useAddToCartContext } from '../contexts/AddToCartContext';
import WomanItemDelete from './WomanItemDelete'
import WomenCountButtons from './WomenCountButtons'

const WomenCart = ({ id, names, images, prices, count, size }) => {

    const { women_cart, emptyCart, adjustWomenCart, deleteWomanProduct } = useAddToCartContext();

    if (women_cart.length < 1) {
        return <h3>Your Shopping Cart Is Empty</h3>
    }

    const increase = () => {
        adjustWomenCart(id, 'increase') // adjustCart() - is being called from here
    }

    const decrease = () => {
        adjustWomenCart(id, 'decrease') // adjustCart() - is being called from here
    }

    return (
        <div>
            <div>
                <div className="main-container clearfix">
                    <div className="inner-main-container">

                        <div className="image-section">
                            <div className="inner-image-section">
                                <picture>
                                    <img src={`../../images/${images}`}
                                        alt="pop" className='checkout-image' />
                                </picture>
                            </div>
                        </div>
                        <div className="info-section">
                            <div className="inner-info-section">
                                <div className="info-wrapper">
                                    <span className='info-name'>{names}</span><br />
                                    <span className='info-size'>Size: {size}</span><br />
                                </div>
                            </div>
                        </div>

                        <div className="quantity-section">
                            <div className="inner-quantity-section">
                                <WomenCountButtons
                                    count={count}
                                    increase={increase}
                                    decrease={decrease}
                                />
                            </div>
                        </div>
                        <div className="delete-section">
                            <div className="inner-delete-section">
                                <Link href={'./products'} onClick={() => deleteWomanProduct(id)}>
                                    <WomanItemDelete />
                                </Link>
                            </div>
                        </div>

                        <div className="new-price-section">
                            <div className="new-inner-price-section">
                                <span className='new-price'>${prices}.00</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default WomenCart