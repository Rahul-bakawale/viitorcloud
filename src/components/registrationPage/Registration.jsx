import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  console.log("formData", formData);
  const validateForm = () => {
    let newErrors = {};
    if (!formData.Username.trim()) newErrors.Username = "User Name is required";
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      newErrors.Email = "Invalid email format";
    }
    if (!formData.Password) {
      newErrors.Password = "Password is required";
    } else if (formData.Password.length < 8) {
      newErrors.Password = "Password must be at least 8 characters";
    }
    if (!formData.ConfirmPassword) {
      newErrors.ConfirmPassword = "Confirm Password is required";
    } else if (formData.Password !== formData.ConfirmPassword) {
      newErrors.ConfirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    localStorage.setItem("user", JSON.stringify(formData));
    setSuccessMessage("Registration Successful!");
    setFormData({ Username: "", Email: "", Password: "", ConfirmPassword: "" });
    setErrors({});
    navigate("/login");
  };
  return (
    <>
      <Container>
        <h2>Registration</h2>
        <br />
        {successMessage && <Alert variant="success">{successMessage}</Alert>}
        <Form onSubmit={handelSubmit}>
          <Form.Group className="mb-12" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={formData.Username}
              onChange={(e) =>
                setFormData({ ...formData, Username: e.target.value })
              }
              placeholder="Enter Username"
            />
            <p className="text-danger">{errors?.Username} </p>
          </Form.Group>
          <Form.Group className="mb-12" controlId="exampleForm.ControlInput1">
            <Form.Label>Email </Form.Label>
            <Form.Control
              type="email"
              value={formData.Email}
              onChange={(e) =>
                setFormData({ ...formData, Email: e.target.value })
              }
              placeholder="Enter Email"
            />
            <p className="text-danger">{errors?.Email} </p>
          </Form.Group>
          <Form.Group className="mb-12" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={formData.Password}
              onChange={(e) =>
                setFormData({ ...formData, Password: e.target.value })
              }
              placeholder="Enter Password"
            />
            <p className="text-danger">{errors?.Password} </p>
          </Form.Group>
          <Form.Group className="mb-12" controlId="exampleForm.ControlInput1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={formData.ConfirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, ConfirmPassword: e.target.value })
              }
              placeholder="Confirm Password"
            />
            <p className="text-danger">{errors?.ConfirmPassword} </p>
          </Form.Group>
          <br />

          <Button type="submit">Register</Button>
        </Form>
      </Container>
    </>
  );
};

export default Registration;
