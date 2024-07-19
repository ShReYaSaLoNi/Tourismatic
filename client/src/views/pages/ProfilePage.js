import React from "react";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from backend (replace with your API call)
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
        setUserData(response.data);
        console.log(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ProfilePageNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/icon.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
              {userData ? userData.email : 'Loading...'} <br />
              </h4>
              <h6 className="description">{userData?.name || 'Loading...'}</h6>
            </div>
          </div>
          <div>
          <h6 className="description">Recently Viewed</h6>
          </div>
          <Row>
          <Col md="3" sm="6">
          <h6 className="description"></h6>
                <img
                  alt="Recently viewed"
                  className="img-rounded img-responsive"
                  src={require("assets/img/default_video.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="Influencer"
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/influencer.jpg")}
                    />
                  </div>
                  <p>Video Subtitle</p>
                </div>
              </Col>
              <Col  md="3" sm="6">
              <h6 className="description"></h6>
                <img
                  alt="Recently viewed"
                  className="img-rounded img-responsive"
                  src={require("assets/img/default_video.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="Influencer"
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/influencer.jpg")}
                    />
                  </div>
                  <p>Video Subtitle</p>
                </div>
              </Col>
              <Col  md="3" sm="6">
              <h6 className="description"></h6>
                <img
                  alt="Recently viewed"
                  className="img-rounded img-responsive"
                  src={require("assets/img/default_video.jpg")}
                />
                <div className="img-details">
                  <div className="author">
                    <img
                      alt="Influencer"
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/influencer.jpg")}
                    />
                  </div>
                  <p>Video Subtitle</p>
                </div>
              </Col>
          </Row>
          <br />
          <div>
          <h6 className="description">Favourite Accounts</h6>
          </div>
          <Row>
            <Col md="2" sm="2">
            <Link to="/artistprofile-page">
            <img
                  alt="Artist Profile"
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/influencer.jpg")}
                />
            </Link>
                <p className="text-center">Artist Name</p>
              </Col>
              <Col md="2" sm="2">
              <Link to="/artistprofile-page">
              <img
                  alt="Artist Profile"
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/influencer.jpg")}
                />
              </Link>
                <p className="text-center">Artist Name</p>
              </Col>
          </Row>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
