import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

function TrainingGuidance() {
  // Sample training & guidance data (later fetch from API)
  const trainingData = {
    mentor: "Mr. Arjun Ravi",
    program: "Sprint & Strength Program",
    fitnessGuidance: [
      "Interval Training for Endurance",
      "Plyometric Drills for Explosiveness",
      "Core Stability Workouts",
      "Flexibility & Recovery Sessions",
    ],
    dietPlan: [
      "High Protein Breakfast (Eggs, Oats, Milk)",
      "Balanced Lunch (Rice, Chicken, Vegetables)",
      "Pre-workout Snack (Banana, Nuts)",
      "Post-workout Shake (Protein + Carbs)",
    ],
    weeklySchedule: [
      "Monday - Sprint Training",
      "Tuesday - Strength & Conditioning",
      "Wednesday - Endurance Runs",
      "Thursday - Flexibility & Core",
      "Friday - Sprint Training",
      "Saturday - Game Simulation",
      "Sunday - Rest & Recovery",
    ],
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">🏋️ Training & Guidance</h2>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="p-4 shadow-lg border-0 rounded-4">
            <h5 className="text-primary mb-3">Mentor</h5>
            <p><strong>{trainingData.mentor}</strong></p>

            <h5 className="text-success mt-4 mb-3">Training Program</h5>
            <p>{trainingData.program}</p>

            <h5 className="text-warning mt-4 mb-3">Fitness Guidance</h5>
            <ListGroup>
              {trainingData.fitnessGuidance.map((item, idx) => (
                <ListGroup.Item key={idx}>{item}</ListGroup.Item>
              ))}
            </ListGroup>

            <h5 className="text-info mt-4 mb-3">Diet Plan</h5>
            <ListGroup>
              {trainingData.dietPlan.map((item, idx) => (
                <ListGroup.Item key={idx}>{item}</ListGroup.Item>
              ))}
            </ListGroup>

            <h5 className="text-secondary mt-4 mb-3">Weekly Schedule</h5>
            <ListGroup>
              {trainingData.weeklySchedule.map((item, idx) => (
                <ListGroup.Item key={idx}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TrainingGuidance;
