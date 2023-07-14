import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import bg from "../../assets/userPage-bg.png";
import avatar from "../../assets/userPage-avatar.png";
import Instagram from "../../assets/instagram";
import LinkedIn from "../../assets/linkedIn";
import Facebook from "../../assets/facebook";
import Twitter from "../../assets/twitter";
import "./UserPage.css";
import { AddIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";
import UserPageCollection from "../../assets/userPage-collection";
import UserPageActivity from "../../assets/userPage-activity";
import UserNFTCard from "../../components/UserNFTCard/UserNFTCard";
import { useState } from "react";
import ProfileActivity from "../../components/ProfileActivity/ProfileActivity";

const UserPage = () => {
  const [page, setPage] = useState("collection");
  const collectionClick = () => {
    setPage("collection");
    const collectionBtn = document.querySelector(".userPage-navigation-1");
    collectionBtn.classList.add("userPage-navigate-btn-active");

    const activityBtn = document.querySelector(".userPage-navigation-2");
    activityBtn.classList.remove("userPage-navigate-btn-active");
  };
  const activityClick = () => {
    setPage("activity");
    const activityBtn = document.querySelector(".userPage-navigation-2");
    activityBtn.classList.add("userPage-navigate-btn-active");

    const collectionBtn = document.querySelector(".userPage-navigation-1");
    collectionBtn.classList.remove("userPage-navigate-btn-active");
  };

  return (
    <div className="UserPage">
      <Header />
      <div className="userPage-main">
        <img src={bg} alt="" className="userPage-bg" />
        <div className="userPage-content">
          <div className="userPage-info">
            <div className="userPage-title-block">
              <img src={avatar} alt="" className="userPage-avatar" />
              <div className="userPage-name">
                <span className="userPage-name-1">Harry K.</span>
                <span className="userPage-name-2">@Harryknft</span>
              </div>
              <div className="userPage-follow-btn">
                <span className="userPage-follow-btn-title">Follow</span>
                <AddIcon boxSize={2} color="white" />
              </div>
            </div>
            <Divider />
            <div className="userPage-stats">
              <div className="userPage-stats-item">
                <span className="userPage-stats-title-1">86 ETH</span>
                <span className="userPage-stats-title-2">Total Sales</span>
              </div>
              <div className="userPage-stats-item">
                <span className="userPage-stats-title-1">12K</span>
                <span className="userPage-stats-title-2">Followers</span>
              </div>
              <div className="userPage-stats-item">
                <span className="userPage-stats-title-1">587</span>
                <span className="userPage-stats-title-2">Followings</span>
              </div>
            </div>
            <div className="userPage-bio-block">
              <span className="userPage-bio-title">Bio</span>
              <span className="userPage-bio-text">
                the artist who transforms the intangible into priceless assets
                with their incredible NFT creations. From stunning visuals to
                mind-bending concepts,
              </span>
            </div>
            <Divider />
            <div className="userPage-social">
              <Instagram />
              <LinkedIn />
              <Facebook />
              <Twitter />
            </div>
          </div>
          <div className="userPage-products">
            <div className="userPage-navigation">
              <div
                className="userPage-navigation-1 userPage-navigate-btn-active"
                onClick={collectionClick}
              >
                <UserPageCollection />
                <span>Collection</span>
              </div>
              <div className="userPage-navigation-2" onClick={activityClick}>
                <UserPageActivity />
                <span>Activity</span>
              </div>
            </div>
            {page === "collection" ? (
              <div className="userPage-products-list">
                <UserNFTCard />
                <UserNFTCard />
                <UserNFTCard />
                <UserNFTCard />
                <UserNFTCard />
                <UserNFTCard />
              </div>
            ) : (
              <ProfileActivity />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserPage;
