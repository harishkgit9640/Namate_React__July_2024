import logo from '../assets/logo.webp'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
    // const [isLogIn, setIsLogIn] = useState("LogIn")
    const cartItems = useSelector((store) => store.cart.items)

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
                {/* <button button className='btn' onClick={() => {
                    isLogIn === "LogIn" ? setIsLogIn("LogOut") : setIsLogIn("LogIn")
                }} > {isLogIn} </button> */}
                <li> <Link to="/cart" >Cart - ({cartItems.length}) </Link></li>
            </ul>
        </nav>
    )
}
export default Navbar