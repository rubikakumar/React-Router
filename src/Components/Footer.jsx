import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#222", padding: "2rem 0", color: "#fff" }}>
      <div className="container text-center">
        <div className="row">
         
          <div className="col-lg-6 mb-4">
            <h5 style={{ borderBottom: "2px solid #fff", paddingBottom: "0.5rem" }}>Contact Us</h5>
            <p>
              Email:{" "}
              <Link
                to="mailto:rubika151298@gmail.com"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                rubika151298@gmail.com
              </Link>
            </p>
          </div>

          <div className="col-lg-6 mb-4">
            <h5 style={{ borderBottom: "2px solid #fff", paddingBottom: "0.5rem" }}>Follow Us</h5>
            <p>
              <Link to="#" style={{ color: "#fff", marginRight: "15px" }}>
                📘 Facebook
              </Link>
              <Link to="#" style={{ color: "#fff", marginRight: "15px" }}>
                🐦 Twitter
              </Link>
              <Link to="#" style={{ color: "#fff" }}>
                🔗 LinkedIn
              </Link>
            </p>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #fff", paddingTop: "1rem", marginTop: "1rem" }}>
          <p className="m-0">&copy; 2024 Rubika Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
