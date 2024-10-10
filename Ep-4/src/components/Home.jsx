import { useEffect, useState } from "react"
import Card from "./Card"
import useFetchApi from "../utils/useFetchApi"

const Home = () => {
    const data = useFetchApi();
    const [filterData, setFilterData] = useState(data)
    const [Search, setSearch] = useState("")

    if (data.length === 0) {
        return <h1>Loading ...</h1>
    }

    return (
        <>
            <div className='main-container'>
                <div className="search-menu">
                    <input type="text" placeholder='Search indian' value={Search} onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={() => {
                        filtered = data.filter((item) => item.strArea.toLowerCase().includes(Search.toLowerCase()))
                        setFilterData(filtered)
                    }} >Search</button>
                    <button onClick={() => {
                        filtered = data.filter((item) => item.strCategory === "Vegetarian")
                        setFilterData(filtered)
                    }} > Pure Veg </button>
                </div>
                <div className="menu-container">
                    {

                        (filterData.length === 0 ? data : filterData).map(mealList => (
                            <div key={mealList.id}>  <Card mealList={mealList} /> </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home