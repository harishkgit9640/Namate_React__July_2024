import { restData } from "../utils/mockData"
import Card from "./Card"

const Home = () => {
    return (
        <>
            <div className='main-container'>
                <div className="search-menu">
                    <input type="text" placeholder='Search Here...' /> <button>Search</button>
                </div>
                <div className="menu-container">
                    {
                        restData.map(restList => (
                            <Card key={restList.name} restList={restList} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home