import { useState } from "react";
import { Container, Form, Table, Button, Pagination } from "react-bootstrap";
import { dummyData } from "../../dummyData";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredUserData = dummyData.filter((user) =>
    user.name.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  const totalPages = Math.ceil(filteredUserData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUserData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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

      {successMessage && { successMessage }}

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
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
          {currentItems.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.number}</td>
              <td>{user.status.toString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>

      <Button onClick={removeDataFormLoc} className="mt-3">
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;
