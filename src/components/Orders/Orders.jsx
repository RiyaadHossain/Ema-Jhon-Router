import React from 'react';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    let count = 0;
    for (const item of cart) {
        count = item.quantity + count
    }
    return (
        <div className='shop-container'>
            <div className="order-product">
                {cart.map(item => <ReviewItem key={item.id} item={item}/>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Orders;