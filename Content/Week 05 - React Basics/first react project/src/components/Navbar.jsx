import {Routes, Route, NavLink} from "react-router"

export function Navbar(){
    return(
        <nav>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/admin">Admin</NavLink>
        </nav>
    )
}