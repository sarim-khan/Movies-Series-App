import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://previews.123rf.com/images/alexutemov/alexutemov1511/alexutemov151100568/48452570-3d-cinema-movie-glasses-on-white-background-vector-illustration-of-3d-cinema-glasses-vector-movie.jpg" /></Link>
                <Link to="/"><span>Series</span></Link>

            </div>
        </div>
    )
}

export default Header