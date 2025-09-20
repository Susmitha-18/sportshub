import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function PerformanceInsights() {
  // Sample performance stats
  const performanceStats = {
    matchesPlayed: 45,
    wins: 30,
    losses: 15,
    medals: 10,
    personalBest: "100m in 10.5s",
    avgSpeed: "28 km/h",
    stamina: "High",
    trainingHours: "20 hrs/week",
  };

  // Bar chart data (performance across competitions)
  const chartData = [
    { year: "2020", Wins: 8, Losses: 5 },
    { year: "2021", Wins: 10, Losses: 6 },
    { year: "2022", Wins: 6, Losses: 4 },
    { year: "2023", Wins: 12, Losses: 3 },
    { year: "2024", Wins: 14, Losses: 2 },
  ];

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">📊 Performance Insights</h2>

      <Row>
        <Col md={6}>
          <Card className="p-3 shadow-sm mb-4">
            <h5 className="mb-3 text-primary">Performance Summary</h5>
            <Table bordered hover>
              <tbody>
                <tr>
                  <td>Matches Played</td>
                  <td>{performanceStats.matchesPlayed}</td>
                </tr>
                <tr>
                  <td>Wins</td>
                  <td>{performanceStats.wins}</td>
                </tr>
                <tr>
                  <td>Losses</td>
                  <td>{performanceStats.losses}</td>
                </tr>
                <tr>
                  <td>Medals</td>
                  <td>{performanceStats.medals}</td>
                </tr>
                <tr>
                  <td>Personal Best</td>
                  <td>{performanceStats.personalBest}</td>
                </tr>
                <tr>
                  <td>Average Speed</td>
                  <td>{performanceStats.avgSpeed}</td>
                </tr>
                <tr>
                  <td>Stamina</td>
                  <td>{performanceStats.stamina}</td>
                </tr>
                <tr>
                  <td>Training Hours</td>
                  <td>{performanceStats.trainingHours}</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-3 shadow-sm mb-4">
            <h5 className="mb-3 text-success">Performance Over Years</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Wins" fill="#4CAF50" barSize={40} />
                <Bar dataKey="Losses" fill="#FF5722" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PerformanceInsights;
