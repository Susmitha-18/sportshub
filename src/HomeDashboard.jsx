import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // use Link for navigation

function HomeDashboard() {
  return (
    <>
      {/* Top Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            🏆 Sports Talent Hub
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fw-bold">
              <Nav.Link as={Link} to="/profile-details">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/fitness-details">
                Fitness Tests
              </Nav.Link>
              <Nav.Link as={Link} to="/insights-details">
                Performance Insights
              </Nav.Link>
              <Nav.Link as={Link} to="/training-details">
                Training & Guidance
              </Nav.Link>
              <Nav.Link as={Link} to="/notifications-details">
                Notifications
              </Nav.Link>
              <Nav.Link as={Link} to="/achievements-details">
                Achievements
              </Nav.Link>
              <Nav.Link as={Link} to="/submissions-details">
                Submissions
              </Nav.Link>
              <Nav.Link as={Link} to="/support-details">
                Support
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Optional: Keep sections as overview (can remove if using separate pages) */}
      <Container className="mt-5">
        <section className="mb-5">
          <h2>Welcome to your Dashboard</h2>
          <p>
            Select any section from the top navigation to see details.
          </p>
        </section>
      </Container>
    </>
  );
}

export default HomeDashboard;
