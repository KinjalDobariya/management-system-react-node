import { Col, Container, Row } from "reactstrap";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";


const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlelogout = () =>{
    localStorage.removeItem('token')
    window.location('/')
  }

  return (
    <div className="p_navbar">
      <Container fluid>
        <Row>
          <Col lg="6" md="6" sm="12" className="p_search ">
            <div >
              <ul className="menu">
                <li><Link to="/home">
                  <div>
                    Home
                  </div>
                </Link></li>
                <li>
                  <Link to="">
                    <div>
                      Contact
                    </div></Link></li>
              </ul>
            </div>
          </Col>
          <Col lg="6" md="6" sm="12" >

            <div className="p_profile text-center">
              <div className="p_notification">
                <Link to="" onClick={handlelogout}> 
                  <i className="ri-shut-down-line"></i>
                </Link>
              </div>

            </div>
          </Col>
        </Row>
      </Container>

    </div >
  );
};

export default Navbar;
