import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { Nav, Navbar } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
  Meme generator
</Navbar.Brand>
<Nav
  activeKey="/thumnnail"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/thumnnail">Thumbnail</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/editor">Nouveau meme</Nav.Link>
  </Nav.Item>
</Nav>
  </Navbar>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
