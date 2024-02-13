import { NavLink } from "react-router-dom";

function NavScreen() {
    return (
        <div>
            <h1>I am the navigator</h1>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/works">Works</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default NavScreen;