
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const [showMenu, setShowMenu] = useState(false)


import { Link } from "react-router-dom";

function NavBar() {

    return (
        <>
            <nav id="navbarid" className=" navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    {/* eslint-disable-next-line */}
                    <a className="navbar-brand" href="#"></a>

                    <button onClick={() => setShowMenu(!showMenu)} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav justify-content-center navbar-collapse" id="navbarNavAltMarkup">
                        {showMenu && <div className="navbar-nav">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/blog" className="nav-link">Blog</NavLink>
                            <NavLink to="/projects" className="nav-link">Projects</NavLink>
                        </div>}
                        <div id="theNav" className="navbar-nav">
                            <NavLink to="/" activeClassName="selected" className="nav-link">Home</NavLink>
                            <NavLink to="/blog" activeClassName="selected" className="nav-link">Blog</NavLink>
                            <NavLink to="/projects" activeClassName="selected" className="nav-link">Projects</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="nav justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/* eslint-disable-next-line */}
                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                            <Link to="/" className="nav-link active">Home</Link>
                            <Link to="/blog" className="nav-link">Blog</Link>
                            <Link to="/projects" className="nav-link">Projects</Link>
                            {/* <a className="nav-link" href="/blog">Blog</a>
                            <a className="nav-link" href="/projects">Projects</a> */}


                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;