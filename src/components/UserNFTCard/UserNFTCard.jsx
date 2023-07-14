import "./userNFTCard.css";
import weekly1 from "../../assets/weekly-1.png";
import etherium from "../../assets/etherium.svg";
import { Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserNFTCard = () => {
  return (
    <div className="weekly-item userNFT-item">
      <Link to="/item">
        <img src={weekly1} alt="" className="weekly-image userNFT-image" />
      </Link>
      <span className="weekly-timer userNFT-timer">07h 09m 12s</span>
      <div className="weekly-titles userNFT-titles">
        <Link to="/item">
          <span className="weekly-title-1 userNFT-title-1">Sun-Glass</span>
        </Link>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          width="100%"
          gap={0}
        >
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <span className="weekly-price-title userNFT-price-title">
              Current bid
            </span>
            <Stack direction="row" gap="5px">
              <img src={etherium} alt="" />
              <span className="weeklt-price userNFT-price">1.75</span>
            </Stack>
          </Stack>
          <div className="weekly-btn userNFT-btn">Place bid</div>
        </Stack>
      </div>
    </div>
  );
};

export default UserNFTCard;
