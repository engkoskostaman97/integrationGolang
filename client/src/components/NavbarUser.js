import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate as navigate } from "react-router-dom";
import Logo from "../assets/dumbflix-logo.png";
import UserBlank from "../assets/blank-profile.png";
import Profil from "../assets/profile.png";
import Pay from "../assets/bill.png";
import LogoutIcon from "../assets/logout.svg";
import Login from "./ModalLogin";
import Register from "./ModalRegist";
import { useState } from "react";

function NavbarUser() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const registerHere = (e) => {
    e.preventDefault();
    setRegisterShow(false);
    setLoginShow(true);
  };

  const loginHere = (e) => {
    e.preventDefault();
    setLoginShow(false);
    setRegisterShow(true);
  };
  return (
    <div>
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        expand="lg"
        className="navbg"
        style={{ height: "10vh" }}
      >
        <Container>
          <Nav>
            <Nav.Link>
              <Link to="/" className="navlink text-white">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tvshows" className="navlink text-white">
                TV Shows
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/movies" className="navlink text-white">
                Movies
              </Link>
            </Nav.Link>
          </Nav>
          <Navbar.Brand as={Link} to="/" style={{ marginLeft: "17.5rem" }}>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {isLogin ? (
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav style={{ marginRight: "5%" }}>
                <NavDropdown
                  title={
                    <div>
                      <img
                        className="rounded-circle"
                        src={UserBlank}
                        alt="User"
                        style={{ width: "35px", marginTop: "30px" }}
                      />
                    </div>
                  }
                  id="nav-dropdown"
                >
                  <NavDropdown.Item
                    bg="dark"
                    variant="dark"
                    style={{ backgroundColor: "black", color: "white" }}
                    as={Link}
                    to="/profiles"
                  >
                    <img
                      src={Profil}
                      alt="icon"
                      style={{ width: "25px", marginRight: "5px" }}
                    />
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    style={{ backgroundColor: "black", color: "white" }}
                    as={Link}
                    to="/paymen"
                  >
                    <img
                      src={Pay}
                      alt="icon"
                      style={{ width: "25px", marginRight: "5px" }}
                    />
                    Pay
                  </NavDropdown.Item>
                  <NavDropdown.Divider
                    style={{ backgroundColor: "grey", color: "white" }}
                  />
                  <NavDropdown.Item
                    onClick={() => setIsLogin(false)}
                    style={{ backgroundColor: "black", color: "white" }}
                  >
                    <img
                      src={LogoutIcon}
                      alt="icon"
                      style={{ width: "25px", marginRight: "5px" }}
                    />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          ) : (
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <button
                className="btnregist me-2"
                onClick={() => setRegisterShow(true)}
              >
                Register
              </button>
              <button className="btnlogin" onClick={() => setLoginShow(true)}>
                Login
              </button>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
      <Login
        loginHere={loginHere}
        loginShow={loginShow}
        setLoginShow={setLoginShow}
        setIsLogin={setIsLogin}
      />
      <Register
        registerHere={registerHere}
        registerShow={registerShow}
        setRegisterShow={setRegisterShow}
      />
    </div>
  );
}

export default NavbarUser;
