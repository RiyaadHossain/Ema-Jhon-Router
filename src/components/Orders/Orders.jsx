import React from 'react';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    let count = 0;
    for (const item of cart) {
        count = item.quaintity + count
    }
    return (
        <div>
            <h1>This is Orders: {products.length}</h1>
            <h2>Cart: {count}</h2>
        </div>
    );
};

export default Orders;