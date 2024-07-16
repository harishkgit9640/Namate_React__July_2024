import { useEffect, useState } from "react"
import restData from "../utils/mockData"
import Card from "./Card"

const Home = () => {
    const [data, setData] = useState([])
    // console.log(data);
    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = async () => {
        const res = await fetch("https://api.freeapi.app/api/v1/public/meals?page=1&limit=100");
        const resData = await res.json();
        // console.log(resData?.data?.data);
        setData(resData?.data?.data)
    }

    if (data.length === 0) {
        return <h1>Loading ...</h1>
    }

    return (
        <>
            <div className='main-container'>
                <div className="search-menu">
                    <input type="text" placeholder='Search Here...' />
                    <button onClick={(() => {
                        filtered = data.filter((item) => item.strArea === "Indian")
                        setData(filtered)
                    })} >Search</button>
                    <button onClick={(() => {
                        filtered = data.filter((item) => item.strCategory === "Vegetarian")
                        setData(filtered)
                    })} > Pure Veg </button>
                </div>
                <div className="menu-container">
                    {
                        data.map(mealList => (
                            <Card key={mealList.strMeal} mealList={mealList} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home