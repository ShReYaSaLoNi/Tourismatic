
import React from "react";
// reactstrap components
import { Container } from "reactstrap";

// core components

const styles = {
  title:{
    fontSize : '150',
  }
}
function IndexHeader() {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/mountain.jpg") + ")",
        }}
      >

         <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1><b>WELCOME Aboard!</b></h1>
            </div>
            <h2 className="presentation-subtitle text-center">
            Please tighten your seatbelts and relax as we help you plan your perfect getaway..
            </h2>
          </Container>
          </div>

        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
          }}
        />
      </div>
    </>
  );
}

export default IndexHeader;

