/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  NavDropdown,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" className="color-nav" variant="light">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand><h1 className="logo">la<strong>biblioteca</strong></h1></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user.nickname ? (
            <Nav className="me-auto">
              {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
              <Link passHref href="/">
                <Nav.Link className="nav-text">Home</Nav.Link>
              </Link>
              <NavDropdown title="My Books" id="basic-nav-dropdown" className="nav-text nav-dropdown">
                <Link passHref href="/books/bookshelves/wantToRead">
                  <NavDropdown.Item>Want To Read</NavDropdown.Item>
                </Link>
                <Link passHref href="/books/bookshelves/currentlyReading">
                  <NavDropdown.Item>Currently Reading</NavDropdown.Item>
                </Link>
                <Link passHref href="/books/bookshelves/read">
                  <NavDropdown.Item>Read</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link passHref href="/">
                <Nav.Link onClick={signOut} className="nav-text">Sign Out</Nav.Link>
              </Link>
            </Nav>
          ) : (
            <Nav>
              <Navbar.Text className="nav-text">Opps! Need to go back?</Navbar.Text>
              <Link passHref href="/">
                <Nav.Link onClick={signOut} className="nav-text link-border">Go Back</Nav.Link>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
