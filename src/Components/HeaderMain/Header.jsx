import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import ecommercelogo from '../../assets/ecommercelogo.png'
import {useSelector} from 'react-redux';


function Header() {
  const auth = useSelector((state)=>state.auth.data);
  return (
    <Navbar className="change-nav"  expand="lg">
      <Container>
        <Navbar.Brand className="ecommerce-logo"
        href="/">
          <img src={ecommercelogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Section/Furniture">Furniture&Organization</NavDropdown.Item>
              <NavDropdown.Item href="/Section/Engagement">
                Engagement&Wedding Gifts
              </NavDropdown.Item>
              <NavDropdown.Item href="/Section/Hoodies">Hoodies&Sweaters</NavDropdown.Item>
              <NavDropdown.Item href="/Section/Jewelry">Unique Jewelry</NavDropdown.Item>
              <NavDropdown.Item href="/Section/MakeUp">Make Up</NavDropdown.Item>
              <NavDropdown.Item href="/Section/Shoes">Unique Shoes</NavDropdown.Item>

            </NavDropdown>
            <Nav.Link className="move-cart" href='/checkout'>
              Checkout
            </Nav.Link>
            {auth!==null &&(
              <>
           
              { auth.role==='ADMIN' &&(
                <Nav.Link className="move-cart" href='/505'>
                Dashboard
              </Nav.Link>
 

              )}
                               </>

              
            )}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;