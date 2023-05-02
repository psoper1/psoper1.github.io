// import { useState } from "react";
import { NavLink } from "react-router-dom";


function NavBar() {

    // const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon justify-content-end"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-link text-white">Home</NavLink>
                            <NavLink to="/blog" className="nav-link text-white">Blog</NavLink>
                            <NavLink to="/projects" className="nav-link text-white">Projects</NavLink>
                            <NavLink to="/contact" className="nav-link text-white">Contact</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )

}


export default NavBar;