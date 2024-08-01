

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid navbar bg-dark text-white border-top border-body" data-bs-theme="dark">
        <div className="container">
          <p className="text-center mb-0 py-3">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

