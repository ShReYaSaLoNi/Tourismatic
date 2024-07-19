import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   document.body.classList.add("login-page");
  //   return function cleanup() {
  //     document.body.classList.remove("login-page");
  //   };
  // });

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Basic validation (add more checks as needed)
    if (!email || !password) {
      console.error("Invalid credentials");
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });
  
      if (response.status === 200) {
        // Login successful
        console.log("Login successful!");
        const { userId } = response.data;
        // Store userId in local storage (or another secure method)
        localStorage.setItem('userId', userId);
        navigate(`/users/${userId}`);
      } else {
        console.error("Login failed:", response.error);
        // Handle login failure (e.g., display error message)
      }
    } catch (error) {
      console.error(error);
      // Handle network or other errors
    }
  };
  
  return (
    <>
      <ExamplesNavbar />
      <div
      className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/background.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto" style={{ backgroundImage: "url(" + require("assets/img/giphy.gif") + ")"}}>
                <h3 className="title mx-auto">Welcome back!</h3>
                {/* Possible ways to login */}
                <div className="social-line text-center"> 
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form" onSubmit={handleLogin}>
                  <label for="email">Email</label>
                  <Input placeholder="Email" type="text" id="email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)} />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" id="password" name="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                  <Button block className="btn-round" color="danger" type='submit'>
                    Login
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LoginPage;
