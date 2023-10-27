import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import {Nav, NavbarBrand, NavbarCollapse, NavbarToggle, NavLink} from "react-bootstrap";

function Navigation(){
    return (
        <Navbar bg='dark' variant='dark' expand='lg' >
            <Container>
                <NavbarBrand href='#home' className='text-white'>Start Bootstrap</NavbarBrand>
                <NavbarToggle aria-controls='responsive-navbar-nav' />
                <NavbarCollapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto'>
                        <NavLink href='#home'>Home</NavLink>
                        <NavLink href='#about'>About</NavLink>
                        <NavLink href='#contact'>Contact</NavLink>
                        <NavLink href='#blog'>Blog</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;