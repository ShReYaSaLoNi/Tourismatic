import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  // document.documentElement.classList.remove("nav-open");
  // React.useEffect(() => {
  //   document.body.classList.add("signup-page");
  //   return function cleanup() {
  //     document.body.classList.remove("signup-page");
  //   };
  // }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("handleSubmit called!");

    // Add validation if needed (check for empty fields, password match, etc.)
    if (!email || !password || !confirmPassword || password !== confirmPassword) {
      console.error("Validation errors!");
      return; // Prevent form submission if validation fails
    }

    try {
      // Make a POST request to the backend API with user data
      
      const response = await axios.post('http://localhost:5000/api/signup', {
        email,
        password,
        confirmPassword
      });
      console.log(response.data);
      // Handle successful signup response
      if (response.status === 201) {
        console.log("Signup successful!");
      // Redirect to the profile page
        navigate('/profile-page');
      } else {
        console.log(response.status);
        console.error("Signup failed:", response.error);
        // Handle signup failure (e.g., email already exists)
      }
    } catch (error) {
      console.error(error);
      // Handle errors like network issues
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
                <h3 className="title mx-auto">Let's begin!</h3>
                <div className="social-line text-center">
                  {/* Social buttons (unchanged) */}
                </div>
                <Form className="register-form" onSubmit={handleSignup}>
                  <label for="email">Email</label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Update state on change
                  />
                  <label for="password">Password</label>
                  <Input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update state on change
                  />
                  <label for="confirmPassword">Confirm Password</label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} // Update state on change
                  />
                  <Button block className="btn-round" color="danger" type='submit'>
                    Signup
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignupPage;
