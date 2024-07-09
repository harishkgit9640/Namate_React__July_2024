import React from 'react'
import ReactDOM from 'react-dom/client'


const jsxElement = <h1>this is jsx Element</h1>;

// Element examples
const element = React.createElement("h2", { className: "element" }, "this is React Element");
const element1 = (
    <h1>welcome to react Element-1 </h1>
)

// React Component example

const Header = () => {

    return (
        <div className="navbar">
            <h1> Navbar</h1>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>server</li>
                <li>contact</li>
            </ul>
        </div>
    )

}

const Home = () => (
    <div className="hero-section">
        {/* functional component rendering style   */}
        {/* <Header ></Header> */}
        {/* {Header()} */}
        <Header />
        {jsxElement}
        <h1>this hero section </h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(element); // render an element
root.render(<Home />); // render an component
