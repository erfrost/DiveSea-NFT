import Footer from "../../components/Footer/Footer";
import GoBack from "../../components/GoBack/GoBack";
import Header from "../../components/Header/Header";
import "./ItemPage.css";
import image_v from "../../assets/itemPage-image-vertical.svg";
import image_h from "../../assets/itemPage-image-horizontal.svg";
import avatar1 from "../../assets/itemPage-avatar-1.png";
import avatar2 from "../../assets/itemPage-avatar-2.png";
import etheriumBig from "../../assets/etherium-table.svg";
import etheriumSmall from "../../assets/etherium.svg";
import buy from "../../assets/buy.svg";
import { Stack, useDisclosure } from "@chakra-ui/react";
import FromCreatorItem from "../../components/FromCreatorItem/FromCreatorItem";
import { useMediaQuery } from "react-responsive";
import BuyModal from "../../components/BuyModal/BuyModal";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ItemPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const width375 = useMediaQuery({ maxWidth: "375px" });
  const width775 = useMediaQuery({ maxWidth: "775px" });
  const width850 = useMediaQuery({ maxWidth: "850px" });

  useEffect(() => {
    const page = document.querySelector(".ItemPage");
    if (isOpen) {
      page.style.filter = "blur(5px)";
    } else {
      page.style.filter = "none";
    }
  }, [isOpen]);

  return (
    <div className="ItemPage">
      <Header />
      <div className="ItemPage-content">
        <GoBack title="Product Detail" />
        <div className="itemPage-info">
          {width775 ? (
            <img src={image_h} alt="" className="itemPage-image" />
          ) : (
            <img src={image_v} alt="" className="itemPage-image" />
          )}
          <div className="itemPage-description">
            <Stack direction="column" alignItems="flex-start" gap={0}>
              <span className="itemPage-title-1">Project Sun-Glass</span>
              <span className="itemPage-title-2">
                A collection of 10,000 utility-enabled PFPs that feature a
                richly diverse and unique pool of rarity-powered traits.
              </span>
            </Stack>
            <div className="itemPage-autors">
              <div className="itemPage-autors-item">
                <img src={avatar1} alt="" className="itemPage-autor-avatar" />
                <Stack direction="column" justifyContent="center" gap={0}>
                  <span className="autor-title-1">Created by</span>
                  <Link to="/user" className="link autor-title-2">
                    Perperzon
                  </Link>
                </Stack>
              </div>
              <div className="itemPage-autors-item">
                <img src={avatar2} alt="" className="itemPage-autor-avatar" />
                <Stack direction="column" justifyContent="center" gap={0}>
                  <span className="autor-title-1">Owned by</span>
                  <Link to="/user" className="link autor-title-2">
                    Videz
                  </Link>
                </Stack>
              </div>
            </div>
            <div className="itmePage-price">
              <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent="space-between"
                height="100%"
                gap={0}
              >
                <span className="itemPage-price-title">Current Bid</span>
                <Stack direction="row" alignItems="center" gap="5px">
                  {(width850 && !width775) || width375 ? (
                    <img src={etheriumSmall} alt="" />
                  ) : (
                    <img src={etheriumBig} alt="" />
                  )}

                  <span className="itemPage-price">1.75</span>
                </Stack>
              </Stack>
              <Stack direction="column" alignItems="flex-end">
                <span className="itemPage-timer-title-1">End in</span>
                <span className="itemPage-timer-title-2">
                  Jun 17, 2023 at 05:08
                </span>
              </Stack>
            </div>
            <div className="itemPage-buyBtn" onClick={onOpen}>
              <img src={buy} alt="" />
              <span className="itemPage-buyBtn-title">Place Bid</span>
            </div>
          </div>
        </div>
        <div className="from-creator-container">
          <div className="from-creator-title">From Creator</div>
          <div className="from-creator-list">
            <FromCreatorItem />
            <FromCreatorItem />
            <FromCreatorItem />
            <FromCreatorItem />
            <FromCreatorItem />
          </div>
        </div>
      </div>
      <Footer />
      <BuyModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default ItemPage;
