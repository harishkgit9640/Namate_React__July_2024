import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cardSlice.js';
import { Link } from "react-router-dom"

const Card = ({ mealList }) => {
    const dispatch = useDispatch();
    const { idMeal, strArea, strCategory, strMeal, strMealThumb, id } = mealList;
    const addHandler = (mealList) => {
        dispatch(addItem(mealList))
    }

    return (
        <div className="card">
            <div className="img">
                <Link to={`menu/${id}`}> <img src={strMealThumb} alt="card-img" /> </Link>
            </div>
            <p>{strMeal} </p>
            <p><b>Location : {strArea} </b></p>
            <p><b>Category : {strCategory} </b></p>
            <button onClick={() => addHandler(mealList)} > Add to Cart </button>
        </div>
    )
}
export default Card