import React from 'react';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const [products] = useProducts()
    const [cart, setCart] = useCart(products)
    const removeItem = (product) => {
        const restItem = cart.filter(item => item.id !== product.id)
        setCart(restItem)
    }
    let count = 0;
    for (const item of cart) {
        count = item.quantity + count
    }
    return (
        <div className='shop-container'>
            <div className="order-product">
                {cart.map(item => <ReviewItem key={item.id} removeItem={removeItem} item={item}/>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to={'/inventory'}>
                        <button className='primary-btn'>Procced Checkout<FontAwesomeIcon className='icon-arrow' icon={faArrowCircleRight}/></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;