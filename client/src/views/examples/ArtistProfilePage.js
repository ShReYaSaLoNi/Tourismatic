import React from "react";
import {Link} from "react-router-dom";

// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ProfilePageNavbar from "components/Navbars/ProfilePageNavbar.js";
import ArtistProfilePageHeader from "components/Headers/ArtistProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ArtistProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ProfilePageNavbar />
      <ArtistProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/influencer.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
                Emailaddress <br />
              </h4>
              <h6 className="description">Artist Name</h6>
            </div>
          </div>
          <div>
          <h6 className="description">Playlist</h6>
          </div>
          <Row>
          <Col className="mr-auto" md="2" sm="3">
                <img
                  alt="Video Playlist"
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/default_video.jpg")}
                />
                <Button className="btn-round ml-1" color="warning" href="/vedio-steps">
                  Title
                </Button>
              <br />
            </Col>
            <Col className="mr-auto" md="2" sm="3">
                <img
                  alt="Video Playlist"
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/default_video.jpg")}
                />
                <Button className="btn-round ml-1" color="warning" href="/vedio-steps">
                  Title
                </Button>
              <br />
            </Col>
            <Col className="mr-auto" md="2" sm="3">
                <img
                  alt="Video Playlist"
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/default_video.jpg")}
                />
                <Button className="btn-round ml-1" color="warning" href="/vedio-steps">
                  Title
                </Button>
              <br />
            </Col>
            <Col className="mr-auto" md="2" sm="3">
                <img
                  alt="Video Playlist"
                  className="img-thumbnail img-responsive"
                  src={require("assets/img/default_video.jpg")}
                />
                <Button className="btn-round ml-1" color="warning" href="/vedio-steps">
                  Title
                </Button>
              <br />
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Followers
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Following
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                        <Link to="/profile-page">
                        <img
                            alt="Follower"
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/icon.jpg")}
                          />
                        </Link>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                            Name <br />
                            <small>Emailaddress</small>
                          </h6>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                      <Row>
                        <Col className="mx-auto" lg="2" md="4" xs="4">
                        <Link to="/profile-page">
                        <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/icon.jpg")}
                          />
                        </Link>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                            Name <br />
                            <small>Emailaddress</small>
                          </h6>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
              <h3 className="text-muted">Not following anyone yet :(</h3>
              <Button className="btn-round" color="info">
                Find artists
              </Button>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ArtistProfilePage;
