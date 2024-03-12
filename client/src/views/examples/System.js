import React from "react";
import {useNavigate} from "react-router-dom"; 
//import TextField from '@mui/material/TextField';

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
  Col,
} from "reactstrap";

// core components
import SystemNavbar from "components/Navbars/SystemNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function System() {

    const navigate = useNavigate(); // Initialize the useHistory hook

    const onUrlSelected = (e) => {
      const selectedValue = e.target.value;
  
      // Navigate to the selected URL using history.push
      navigate(selectedValue);
    };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("sys-page");
    return function cleanup() {
      document.body.classList.remove("sys-page");
    };
  });

  return (
    <>
      <SystemNavbar />
      <div className="main">
        <div
        className="section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/system.jpg") + ")",
            width:"100%",
            height:"100vh"
        }}
        >
            <div className="name" style={{marginLeft:"5%", paddingTop:"5%"}}>
              <Container className="title">
              <Row><Col sm="4"><h4 className="title">
                Name :<br />
                </h4></Col></Row>
              <Row><Col sm="6"><h4 className="title">
                Emailaddress :<br />
              </h4></Col></Row>
              <Row>
                <Col sm="5">
                  <h4>UserType :</h4>
                </Col>
                <Col sm="6" style={{paddingTop:"2%"}}>
                  <select className="form-control" onChange={onUrlSelected}>
                    <option value="/profile-page" disabled selected>
                      User
                    </option>
                    <option value="/artistprofile-page">Influencer</option>
                  </select>
                </Col>
              </Row>
              <Row>
            <Col sm="5">
            <h4 className="title">About:</h4>
            </Col>
            {/* <Col sm="6" style={{ paddingTop: "3%" }}>
            <TextField
          id="filled-multiline-static"
          label="Text"
          multiline
          rows={3}
          defaultValue=""
          variant="filled"
        />
            </Col> */}
          </Row>
              <Row>
             <Col sm="5">
              <h4>Gender:</h4>
             </Col>
            <Col sm="6" style={{ paddingTop: "6%" }}>
            <div>
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
            </Container>
            </div>
        </div>
      </div>
      <DemoFooter />
      </>
      )
    }
export default System;