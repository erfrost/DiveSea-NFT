import "./FromCreatorItem.css";
import image1 from "../../assets/from-creator-1.png";
import checkMark from "../../assets/checkMark-blue.svg";
import etherium from "../../assets/etherium-fromCreator.svg";
import follow from "../../assets/follow-icon.png";
import { Stack } from "@chakra-ui/react";

const FromCreatorItem = () => {
  return (
    <div className="FromCreatorItem">
      <img src={image1} alt="" className="fromCreator-image" />
      <Stack direction="row" alignItems="center" gap="5px">
        <span className="fromCreator-name">Perperzon</span>
        <img src={checkMark} alt="" />
      </Stack>
      <span className="fromCreator-nft-title">Sun-Glass</span>
      <div className="fromCreator-item-footer">
        <Stack direction="row" alignItems="center" gap="5px">
          <img src={etherium} alt="" />
          <span className="fromCreator-item-price">16.4</span>
        </Stack>
        <Stack direction="row" alignItems="center" gap="5px">
          <img src={follow} alt="" />
          <span className="fromCreator-follow-count">200</span>
        </Stack>
      </div>
    </div>
  );
};

export default FromCreatorItem;
