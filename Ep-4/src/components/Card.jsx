import cardImg from '../assets/biriyani.webp'

const Card = ({ mealList }) => {

    const { idMeal, strArea, strCategory, strMeal, strMealThumb } = mealList;


    return (
        <div className="card">
            <div className="img">
                <img src={strMealThumb} alt="card-img" />
            </div>
            <p>{strMeal} </p>
            <p><b>Location : {strArea} </b></p>
            <p><b>Category : {strCategory} </b></p>
            <button> Order Now </button>

        </div>
    )
}
export default Card