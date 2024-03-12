/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Join Us</h2>
              <br />
              <p className="description" style={{fontSize:"20px"}}>
              Immerse yourself in the joy of travel, discover hidden gems, and create memories that will be the envy of your social feed. Let our vibrant community of explorers turn trip planning into a thrilling and fun-filled experience. Your dream getaway starts here – join the Tourismatic revolution!
              </p>
              <br />
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="nc-icon nc-bus-front-12" />
                <i className="nc-icon nc-camera-compact" />
                <i className="nc-icon nc-calender-60" />
                <i className="nc-icon nc-cart-simple" />
                <i className="nc-icon nc-chat-33" />
                <i className="nc-icon nc-planet" />
                <i className="nc-icon nc-compass-05" />
                <i className="nc-icon nc-credit-card" />
                <i className="nc-icon nc-globe-2" />
                <i className="nc-icon istanbul" />
                <i className="nc-icon nc-sun-fog-29" />
                <i className="nc-icon nc-umbrella-13" />
                <i className="nc-icon nc-spaceship" />
                <i className="nc-icon nc-shop" />
                <i className="nc-icon nc-pin-3" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionNucleoIcons;
