import "./Footer.css";
import logo from "../../assets/logo-white.svg";
import { Divider, Stack } from "@chakra-ui/react";
import FooterNavBar from "../FooterNavBar/FooterNavBar";
import Instagram from "../../assets/instagram.jsx";
import LinkedIn from "../../assets/linkedIn.jsx";
import Facebook from "../../assets/facebook.jsx";
import Twitter from "../../assets/twitter.jsx";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-block">
        <Stack direction="row" alignItems="center" gap="10px">
          <img src={logo} alt="" />
          <span className="footer-logo-title">DiveSea</span>
        </Stack>
        <FooterNavBar />
      </div>
      <Divider />
      <div className="footer-block">
        <span className="footer-rights">© 2023 EATLY All Rights Reserved.</span>
        <div className="footer-social">
          <Instagram />
          <LinkedIn />
          <Facebook />
          <Twitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
