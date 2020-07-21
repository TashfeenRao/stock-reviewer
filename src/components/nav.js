import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nav = () => (
  <Row className="nav-row ml-0 mr-0">
    <Col>
      <Link to="/" className="text-decoration-none text-style" data-toggle="tooltip" title="Home">
        <h1 className="text-white text-center pt-2 text-style">Stock Reviewer</h1>
      </Link>
    </Col>
  </Row>
);
export default Nav;
