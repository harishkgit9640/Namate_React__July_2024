import { createBrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Header"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"

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
        path: "/", element: <Home />,
    },
    {
        path: "/about", element: <About />,
    },
    {
        path: "/contact", element: <Contact />,
    }
])


export default App


