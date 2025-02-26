import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container className="mt-4">
      
        <h1>Welcome to Our Hotel Management System</h1>
        <p>Book hotels and restaurants with ease.</p>
        <Button as={Link} to="/listings" variant="primary">Browse Listings</Button>
     
    </Container>
  );
}

export default Home;
