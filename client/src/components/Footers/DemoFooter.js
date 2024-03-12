import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
               Contact Us
              </li>
              <li>
               Licenses
              </li>
              <li>
                Help
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, by Shreya Saloni
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
