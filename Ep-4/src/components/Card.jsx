import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cardSlice.js';
import { Link } from "react-router-dom"

const Card = ({ mealList }) => {
    // console.log(mealList);
    const dispatch = useDispatch();
    const { strArea, strCategory, strMeal, strMealThumb, id } = mealList;
    const addHandler = (mealList) => {
        dispatch(addItem(mealList))
    }

    return (
        <div className="card" data-testid='cardCount' >
            <div className="img">
                <Link to={`menu/${id}`}> <img src={strMealThumb} alt="card-img" /> </Link>
            </div>
            <p>{strMeal} </p>
            <p><b>Location : {strArea} </b></p>
            <p><b>Category : {strCategory} </b></p>
            <button onClick={() => addHandler(mealList)} data-testid='addCart' > Add to Cart </button>
        </div>
    )
}
export default Card