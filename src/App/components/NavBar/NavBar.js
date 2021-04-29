import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.scss';
import { Nav, Navbar } from 'react-bootstrap';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {LinkContainer} from 'react-router-bootstrap';
const NavBar = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
  Meme generator
</Navbar.Brand>
<Nav
  activeKey="/thumbnail"
  onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
>
  <LinkContainer to="/thumbnail">
  <Nav.Link>Thumbnail</Nav.Link>
  </LinkContainer>

  <LinkContainer to="/editor">
  <Nav.Link>Nouveau meme</Nav.Link>
 </LinkContainer>
</Nav>
  </Navbar>
);

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
