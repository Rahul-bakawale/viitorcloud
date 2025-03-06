import { useState } from "react";
import { Container, Form, Table, Button, Alert } from "react-bootstrap";
import { dummyData } from "../../dummyData";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const filteredUserData = dummyData.filter((user) =>
    user.name.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  const removeDataFormLoc = () => {
    localStorage.removeItem("authToken");
    setSuccessMessage("Logout successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <Container>
      <h2>Dashboard</h2>

      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      <Form.Group className="mb-12" controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search by name"
        />
      </Form.Group>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUserData.slice(0, 5).map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.name}</td>
              <td>{i.number}</td>
              <td>{i.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button onClick={removeDataFormLoc}>Logout</Button>
    </Container>
  );
};

export default Dashboard;
