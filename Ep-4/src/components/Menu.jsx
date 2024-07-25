import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Menu = () => {
    const { id } = useParams();
    const [mealData, setMealData] = useState([])
    const { strMealThumb, strArea, strCategory, strMeal, strInstructions, strTags, strYoutube } = mealData;

    useEffect(() => {
        fetchApiData();
    }, [id]);

    const fetchApiData = async () => {
        const res = await fetch(`https://api.freeapi.app/api/v1/public/meals/${id}`);
        const resData = await res.json();
        setMealData(resData?.data);
    }

    return (

        <div className="meal-card">
            <div className="meal-details">
                {/* <h2> {strCategory == 'Vegetarian' ? <img src="https://img.icons8.com/?size=100&id=61083&format=png&color=000000" width={24} alt="veg-img" /> : <img src="https://img.icons8.com/?size=100&id=61082&format=png&color=000000" width={24} alt="veg-img" />} {strMeal} </h2> */}
                <h2> {strMeal} </h2>
                <p> <span> Category : </span> {strCategory} </p>
                <p>  <span> Tags : {strTags} </span> </p>
                <p> <span> Location : </span> {strArea} </p>
                <p> <span> Instructions : </span> {strInstructions} </p>

            </div>
            <div className="meal-thumb">
                <Link to={strYoutube}> <img src={strMealThumb} alt="card-img" title='Goto Youtube' /> </Link>
            </div>

        </div>
    )
}

export default Menu