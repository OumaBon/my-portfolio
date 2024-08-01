import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand fw-bold text-danger fs-3" to="/">BO.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active fw-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
