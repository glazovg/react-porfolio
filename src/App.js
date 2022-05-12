import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import ContactMe from './components/ContactMe/ContactMe';

function App() {
  return (
    <Container style={{ background: '#f4f4f4', color: '#333' }}>
      <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand href="#">GL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about-me">About Me</Nav.Link>
              <Nav.Link href="##skills">Skills</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#contact-me">Contact Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Header />
      <Container>
        <Container>
          <AboutMe />
          <Skills />
          <Work />
          <ContactMe />
        </Container>
      </Container>

      <footer className="d-flex justify-content-center">
        <p>© Guillermo Lazo 2022</p>
      </footer>

    </Container>

  );
}

export default App;
