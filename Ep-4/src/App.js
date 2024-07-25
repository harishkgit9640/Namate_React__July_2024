import { createBrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Header"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Error from "./components/Error"

const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Footer />
        </>
    )
}

export const AppRouter = createBrowserRouter([
    {
        path: "/", element: <Home />, errorElement: <Error />
    },
    {
        path: "/about", element: <About />,
    },
    {
        path: "/contact", element: <Contact />,
    }
])


export default App


