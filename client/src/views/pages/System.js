import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import SystemNavbar from "components/Navbars/SystemNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

const API_KEY = "AIzaSyA98SGrf0JIBZvJVzyOQj8gSE2_0cNyvUM";

function System() {

  const navigate = useNavigate(); // Initialize the useHistory hook
  const [userType, setUserType] = useState('user');
  const [subscriberCount, setSubscriberCount] = useState('');

  const onUrlSelected = (e) => {
    setUserType(e.target.value);
    console.log(userType);
  };

  const [userData, setUserData] = useState({
    name: '',
    userType: 'user',
    platform: '',
    platformId: '',
    about: '',
    gender:''
  });

  const handleInputChange = (e) => {
    console.log('Updated state:', { ...userData, [e.target.name]: e.target.value });
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (userData.platformId) {
        const subscriberResponse = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&forUsername=${userData.platformId}&key=${API_KEY}`);
        if (subscriberResponse.data.items && subscriberResponse.data.items.length > 0) {
          const subscriberCount = subscriberResponse.data.items[0].statistics.subscriberCount;
          setSubscriberCount(subscriberCount);
          console.log(subscriberCount);

          if (parseInt(subscriberCount, 10) < 100000) {
            alert("You cannot become an influencer as your subscriber count is less than 100,000.");
            setUserType('user');
            setUserData({ ...userData, userType: 'user', platform: '', platformId: '' });
            return;
          }   
        } else {
          alert("Username not found");
          return;
        }
      }


      const userId = localStorage.getItem('userId'); // Assuming userId is stored
      const response = await axios.put(`http://localhost:5000/api/users/${userId}`, userData);
      // Handle successful update (e.g., show success message, redirect)
      const updatedUserData = await axios.get(`http://localhost:5000/api/users/${userId}`);
      setUserData(updatedUserData.data);
      console.log('User information updated successfully');
      console.log(userData.userType);

      if (userData.userType === 'influencer') {
        navigate(`/influencers/${userId}`, { state: { userData: updatedUserData.data } });
      } else {
        navigate(`/users/${userId}`, { state: { userData: updatedUserData.data } });
      }

    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  // document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   document.body.classList.add("sys-page");
  //   return function cleanup() {
  //     document.body.classList.remove("sys-page");
  //   };
  // });

  return (
    <>
      <SystemNavbar />
      <div className="main">
        <div
          className="section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/system.jpg") + ")",
            width: "100%",
            height: "100vh"
          }}
        >
          <div className="name" style={{ marginLeft: "5%", paddingTop: "5%" }}>
            <Container className="title">
            <form onSubmit={handleSubmit}>
              <Row><Col sm="4"><h4 className="title">
                Name :</h4></Col>
                <Col sm="6" style={{paddingTop:"25px", marginLeft:"90px"}}>
                <TextField
                    id="filled-multiline-static"
                    multiline
                    fullWidth="20"
                    rows={3}
                    value={userData.name}
                    variant="filled"
                    onChange={handleInputChange}
                    name="name"
                  />
                </Col>
              </Row>
              {/* <Row><Col sm="6"><h4 className="title">
                Emailaddress :
              </h4></Col>
              <Col sm="6" style={{paddingTop:"25px", marginLeft:"90px"}}>
                <input type="text" placeholder="Name" style={{width:"550px", height:"40px"}}/>
                </Col>
              </Row> */}
              <Row>
                <Col sm="5">
                  <h4>UserType :</h4>
                </Col>
                <Col sm="6" style={{ paddingTop: "2%" }}>
                  <select value={userType} className="form-control" onChange={onUrlSelected}>
                    <option value="user" name="user">
                      User
                    </option>
                    <option value="influencer" name="influencer">Influencer</option>
                  </select>
                  {userType === 'influencer' && (
                    <>
                      <Row>
                        <Col sm="5">
                          <h4>Platform:</h4>
                        </Col>
                        <Col sm="6" style={{ paddingTop: "5%" }}>
                        <TextField
                        id="filled-multiline-static"
                        multiline
                        fullWidth="20"
                        rows={3}
                        value={userData.platform}
                        variant="filled"
                        onChange={handleInputChange}
                        name="platform"
                  />
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="5">
                          <h4>Platform ID:</h4>
                        </Col>
                        <Col sm="6" style={{ paddingTop: "5%"}}>
                        <TextField
                        id="filled-multiline-static"
                        multiline
                        fullWidth="20"
                        rows={3}
                        value={userData.platformId}
                        variant="filled"
                        onChange={handleInputChange}
                        name="platformId"
                  />
                        </Col>
                      </Row>
                    </>
                  )}
                </Col>
              </Row>
              <Row>
                <Col sm="5">
                  <h4 className="title">About:</h4>
                </Col>
                <Col sm="6" style={{ paddingTop: "3%" }}>
                  <TextField
                    id="filled-multiline-static"
                    multiline
                    fullWidth="20"
                    rows={3}
                    value={userData.about}
                    variant="filled"
                    onChange={handleInputChange}
                    name="about"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm="5">
                  <h4>Gender:</h4>
                </Col>
                <Col sm="6" style={{ paddingTop: "6%" }}>
                  <div onChange={handleInputChange}>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                      />
                      Male
                    </label>
                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                      />
                      Female
                    </label>
                    <label style={{ marginLeft: "10px" }}>
                      <input
                        type="radio"
                        name="gender"
                        value="others"
                      />
                      Others
                    </label>
                  </div>
                </Col>
              </Row>
              <button type="submit">Save Changes</button>
              </form>
              {subscriberCount && (
                <p>{`Subscriber Count: ${subscriberCount}`}</p>
              )}
            </Container>
          </div>
        </div>
      </div>
      <DemoFooter />
    </>
  )
}
export default System;