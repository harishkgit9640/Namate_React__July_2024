import logo from '../assets/logo.webp'
import cart from '../assets/shopping-cart.png'
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
                <li> <Link to="/all-dishes" >All Dishes</Link></li>
                <li> <Link to="/FAQ" >FAQ</Link></li>
                <li> <Link to="/contact" >Contact</Link></li>
                {/* <button button className='btn' onClick={() => {
                    isLogIn === "LogIn" ? setIsLogIn("LogOut") : setIsLogIn("LogIn")
                }} > {isLogIn} </button> */}
                <li> <Link to="/cart" > <img src={cart} alt="cart-icon" className='cart_img' /> <span className='cart_count' > {cartItems.length}</span>  </Link></li>
            </ul>
        </nav>
    )
}
export default Navbar