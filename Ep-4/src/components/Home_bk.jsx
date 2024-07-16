import { useState } from "react"
import restData from "../utils/mockData"
import Card from "./Card"

const Home = () => {
    const [data, setData] = useState(restData)

    return (
        <>
            <div className='main-container'>
                <div className="search-menu">
                    <input type="text" placeholder='Search Here...' /> <button onClick={(() => {
                        setData(restData)
                    })} >Search</button>
                    <button onClick={(() => {
                        filtered = restData.filter((item) => item.rating > 4)
                        setData(filtered)
                    })} > Top Rating ⭐</button>
                </div>
                <div className="menu-container">
                    {
                        data.map(restList => (
                            <Card key={restList.name} restList={restList} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home