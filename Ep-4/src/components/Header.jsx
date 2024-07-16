import { useState } from 'react'
import logo from '../assets/logo.webp'


const Navbar = () => {
    const [isLogIn, setIsLogIn] = useState("LogIn")

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
                <button className='btn' onClick={() => {
                    isLogIn === "LogIn" ? setIsLogIn("LogOut") : setIsLogIn("LogIn")
                }} > {isLogIn} </button>
            </ul>
        </nav>
    )
}
export default Navbar