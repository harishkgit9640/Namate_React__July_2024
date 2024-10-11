import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem } from '../utils/cardSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    console.log(cartItems.length);

    const removeItems = (id) => {
        console.log(id);

        dispatch(removeItem(id))
    }

    return (

        <div className="">

            {cartItems.length !== 0 && (<button className='btn' onClick={() => dispatch(clearCart())} > Clear Cart </button>)}

            {cartItems.length !== 0 ?
                cartItems.map((items, index) => {
                    return <div className="meal-details" key={items.id} >
                        <h2> {items.strMeal} </h2>
                        <p> <span> Category : </span> {items.strCategory} </p>
                        <p> <span> location : </span> {items.strArea} </p>
                        <button onClick={() => removeItems(index)} className='btn' > Remove Item </button>
                        <div className="meal-thumb">
                            <img src={items.strMealThumb} alt="meal-img" />
                        </div>
                        <hr />
                    </div>
                })
                : <h1>Your cart is empty please add something...</h1>

            }
        </div>
    )
}
export default Cart
