import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  //   const navigate = useNavigate();
  console.log("formData", formData);
  const validateForm = () => {
    let newErrors = {};
    if (!formData?.Username) newErrors.Username = "User Name is required";
    if (!formData?.Email) newErrors.Email = "email is required";
    if (formData?.Password.length < 8)
      newErrors.Password = "password is required";
    if (formData?.Password !== formData?.ConfirmPassword)
      newErrors.ConfirmPassword = "password do not match ";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    localStorage.setItem("user", JSON.stringify(formData));
    // navigate("/login");
  };
  return (
    <>
      <Container>
        <h2>Registration</h2>
        <br />
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
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              value={formData.Password}
              onChange={(e) =>
                setFormData({ ...formData, Password: e.target.value })
              }
              placeholder="Enter Email"
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
              placeholder="Enter Email"
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
