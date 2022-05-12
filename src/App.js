import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import ContactMe from './components/ContactMe/ContactMe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <Container style={{ background: '#f4f4f4', color: '#333' }}>
        <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
          <Container>
            <Navbar.Brand href="/">GL</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/aboutMe">About Me</Nav.Link>
                <Nav.Link href="/skills">Skills</Nav.Link>
                <Nav.Link href="/work">Work</Nav.Link>
                <Nav.Link href="/contactMe">Contact Me</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Header />

        <Container>
          <Container>
            <Routes>
              <Route
                path='/aboutMe'
                element={<AboutMe />}
              />
              <Route
                path='/skills'
                element={<Skills />}
              />
              <Route
                path='/work'
                element={<Work />}
              />
              <Route
                path='/contactMe'
                element={<ContactMe />}
              />
            </Routes>
          </Container>
        </Container>

        <Footer />

      </Container>
    </Router>
  );
}

export default App;
