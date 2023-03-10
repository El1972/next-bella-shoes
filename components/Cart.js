import { useAddToCartContext } from '../contexts/AddToCartContext';
import Link from 'next/link';
import CountButtons from './CountButtons'
import ItemDelete from './ItemDelete';

const Cart = ({ id, names, images, count, size, prices }) => {

    const { cart, emptyCart, adjustCart, deleteProduct } = useAddToCartContext();

    if (cart.length < 1) {
        return <h3>Your Shopping Cart Is Empty</h3>
    }

    const increase = () => {
        adjustCart(id, 'increase') // adjustCart() - is being called from here
    }

    const decrease = () => {
        adjustCart(id, 'decrease') // adjustCart() - is being called from here
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
                                        alt="images" className='checkout-image' />
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
                                <CountButtons
                                    count={count}
                                    increase={increase}
                                    decrease={decrease}
                                />
                            </div>
                        </div>
                        <div className="delete-section">
                            <div className="inner-delete-section">
                                <Link href={'./products'} onClick={() => deleteProduct(id)}>
                                    <ItemDelete />
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

export default Cart