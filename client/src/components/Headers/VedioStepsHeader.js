
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function VedioStepsHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
    <div  
     style={{
          background:
            "url(" + require("assets/img/fabio-mangione.jpg") + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}>
        <div className="filter"/>
        <Container>
          <div className="motto text-center">
            <h1>Stops & Steps</h1>
            <h3>Here's a detailed description of every stop we took along the way..</h3>
            <p>Feel free to get a customized planner for your journey by using the 'Filter' button in the top right corner</p>
            <br />
            <Button
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
            <i className="fa fa-solid fa-heart" />Like
            </Button>
            <Button className="btn-round" color="neutral" type="button" outline>
            <i className="fa fa-solid fa-user-plus" />Follow
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default VedioStepsHeader;
