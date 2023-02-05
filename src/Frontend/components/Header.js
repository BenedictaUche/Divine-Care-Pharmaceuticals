import { Container, Navbar as NavbarBs, Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping, faUserAlt } from '@fortawesome/free-solid-svg-icons'


export function Header() {
    return (
        <NavbarBs sticky="top" className='bg-white shadow-md h-20'>
            <Container>
                <Nav className='text-xl ml-20 text-center' style={{marginTop: '2%'}}> 
                    <Nav.Link to="/" as={NavLink} className="" >Home</Nav.Link>
                    <Nav.Link to="/aboutUs" as={NavLink} className="ml-10">About Us</Nav.Link>
                    <Nav.Link to="/shop" as={NavLink} className="ml-10">Shop</Nav.Link>
                    <Nav.Link to="/contact" as={NavLink} className="ml-10">Contact Us</Nav.Link>
                    <FontAwesomeIcon icon={faUserAlt} className="text-[#009E7E] ml-20" />
                    <FontAwesomeIcon icon={faCartShopping} className="text-[#009E7E] ml-8"/>
                </Nav>
            </Container>
            
        </NavbarBs>
    )
}