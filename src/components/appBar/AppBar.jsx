import {Container, Nav, Navbar} from "react-bootstrap";
import {Link as Link1} from "react-router-dom";
import {Link as Link2} from "react-scroll";
import React, {useEffect, useRef, useState} from "react";

const AppBar = () => {
    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 700 && window.scrollY < 1500
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return(
      <div>

          <Navbar expand="sm" fixed="top"
                  style={{transition: '1s ease', backgroundColor: !navBackground ? '#040510' : 'transparent'}}>
              <Container>
                  <Navbar.Brand href="/" style={{
                      transition: '1s ease',
                      color: !navBackground ? 'white' : 'black'
                  }}>WebTout</Navbar.Brand>
                  <Nav className="me-auto">
                      <Nav.Link style={{
                          transition: '1s ease',
                          color: !navBackground ? 'white' : '#808080'
                      }}><Link1 to='/' style={{
                          transition: '1s ease',
                          color: !navBackground ? 'white' : '#808080', textDecoration: 'none'
                      }}>Home</Link1></Nav.Link>
                      <Nav.Link  style={{
                          transition: '1s ease',
                          color: !navBackground ? 'white' : '#808080'
                      }}><Link1 to='/market' style={{
                          transition: '1s ease',
                          color: !navBackground ? 'white' : '#808080', textDecoration: 'none'
                      }}>Market</Link1></Nav.Link>
                      <Nav.Link  style={{
                          transition: '1s ease',
                          color: !navBackground ? 'white' : '#808080'
                      }}><Link1 to='/editor' style={{
                          transition: '1s ease',
                          color: !navBackground ? 'white' : '#808080', textDecoration: 'none'
                      }}>Editor</Link1></Nav.Link>
                      <Nav.Link
                          style={{transition: '1s ease', color: !navBackground ? 'white' : '#808080',textDecoration: 'none'}}>
                          <Link2  to="contact" spy={true} smooth={true}>Contact Us</Link2>
                      </Nav.Link>
                  </Nav>
                  <Nav>
                      <Nav.Link
                          style={{transition: '1s ease', color: !navBackground ? 'white' : '#808080', textDecoration: 'none'}}><Link1 style={{
                          transition: '1s ease',
                          color: !navBackground ? 'white' : '#808080', textDecoration: 'none'
                      }} to='/login'>Sign
                          In</Link1></Nav.Link>
                      <Nav.Link eventKey={2}
                                style={{
                                    transition: '1s ease', color: 'white', backgroundColor: '#198754',
                                    borderRadius: '7px', marginLeft: '7px'
                                }}><Link1 style={{
                          transition: '1s ease',
                          color:  'white' , textDecoration: 'none'
                      }} to={'signUp'}>Register</Link1>

                      </Nav.Link>
                  </Nav>
              </Container>
          </Navbar>

      </div>
  )
}
export default AppBar
