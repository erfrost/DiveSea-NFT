import "./Header.css";
import logo from "../../assets/logo-black.svg";
import search from "../../assets/search-icon.svg";
import NavBar from "../NavBar/NavBar";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const isTabletDevice = useMediaQuery({ maxWidth: "1050px" });
  const isMobileDevice = useMediaQuery({ maxWidth: "875px" });

  return (
    <div className="Header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="" style={{ cursor: "pointer" }} />
        </Link>
        {isMobileDevice ? (
          <span className="header-mobile-title">DiveSea</span>
        ) : (
          <NavBar />
        )}
      </div>
      {isMobileDevice ? (
        <MobileMenu />
      ) : (
        <div className="header-right">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              className="header-input-icon"
            >
              <img src={search} alt="" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder={
                isTabletDevice ? "Search" : "Search Art Work / Creator"
              }
              className="header-input"
            />
          </InputGroup>
          <Link to="/login" className="link">
            <Button className="header-btn">Connect Wallet</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
