import { Stack } from "@chakra-ui/react";
import "./box1.css";
import image1 from "../../../../assets/box1-left.png";
import image2 from "../../../../assets/box1-right.png";
import square from "../../../../assets/box1-square.svg";
import arrow from "../../../../assets/box1-arrow.svg";
import rating from "../../../../assets/rating.svg";
import { useMediaQuery } from "react-responsive";
import Swiper from "../../../../components/Swiper/Swiper";

const Box1 = () => {
  const isMobileDevice = useMediaQuery({ maxWidth: "650px" });

  return (
    <div className="Box1">
      <div className="box1-titles">
        <div className="box1-topLine" />
        <span className="box1-title-1">Discover And Create NFTs</span>
        <span className="box1-title-2">
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a
          <span style={{ color: "#141416", fontWeight: 600 }}> $20 bonus.</span>
        </span>
        <div className="box1-buttonGroup">
          <div className="box1-btn-1">Explore more</div>
          <div className="box1-btn-2">Create NFT</div>
        </div>
        {isMobileDevice ? (
          <div className="box1-rating">
            <img src={rating} alt="" />
          </div>
        ) : (
          <div className="box1-stats">
            <div className="box1-stats-item">
              <span className="box1-stats-title-1">430K+</span>
              <span className="box1-stats-title-2">Art Works</span>
            </div>
            <div className="box1-stats-item">
              <span className="box1-stats-title-1">159K+</span>
              <span className="box1-stats-title-2">Creators</span>
            </div>
            <div className="box1-stats-item">
              <span className="box1-stats-title-1">87K+</span>
              <span className="box1-stats-title-2">Collections</span>
            </div>
          </div>
        )}
      </div>
      <div className="box1-images">
        <Stack direction="column" alignItems="center" gap="50px">
          <img src={image1} alt="" />
          <Swiper findClass=".box1-images" scrollValue={500} />
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          gap="0"
          style={{ position: "relative" }}
        >
          <Stack
            direction="row"
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            <img src={arrow} alt="" className="box1-arrow" />
            <img src={square} alt="" className="box1-square" />
          </Stack>
          <img src={image2} alt="" className="box1-image2" />
        </Stack>
      </div>
    </div>
  );
};

export default Box1;
