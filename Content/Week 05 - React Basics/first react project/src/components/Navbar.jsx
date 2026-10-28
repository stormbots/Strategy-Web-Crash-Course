import {Routes, Route, NavLink} from "react-router"

export function Navbar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
        </nav>
    )
}