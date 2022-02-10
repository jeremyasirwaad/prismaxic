

const Navbar = () => {

    return ( 
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
            <div className="container">
            <a className="navbar-brand d-flex align-items-center fs-4" href="#">
                <img src="/favicon.png/ " alt="" width="50" height="auto" style={{ marginRight: '20px' }} />
                Prismaxic Solutions
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto fs-6">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Service
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Strategic Communication</a></li>
                        <li><a className="dropdown-item" href="#">Technology Stack</a></li>
                        <li><a className="dropdown-item" href="#">Reputation Management</a></li>
                        <li><a className="dropdown-item" href="#">Market Reserach</a></li>
                        <li><a className="dropdown-item" href="#">ERP Solutions and Services</a></li>
                        <li><a className="dropdown-item" href="#">Speakers Bureau</a></li>
                        <li><a className="dropdown-item" href="#">Consultancy</a></li>
                        <li><a className="dropdown-item" href="#">Content Generation</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">We're Hiring</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" style={{ color:"#ff3232" }} href="#">Contact Us</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
     );
}
 
export default Navbar;