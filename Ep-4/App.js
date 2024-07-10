import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from './logo.webp'
import cardImg from './biriyani.webp'

const Navbar = () => {
    return (
        <nav>
            <div className="brand-logo">
                <img src={logo} alt="brand logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Blog</li>
                <li>Cart</li>
            </ul>
        </nav>
    )
}


const Card = () => {
    return (
        <div className="card">
            <div className="img">
                <img src={cardImg} alt="card-img" />
            </div>
            <p>HYD Biriyani</p>
            <p>KFC</p>
            <p><b>Price : 399 </b></p>
            <p><b>Rating : (4.5)⭐ </b></p>
            <button> Order Now </button>

        </div>
    )
}


const MainContainer = () => {
    return (
        <>

            <div className='main-container'>
                <div className="search-menu">
                    <input type="text" placeholder='Search Here...' /> <button>Search</button>
                </div>
                <div className="menu-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

const Footer = () => {

    return (
        <footer>
            <p>&copy; copyright all Reserved || Made with 💖 </p>
        </footer>
    )
}




const Home = () => {
    return (
        <>
            <Navbar />
            <MainContainer />
            <Footer />
        </>
    )
}



const root = ReactDOM.createRoot(
    document.getElementById("root")
)
root.render(<Home />)