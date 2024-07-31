const Navbar = ()=>{
    return <header>
        <div className="navbar d-flex flex-row justify-content-between align-items-center">
            <div className="logo">
                <img className="my-logo" src="./assets/images/logo.png" alt="logo"/>
            </div>
            <div className="navbar-list">
                <ul className="nav-list d-flex flex-row list-unstyled justify-content-center">
                    <a href="#"><li className="px-3">Home</li></a>
                    <a href="#"><li className="px-3">About Me</li></a>
                    <a href="#"><li className="px-3">My Projects</li></a>
                    <a href="#" className="btn-con">Contact Me</a>
                </ul>
            </div>
        </div>
    </header>
}

export default Navbar