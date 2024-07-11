import logo from '../assets/logo.webp'


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
export default Navbar