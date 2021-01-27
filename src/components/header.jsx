import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    return <div className="header">
        <NavLink to="/" exact activeClassName="active-link" className="nav-link">Home</NavLink>
        <NavLink to="/quiz" exact activeClassName="active-link" className="nav-link">Quiz</NavLink>
    </div>
}

export default Header