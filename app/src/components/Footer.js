import { Link } from "react-router-dom"


const Footer = () =>{
  return <footer>
    <div className="d-flex flex-column">
      <ul className="d-flex flex-column">
        <Link to="/" className="text-decoration-none text-danger pt-2 fw-bold fs-3 ">BO.</Link>
        <Link to="/" className="text-decoration-none text-dark pt-2  fs-6 ">Home</Link>
        <Link to="/about" className="text-decoration-none text-dark pt-2  fs-6 ">About Me</Link>
        <Link to="/projects" className="text-decoration-none text-dark pt-2  fs-6 ">Projects</Link>
        <Link to="/contact" className="text-decoration-none text-dark pt-2  fs-6 ">Contact</Link>
      </ul>

    </div>
  </footer>
}

export default Footer