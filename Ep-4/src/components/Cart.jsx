import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem } from '../utils/cardSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    console.log(cartItems.length);

    const removeItems = (id) => {
        console.log(id);

        dispatch(removeItem(id))
    }

    return (

        <div className="cart-section">
            {cartItems.length !== 0 && (<button className='btn clear-btn' onClick={() => dispatch(clearCart())} > Clear All ❌ </button>)}

            {cartItems.length !== 0 ?

                cartItems.map((items, index) => {
                    return (
                        <div className="item-details" key={items.id} >
                            <img src={items.strMealThumb} alt="item-img" />
                            <div className="items">
                                <p> {items.strMeal} </p>
                                <p> <span> Category : </span> {items.strCategory} </p>
                                <p> <span> location : </span> {items.strArea} </p>
                            </div>
                            <button onClick={() => removeItems(index)} className='btn' > Remove ❌ </button>
                        </div>)
                })

                : <div className='empty-msg' > <span>Your cart is empty please add something! </span> <Link to={'/all-dishes'}> Click Here.. </Link>  </div>
            }
        </div>
    )
}
export default Cart
