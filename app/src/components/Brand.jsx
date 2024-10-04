import React from "react";
import "./brand.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <main className="pt-4">
        <hr className="flex-grow-1 hr-custom" />
      <div className="d-flex flex-row justify-content-between align-items-center">
        
        <p className="m-0 p-2">Bonfiace Ouma.</p>
        <ul className=" d-flex flex-row list-unstyled m-0 p-2">
          <Link to="https://github.com/OumaBon" target="_blank" ><i className="bi bi-github text-danger px-3"></i> </Link>
          <Link to="https://github.com/OumaBon" target="_blank" ><i className="bi bi-twitter text-danger px-3"></i> </Link>
          <Link to="https://github.com/OumaBon" target="_blank" ><i className="bi bi-whatsapp text-danger px-3"></i> </Link> 
          <Link to="mailto:oumamugah@gmail.com" target="_blank" ><i className="bi bi-envelope-fill text-danger px-3"></i></Link>  
        </ul>
       
      </div>
      <hr className="flex-grow-1 hr-custom" />
    </main>
  );
}

export default Brand;
