import { createBrowserRouter, Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Header"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"
import Menu from "./components/Menu"
import { FAQ } from "./components/FAQ"
import { useContext } from "react"
import userContext from "./utils/UserContext"
import { Provider } from "react-redux"
import cardStore from "./utils/cartStore"
import Cart from "./components/Cart"

const App = () => {
    const { loggedInUser } = useContext(userContext);
    return (
        <>
            <Provider store={cardStore}>
                <userContext.Provider value={{ loggedInUser: "guest" }}>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </userContext.Provider>
            </Provider>
        </>
    )
}

export const AppRouter = createBrowserRouter([
    {
        path: "/", element: <App />,

        children: [
            {
                path: "/", element: <Home />,
            },
            {
                path: "/about", element: <About />,
            },
            {
                path: "/menu/:id", element: <Menu />,
            },
            {
                path: "/FAQ", element: <FAQ />,
            },
            {
                path: "/contact", element: <Contact />,
            },
            {
                path: "/cart", element: <Cart />,
            }
        ],

        errorElement: <Error />
    },

])


export default App


