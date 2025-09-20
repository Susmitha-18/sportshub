import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default function SportsNews({ articles, loading, error }) {
  return (
    <Container className="my-5">
      {error && (
        <Row>
          <Col className="text-center text-danger mb-3">{error}</Col>
        </Row>
      )}
      <Row>
        {loading ? (
          <Col className="text-center">Loading news...</Col>
        ) : articles && articles.length > 0 ? (
          articles.map((article, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <Card style={{ height: "100%" }}>
                {article.urlToImage && (
                  <Card.Img
                    variant="top"
                    src={article.urlToImage}
                    alt="News"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>
                    {article.description || "No description available"}
                  </Card.Text>
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-primary">Read More</button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col className="text-center text-muted">No news to show. Click 'Latest News' above.</Col>
        )}
      </Row>
    </Container>
  );
}
