import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const VendorDashboard = () => {
  return (
    <Container className="mt-4">
      <h2>Vendor Dashboard</h2>
      <Button as={Link} to="/vendor/add-listing" variant="success">Add New Listing</Button>
    </Container>
  );
}

export default VendorDashboard;
