import { Stack } from "@chakra-ui/react";
import logo from "../../assets/logo-black.svg";
import wallet1 from "../../assets/loginPage-wallet-1.png";
import wallet2 from "../../assets/loginPage-wallet-2.png";
import wallet3 from "../../assets/loginPage-wallet-3.svg";
import image from "../../assets/loginPage-image.png";
import "./LoginPage.css";
import SwiperRightArrow from "../../assets/swiper-right-arrow";
import { Link } from "react-router-dom";
import Swiper from "../../components/Swiper/Swiper";

const LoginPage = () => {
  return (
    <div className="LoginPage">
      <div className="LoginPage-left">
        <Link className="link" style={{ alignSelf: "flex-start" }} to="/">
          <img src={logo} alt="" />
        </Link>
        <Stack direction="column" alignItems="center" gap="25px" width="100%">
          <span className="loginPage-title">Choose Wallet</span>
          <div className="loginPage-wallets-list">
            <div className="loginPage-wallets-item">
              <Stack direction="row" alignItems="center" gap="15px">
                <img src={wallet1} alt="" className="loginPage-image" />
                <span className="loginPage-wallet-title">Metamask</span>
              </Stack>
              <SwiperRightArrow />
            </div>
            <div className="loginPage-wallets-item">
              <Stack direction="row" alignItems="center" gap="15px">
                <img src={wallet2} alt="" className="loginPage-image" />
                <span className="loginPage-wallet-title">Trust Wallet</span>
              </Stack>
              <SwiperRightArrow />
            </div>
            <div className="loginPage-wallets-item">
              <Stack direction="row" alignItems="center" gap="15px">
                <img src={wallet3} alt="" className="loginPage-image" />
                <span className="loginPage-wallet-title">
                  Enter ethereum address
                </span>
              </Stack>
              <SwiperRightArrow />
            </div>
          </div>
          <div className="loginPage-next-btn">Next</div>
        </Stack>
        <div className="loginPage-footer">
          <span className="loginPage-footer-title">Privacy Policy</span>
          <span className="loginPage-footer-title">Copyright 2022</span>
        </div>
      </div>
      <div className="LoginPage-right">
        <img src={image} alt="" />
        <Stack direction="column" alignItems="center">
          <span className="loginPage-right-title-1">
            Start Your Own NFT Gallery
          </span>
          <span className="loginPage-right-title-2">
            CloseSea Is A Great Platform For Discover Largest NFTs And Other
            Stuff !!
          </span>
          <div style={{ marginTop: "50px" }}>
            <Swiper />
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default LoginPage;
