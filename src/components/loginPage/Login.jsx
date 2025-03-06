import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [credentials, setCredential] = useState({
    Email: "",
    Password: "",
  });
  console.log("credentials", credentials);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const storeUser = JSON.parse(localStorage.getItem("user")) || {};
    if (
      !storeUser ||
      storeUser.Email !== credentials.Email ||
      storeUser.Password !== credentials.Password
    ) {
      setErrors({ general: "Invalid credentials" });
      setSuccessMessage("");
      return;
    }
    localStorage.setItem("authToken", "loggedin");
    setErrors({});
    setSuccessMessage("Login Successful!");
    navigate("/dashboard");
  };
  return (
    <Container>
      <h2>Login</h2>
      <br />
      {successMessage && <p>{successMessage}</p>}
      {errors.general && <p>{errors.general}</p>}
      <Form onSubmit={handelSubmit}>
        <Form.Group className="mb-12" controlId="exampleForm.ControlInput1">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            value={credentials.Email}
            onChange={(e) =>
              setCredential({ ...credentials, Email: e.target.value })
            }
            placeholder="Enter Email"
          />
        </Form.Group>
        <Form.Group className="mb-12" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={credentials.Password}
            onChange={(e) =>
              setCredential({ ...credentials, Password: e.target.value })
            }
            placeholder="Enter Password"
          />
        </Form.Group>
        <br />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
