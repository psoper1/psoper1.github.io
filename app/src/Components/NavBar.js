function NavBar() {
    return (
        <>
        <nav className=" navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="nav justify-content-center collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="/workspace/psoper1.github.io/app/src/index.js">Home</a>
                    <a className="nav-link" href="/pages/blog.html">Blog</a>
                    <a className="nav-link" href="#">Projects</a>
                </div>
            </div>
        </div>
    </nav>
        </>
    )
}

export default NavBar;