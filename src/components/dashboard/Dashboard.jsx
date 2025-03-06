import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const data = [
  {
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    name: "John Smith",
    number: "555-123-4567",
    status: true,
  },
  {
    id: "b2c3d4e5-f6g7-8901-2345-67890abcdef1",
    name: "Emma Johnson",
    number: "555-234-5678",
    status: false,
  },
  {
    id: "c3d4e5f6-g7h8-9012-3456-7890abcdef12",
    name: "Michael Brown",
    number: "555-345-6789",
    status: true,
  },
  {
    id: "d4e5f6g7-h8i9-0123-4567-890abcdef123",
    name: "Sarah Davis",
    number: "555-456-7890",
    status: false,
  },
  {
    id: "e5f6g7h8-i9j0-1234-5678-90abcdef1234",
    name: "David Wilson",
    number: "555-567-8901",
    status: true,
  },
  {
    id: "f6g7h8i9-j0k1-2345-6789-0abcdef12345",
    name: "Lisa Anderson",
    number: "555-678-9012",
    status: false,
  },
  {
    id: "g7h8i9j0-k1l2-3456-7890-abcdef123456",
    name: "James Taylor",
    number: "555-789-0123",
    status: true,
  },
  {
    id: "h8i9j0k1-l2m3-4567-8901-bcdef1234567",
    name: "Emily Martinez",
    number: "555-890-1234",
    status: false,
  },
  {
    id: "i9j0k1l2-m3n4-5678-9012-cdef12345678",
    name: "Robert Lee",
    number: "555-901-2345",
    status: true,
  },
  {
    id: "j0k1l2m3-n4o5-6789-0123-def123456789",
    name: "Kelly White",
    number: "555-012-3456",
    status: false,
  },
  {
    id: "k1l2m3n4-o5p6-7890-1234-ef1234567890",
    name: "Thomas Clark",
    number: "555-123-5678",
    status: true,
  },
  {
    id: "l2m3n4o5-p6q7-8901-2345-f12345678901",
    name: "Megan Hall",
    number: "555-234-6789",
    status: false,
  },
  {
    id: "m3n4o5p6-q7r8-9012-3456-123456789012",
    name: "William Turner",
    number: "555-345-7890",
    status: true,
  },
  {
    id: "n4o5p6q7-r8s9-0123-4567-234567890123",
    name: "Olivia Green",
    number: "555-456-8901",
    status: false,
  },
  {
    id: "o5p6q7r8-s9t0-1234-5678-345678901234",
    name: "Daniel King",
    number: "555-567-9012",
    status: true,
  },
  {
    id: "p6q7r8s9-t0u1-2345-6789-456789012345",
    name: "Sophia Adams",
    number: "555-678-0123",
    status: false,
  },
  {
    id: "q7r8s9t0-u1v2-3456-7890-567890123456",
    name: "Chris Evans",
    number: "555-789-1234",
    status: true,
  },
  {
    id: "r8s9t0u1-v2w3-4567-8901-678901234567",
    name: "Ava Moore",
    number: "555-890-2345",
    status: false,
  },
  {
    id: "s9t0u1v2-w3x4-5678-9012-789012345678",
    name: "Brian Scott",
    number: "555-901-3456",
    status: true,
  },
  {
    id: "t0u1v2w3-x4y5-6789-0123-890123456789",
    name: "Chloe Parker",
    number: "555-012-4567",
    status: false,
  },
  {
    id: "u1v2w3x4-y5z6-7890-1234-901234567890",
    name: "Ethan Young",
    number: "555-123-6789",
    status: true,
  },
  {
    id: "v2w3x4y5-z6a7-8901-2345-012345678901",
    name: "Mia Phillips",
    number: "555-234-7890",
    status: false,
  },
  {
    id: "w3x4y5z6-a7b8-9012-3456-123456789012",
    name: "Noah Carter",
    number: "555-345-8901",
    status: true,
  },
  {
    id: "x4y5z6a7-b8c9-0123-4567-234567890123",
    name: "Isabella Reed",
    number: "555-456-9012",
    status: false,
  },
  {
    id: "y5z6a7b8-c9d0-1234-5678-345678901234",
    name: "Lucas Bell",
    number: "555-567-0123",
    status: true,
  },
  {
    id: "z6a7b8c9-d0e1-2345-6789-456789012345",
    name: "Grace Brooks",
    number: "555-678-1234",
    status: false,
  },
  {
    id: "a7b8c9d0-e1f2-3456-7890-567890123456",
    name: "Henry Ward",
    number: "555-789-2345",
    status: true,
  },
  {
    id: "b8c9d0e1-f2g3-4567-8901-678901234567",
    name: "Lily Cox",
    number: "555-890-3456",
    status: false,
  },
  {
    id: "c9d0e1f2-g3h4-5678-9012-789012345678",
    name: "Samuel Ross",
    number: "555-901-4567",
    status: true,
  },
  {
    id: "d0e1f2g3-h4i5-6789-0123-890123456789",
    name: "Zoe Perry",
    number: "555-012-5678",
    status: false,
  },
  {
    id: "e1f2g3h4-i5j6-7890-1234-901234567890",
    name: "Jack Hayes",
    number: "555-123-7890",
    status: true,
  },
  {
    id: "f2g3h4i5-j6k7-8901-2345-012345678901",
    name: "Ella Foster",
    number: "555-234-8901",
    status: false,
  },
  {
    id: "g3h4i5j6-k7l8-9012-3456-123456789012",
    name: "Owen Gray",
    number: "555-345-9012",
    status: true,
  },
  {
    id: "h4i5j6k7-l8m9-0123-4567-234567890123",
    name: "Hannah Long",
    number: "555-456-0123",
    status: false,
  },
  {
    id: "i5j6k7l8-m9n0-1234-5678-345678901234",
    name: "Liam Price",
    number: "555-567-1234",
    status: true,
  },
  {
    id: "j6k7l8m9-n0o1-2345-6789-456789012345",
    name: "Amelia Cook",
    number: "555-678-2345",
    status: false,
  },
  {
    id: "k7l8m9n0-o1p2-3456-7890-567890123456",
    name: "Mason Hill",
    number: "555-789-3456",
    status: true,
  },
  {
    id: "l8m9n0o1-p2q3-4567-8901-678901234567",
    name: "Harper Diaz",
    number: "555-890-4567",
    status: false,
  },
  {
    id: "m9n0o1p2-q3r4-5678-9012-789012345678",
    name: "Logan Myers",
    number: "555-901-5678",
    status: true,
  },
  {
    id: "n0o1p2q3-r4s5-6789-0123-890123456789",
    name: "Evelyn Ford",
    number: "555-012-6789",
    status: false,
  },
  {
    id: "o1p2q3r4-s5t6-7890-1234-901234567890",
    name: "Alexander Kim",
    number: "555-123-8901",
    status: true,
  },
  {
    id: "p2q3r4s5-t6u7-8901-2345-012345678901",
    name: "Scarlett Cole",
    number: "555-234-9012",
    status: false,
  },
  {
    id: "q3r4s5t6-u7v8-9012-3456-123456789012",
    name: "Gabriel Ortiz",
    number: "555-345-0123",
    status: true,
  },
  {
    id: "r4s5t6u7-v8w9-0123-4567-234567890123",
    name: "Victoria Fox",
    number: "555-456-1234",
    status: false,
  },
  {
    id: "s5t6u7v8-w9x0-1234-5678-345678901234",
    name: "Elijah Stone",
    number: "555-567-2345",
    status: true,
  },
  {
    id: "t6u7v8w9-x0y1-2345-6789-456789012345",
    name: "Charlotte Hart",
    number: "555-678-3456",
    status: false,
  },
  {
    id: "u7v8w9x0-y1z2-3456-7890-567890123456",
    name: "Benjamin Dunn",
    number: "555-789-4567",
    status: true,
  },
  {
    id: "v8w9x0y1-z2a3-4567-8901-678901234567",
    name: "Abigail Lane",
    number: "555-890-5678",
    status: false,
  },
  {
    id: "w9x0y1z2-a3b4-5678-9012-789012345678",
    name: "Matthew Dean",
    number: "555-901-6789",
    status: true,
  },
  {
    id: "x0y1z2a3-b4c5-6789-0123-890123456789",
    name: "Sofia Cruz",
    number: "555-012-7890",
    status: false,
  },
  {
    id: "y1z2a3b4-c5d6-7890-1234-901234567890",
    name: "Joseph Grant",
    number: "555-123-9012",
    status: true,
  },
  {
    id: "z2a3b4c5-d6e7-8901-2345-012345678901",
    name: "Natalie Rose",
    number: "555-234-0123",
    status: false,
  },
  {
    id: "a3b4c5d6-e7f8-9012-3456-123456789012",
    name: "Andrew Wells",
    number: "555-345-1234",
    status: true,
  },
  {
    id: "b4c5d6e7-f8g9-0123-4567-234567890123",
    name: "Lillian Ray",
    number: "555-456-2345",
    status: false,
  },
  {
    id: "c5d6e7f8-g9h0-1234-5678-345678901234",
    name: "Joshua Wood",
    number: "555-567-3456",
    status: true,
  },
  {
    id: "d6e7f8g9-h0i1-2345-6789-456789012345",
    name: "Aria Patel",
    number: "555-678-4567",
    status: false,
  },
  {
    id: "e7f8g9h0-i1j2-3456-7890-567890123456",
    name: "Ryan Knight",
    number: "555-789-5678",
    status: true,
  },
  {
    id: "f8g9h0i1-j2k3-4567-8901-678901234567",
    name: "Layla Shaw",
    number: "555-890-6789",
    status: false,
  },
  {
    id: "g9h0i1j2-k3l4-5678-9012-789012345678",
    name: "Dylan West",
    number: "555-901-7890",
    status: true,
  },
  {
    id: "h0i1j2k3-l4m5-6789-0123-890123456789",
    name: "Penelope Hunt",
    number: "555-012-8901",
    status: false,
  },
  {
    id: "i1j2k3l4-m5n6-7890-1234-901234567890",
    name: "Caleb Fisher",
    number: "555-123-0123",
    status: true,
  },
  {
    id: "j2k3l4m5-n6o7-8901-2345-012345678901",
    name: "Nora Ellis",
    number: "555-234-1234",
    status: false,
  },
  {
    id: "k3l4m5n6-o7p8-9012-3456-123456789012",
    name: "Isaac Murray",
    number: "555-345-2345",
    status: true,
  },
  {
    id: "l4m5n6o7-p8q9-0123-4567-234567890123",
    name: "Leah Gordon",
    number: "555-456-3456",
    status: false,
  },
  {
    id: "m5n6o7p8-q9r0-1234-5678-345678901234",
    name: "Julian Rivera",
    number: "555-567-4567",
    status: true,
  },
  {
    id: "n6o7p8q9-r0s1-2345-6789-456789012345",
    name: "Stella Burns",
    number: "555-678-5678",
    status: false,
  },
  {
    id: "o7p8q9r0-s1t2-3456-7890-567890123456",
    name: "Connor James",
    number: "555-789-6789",
    status: true,
  },
  {
    id: "p8q9r0s1-t2u3-4567-8901-678901234567",
    name: "Aurora Owens",
    number: "555-890-7890",
    status: false,
  },
  {
    id: "q9r0s1t2-u3v4-5678-9012-789012345678",
    name: "Parker Nguyen",
    number: "555-901-8901",
    status: true,
  },
  {
    id: "r0s1t2u3-v4w5-6789-0123-890123456789",
    name: "Hazel Bailey",
    number: "555-012-9012",
    status: false,
  },
  {
    id: "s1t2u3v4-w5x6-7890-1234-901234567890",
    name: "Sebastian Day",
    number: "555-123-2345",
    status: true,
  },
  {
    id: "t2u3v4w5-x6y7-8901-2345-012345678901",
    name: "Violet Silva",
    number: "555-234-3456",
    status: false,
  },
  {
    id: "u3v4w5x6-y7z8-9012-3456-123456789012",
    name: "Wyatt Sullivan",
    number: "555-345-4567",
    status: true,
  },
  {
    id: "v4w5x6y7-z8a9-0123-4567-234567890123",
    name: "Ruby Gibson",
    number: "555-456-5678",
    status: false,
  },
  {
    id: "w5x6y7z8-a9b0-1234-5678-345678901234",
    name: "Carter Lopez",
    number: "555-567-6789",
    status: true,
  },
  {
    id: "x6y7z8a9-b0c1-2345-6789-456789012345",
    name: "Luna Bryant",
    number: "555-678-7890",
    status: false,
  },
  {
    id: "y7z8a9b0-c1d2-3456-7890-567890123456",
    name: "Grayson Powell",
    number: "555-789-8901",
    status: true,
  },
  {
    id: "z8a9b0c1-d2e3-4567-8901-678901234567",
    name: "Ellie Morgan",
    number: "555-890-9012",
    status: false,
  },
  {
    id: "a9b0c1d2-e3f4-5678-9012-789012345678",
    name: "Lincoln Perry",
    number: "555-901-0123",
    status: true,
  },
  {
    id: "b0c1d2e3-f4g5-6789-0123-890123456789",
    name: "Skylar Howard",
    number: "555-012-1234",
    status: false,
  },
  {
    id: "c1d2e3f4-g5h6-7890-1234-901234567890",
    name: "Miles Bennett",
    number: "555-123-3456",
    status: true,
  },
  {
    id: "d2e3f4g5-h6i7-8901-2345-012345678901",
    name: "Avery Sanders",
    number: "555-234-4567",
    status: false,
  },
  {
    id: "e3f4g5h6-i7j8-9012-3456-123456789012",
    name: "Hudson Brooks",
    number: "555-345-5678",
    status: true,
  },
  {
    id: "f4g5h6i7-j8k9-0123-4567-234567890123",
    name: "Paisley Ortiz",
    number: "555-456-6789",
    status: false,
  },
  {
    id: "g5h6i7j8-k9l0-1234-5678-345678901234",
    name: "Ezra Collins",
    number: "555-567-7890",
    status: true,
  },
  {
    id: "h6i7j8k9-l0m1-2345-6789-456789012345",
    name: "Willow Kelly",
    number: "555-678-8901",
    status: false,
  },
  {
    id: "i7j8k9l0-m1n2-3456-7890-567890123456",
    name: "Asher Watson",
    number: "555-789-9012",
    status: true,
  },
  {
    id: "j8k9l0m1-n2o3-4567-8901-678901234567",
    name: "Savannah Fox",
    number: "555-890-0123",
    status: false,
  },
  {
    id: "k9l0m1n2-o3p4-5678-9012-789012345678",
    name: "Jameson Reed",
    number: "555-901-1234",
    status: true,
  },
  {
    id: "l0m1n2o3-p4q5-6789-0123-890123456789",
    name: "Piper Hayes",
    number: "555-012-2345",
    status: false,
  },
  {
    id: "m1n2o3p4-q5r6-7890-1234-901234567890",
    name: "Roman Carter",
    number: "555-123-4567",
    status: true,
  },
  {
    id: "n2o3p4q5-r6s7-8901-2345-012345678901",
    name: "Emery Phillips",
    number: "555-234-5678",
    status: false,
  },
  {
    id: "o3p4q5r6-s7t8-9012-3456-123456789012",
    name: "Easton Clark",
    number: "555-345-6789",
    status: true,
  },
  {
    id: "p4q5r6s7-t8u9-0123-4567-234567890123",
    name: "Everly Adams",
    number: "555-456-7890",
    status: false,
  },
  {
    id: "q5r6s7t8-u9v0-1234-5678-345678901234",
    name: "Maverick Lee",
    number: "555-567-8901",
    status: true,
  },
  {
    id: "r6s7t8u9-v0w1-2345-6789-456789012345",
    name: "Autumn Green",
    number: "555-678-9012",
    status: false,
  },
  {
    id: "s7t8u9v0-w1x2-3456-7890-567890123456",
    name: "Silas Turner",
    number: "555-789-0123",
    status: true,
  },
  {
    id: "t8u9v0w1-x2y3-4567-8901-678901234567",
    name: "Freya Hall",
    number: "555-890-1234",
    status: false,
  },
  {
    id: "u9v0w1x2-y3z4-5678-9012-789012345678",
    name: "Theo Young",
    number: "555-901-2345",
    status: true,
  },
  {
    id: "v0w1x2y3-z4a5-6789-0123-890123456789",
    name: "Ivy Scott",
    number: "555-012-3456",
    status: false,
  },
  {
    id: "w1x2y3z4-a5b6-7890-1234-901234567890",
    name: "Jasper King",
    number: "555-123-5678",
    status: true,
  },
  {
    id: "x2y3z4a5-b6c7-8901-2345-012345678901",
    name: "Delilah Moore",
    number: "555-234-6789",
    status: false,
  },
  {
    id: "y3z4a5b6-c7d8-9012-3456-123456789012",
    name: "Finn Davis",
    number: "555-345-7890",
    status: true,
  },
  {
    id: "z4a5b6c7-d8e9-0123-4567-234567890123",
    name: "Clara Wilson",
    number: "555-456-8901",
    status: false,
  },
  {
    id: "a5b6c7d8-e9f0-1234-5678-345678901234",
    name: "Arlo Brown",
    number: "555-567-9012",
    status: true,
  },
  {
    id: "b6c7d8e9-f0g1-2345-6789-456789012345",
    name: "Sadie Taylor",
    number: "555-678-0123",
    status: false,
  },
  {
    id: "c7d8e9f0-g1h2-3456-7890-567890123456",
    name: "Kai Martinez",
    number: "555-789-1234",
    status: true,
  },
  {
    id: "d8e9f0g1-h2i3-4567-8901-678901234567",
    name: "Lila Anderson",
    number: "555-890-2345",
    status: false,
  },
  {
    id: "e9f0g1h2-i3j4-5678-9012-789012345678",
    name: "River Johnson",
    number: "555-901-3456",
    status: true,
  },
  {
    id: "f0g1h2i3-j4k5-6789-0123-890123456789",
    name: "Nova Smith",
    number: "555-012-4567",
    status: false,
  },
];

const Dashboard = () => {
  const [search, setSearch] = useState("");
  console.log("search", search);
  const filteredUserData = data.filter((user) =>
    user.name.toLowerCase().trim().includes(search.toLowerCase().trim())
  );
  console.log("filteredUserData", filteredUserData);
  const removeDataFormLoc = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };
  return (
    <>
      <Container>
        <h2>Dashboard</h2>
        <Form.Group className="mb-12" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search By name"
          />
        </Form.Group>{" "}
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>number</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUserData.slice(0, 5).map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i?.id}</td>
                  <td>{i?.name}</td>
                  <td>{i?.number}</td>
                  <td>{i?.status}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Button onClick={() => removeDataFormLoc()}>Logout</Button>
      </Container>
    </>
  );
};
export default Dashboard;
