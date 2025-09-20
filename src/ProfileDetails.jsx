import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

function ProfileDetails() {
  // Sample user data (later fetch from API)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    age: 21,
    gender: "Male",
    location: "Chennai, India",
    sport: "Athletics",
    position: "Sprinter (100m & 200m)",
    team: "Tamil Nadu Athletics Club",
    coach: "Mr. Ramesh Kumar",
    ranking: "National Rank #3",
    experience: "6 years",
    trainingCenter: "Jawaharlal Nehru Stadium",
    trainingHours: "20 hrs/week",
    achievements: "Gold Medal - National Championship 2024\nSilver Medal - South Zone 2023",
    instagram: "https://instagram.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated! (Demo only, integrate API later)");
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">👤 Athlete Profile</h2>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="p-4 shadow-lg border-0 rounded-4">
            <Form onSubmit={handleUpdate}>
              {/* ----- Personal Info ----- */}
              <h5 className="mb-3 text-primary">Personal Information</h5>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Full Name</Form.Label>
                    <Form.Control type="text" defaultValue={user.name} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control type="email" defaultValue={user.email} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Phone</Form.Label>
                    <Form.Control type="text" defaultValue={user.phone} />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Age</Form.Label>
                    <Form.Control type="number" defaultValue={user.age} />
                  </Form.Group>
                </Col>
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Gender</Form.Label>
                    <Form.Control type="text" defaultValue={user.gender} />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Location</Form.Label>
                    <Form.Control type="text" defaultValue={user.location} />
                  </Form.Group>
                </Col>
              </Row>

              {/* ----- Sports Info ----- */}
              <h5 className="mt-4 mb-3 text-success">Sports Information</h5>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Sport</Form.Label>
                    <Form.Control type="text" defaultValue={user.sport} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Position / Event</Form.Label>
                    <Form.Control type="text" defaultValue={user.position} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Team / Club</Form.Label>
                    <Form.Control type="text" defaultValue={user.team} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Coach</Form.Label>
                    <Form.Control type="text" defaultValue={user.coach} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Ranking</Form.Label>
                    <Form.Control type="text" defaultValue={user.ranking} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Experience</Form.Label>
                    <Form.Control type="text" defaultValue={user.experience} />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Training Hours</Form.Label>
                    <Form.Control type="text" defaultValue={user.trainingHours} />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Training Center</Form.Label>
                    <Form.Control type="text" defaultValue={user.trainingCenter} />
                  </Form.Group>
                </Col>
              </Row>

              {/* ----- Achievements ----- */}
              <h5 className="mt-4 mb-3 text-warning">Achievements</h5>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  defaultValue={user.achievements}
                />
              </Form.Group>

              {/* ----- Social Links ----- */}
              <h5 className="mt-4 mb-3 text-info">Social Links</h5>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">Instagram</Form.Label>
                    <Form.Control type="url" defaultValue={user.instagram} />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">LinkedIn</Form.Label>
                    <Form.Control type="url" defaultValue={user.linkedin} />
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit" variant="primary" className="w-100 mt-3">
                Update Profile
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfileDetails;
