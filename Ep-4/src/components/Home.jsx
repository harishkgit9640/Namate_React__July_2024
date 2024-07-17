import { useEffect, useState } from "react"
import Card from "./Card"

const Home = () => {
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [Search, setSearch] = useState("")
    // console.log(data);
    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = async () => {
        const res = await fetch("https://api.freeapi.app/api/v1/public/meals?page=1&limit=100");
        const resData = await res.json();
        // console.log(resData?.data?.data);
        setData(resData?.data?.data)
        setFilterData(resData?.data?.data)
    }

    if (data.length === 0) {
        return <h1>Loading ...</h1>
    }

    return (
        <>
            <div className='main-container'>
                <div className="search-menu">
                    <input type="text" placeholder='Search indian' value={Search} onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={(() => {
                        filtered = data.filter((item) => item.strArea.toLowerCase().includes(Search.toLowerCase()))
                        setFilterData(filtered)
                    })} >Search</button>
                    <button onClick={(() => {
                        filtered = data.filter((item) => item.strCategory === "Vegetarian")
                        setFilterData(filtered)
                    })} > Pure Veg </button>
                </div>
                <div className="menu-container">
                    {
                        filterData.map(mealList => (
                            <Card key={mealList.strMeal} mealList={mealList} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home