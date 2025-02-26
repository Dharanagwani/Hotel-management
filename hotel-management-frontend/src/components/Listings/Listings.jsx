import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/listings')
      .then(res => setListings(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {listings.map(listing => (
          <Col md={4} key={listing.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={listing.image} />
              <Card.Body>
                <Card.Title>{listing.name}</Card.Title>
                <Card.Text>{listing.description}</Card.Text>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Listings;
