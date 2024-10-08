import { useContext, useState } from 'react'
import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom'
import userContext from '../utils/UserContext'




const Navbar = () => {
    const [isLogIn, setIsLogIn] = useState("LogIn")
    const { loggedInUser } = useContext(userContext)

    return (
        <nav>
            <div className="brand-logo">
                <Link to='/'> <img src={logo} alt="brand logo" /> </Link>
            </div>
            <ul>
                <li> <Link to="/" >Home </Link></li>
                <li> <Link to="/about" >About</Link></li>
                <li> <Link to="/FAQ" >FAQ</Link></li>
                <li> <Link to="/contact" >Contact</Link></li>
                <button button className='btn' onClick={() => {
                    isLogIn === "LogIn" ? setIsLogIn("LogOut") : setIsLogIn("LogIn")
                }} > {isLogIn} </button>
                <li> {loggedInUser} </li>
            </ul>
        </nav>
    )
}
export default Navbar