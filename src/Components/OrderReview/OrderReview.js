import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useNavigate();
    const handleRemoveClick = key =>{
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        deleteFromDb(key)
    }

    const handlePlaceOrder = () =>{
        history('/placeorder')
        setCart([]);
        clearTheCart()
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                     key={product.key}
                     product={product}
                     handleRemoveClick={handleRemoveClick}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                        <button 
                        onClick={handlePlaceOrder}
                        className='btn-regular'>Place Your Order</button>
                </Cart>
             </div>
        </div>
    );
};

export default OrderReview;