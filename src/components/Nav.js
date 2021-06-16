import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
    return (
        <nav>
            <div className="title">
                <Link className="links" to="/">
                    <h3>What in the World</h3>
                </Link>
            </div>
            <ul>
                <Link className="links" to="/countries">
                    <li>
                        Countries
                    </li>
                </Link>
                <li>About</li>
            </ul>
        </nav>
    )
}

export default Nav
