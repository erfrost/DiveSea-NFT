/* eslint-disable react/prop-types */
import "./CreatorsCard.css";
import checkMark from "../../assets/checkMark-blue.svg";
import etherium from "../../assets/etherium.svg";
import image1 from "../../assets/creatorsCard-more-images-1.png";
import image2 from "../../assets/creatorsCard-more-images-2.png";
import image3 from "../../assets/creatorsCard-more-images-3.png";
import { Stack } from "@chakra-ui/react";

const CreatorsCard = ({ bgUrl, avatarUrl }) => {
  return (
    <div className="CreatorsCard">
      <div
        className="creatorsCard-bg"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <img src={avatarUrl} alt="" className="creatorsCard-avatar" />
      </div>
      <div className="creatorsCard-content">
        <div className="creatorsCard-title-1">
          <span>Alex Ca.</span>
          <img src={checkMark} alt="" className="creatorsCard-checkMark" />
        </div>
        <div className="cratorsCard-stats">
          <Stack direction="column" alignItems="center" gap={0}>
            <span className="creatorsCard-stat-title-1">5.8K</span>
            <span className="creatorsCard-stat-title-2">Items</span>
          </Stack>
          <Stack direction="column" alignItems="center" gap={0}>
            <span className="creatorsCard-stat-title-1">17.9K</span>
            <span className="creatorsCard-stat-title-2">Items</span>
          </Stack>
          <Stack direction="column" alignItems="center" gap={0} width="70px">
            <Stack direction="row" alignItems="center" gap="5px">
              <img src={etherium} alt="" />
              <span className="creatorsCard-stat-title-1">17.5</span>
            </Stack>
            <span className="creatorsCard-stat-title-2">Floor Price</span>
          </Stack>
          <Stack direction="column" alignItems="center" gap={0}>
            <Stack direction="row" alignItems="center" gap="5px">
              <img src={etherium} alt="" />
              <span className="creatorsCard-stat-title-1">22.4</span>
            </Stack>
            <span className="creatorsCard-stat-title-2">Traded</span>
          </Stack>
        </div>
        <div className="creatorsCard-images-list">
          <div
            className="creatorsCard-image-item"
            style={{ backgroundImage: `url(${image1})` }}
          />
          <div
            className="creatorsCard-image-item"
            style={{ backgroundImage: `url(${image2})` }}
          />
          <div
            className="creatorsCard-image-item"
            style={{
              backgroundImage: `url(${image3})`,
            }}
          >
            +55
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsCard;
