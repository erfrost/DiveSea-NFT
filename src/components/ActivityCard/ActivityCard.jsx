import "./ActivityCard.css";
import avatar from "../../assets/activityCard-avatar.png";
import checkMark from "../../assets/checkMark-blue.svg";
import etherium from "../../assets/etherium.svg";
import arrow from "../../assets/arrow-bottom.svg";
import { Divider, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ActivityCard = () => {
  return (
    <div className="ActivityCard">
      <div className="activityCard-top">
        <Stack direction="row" align="center">
          <img src={avatar} alt="" />
          <Stack
            direction="column"
            justify="center"
            alignItems="flex-start"
            gap={0}
          >
            <span className="activityCard-name-1">NeuVey</span>
            <Stack direction="row" alignItems="center" gap="5px">
              <Link to="/user" className="link activityCard-name-2">
                JenifferS
              </Link>
              <img src={checkMark} alt="" />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" alignItems="center" gap="5px" height="100%">
          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <span className="activityCard-sale-title">Sale</span>
            <Stack direction="row" alignItems="center" gap="5px">
              <img src={etherium} alt="" />
              <span className="activityCard-price">16,4</span>
            </Stack>
            <span className="activityCard-timestamp">6 Minutes ago</span>
          </Stack>
          <img src={arrow} alt="" />
        </Stack>
      </div>
      <Divider />
      <div className="acivityCard-bottom">
        <div className="activityCard-stats-item">
          <span className="activityCard-stats-item-title-1">USD Price</span>
          <span className="activityCard-stats-item-title-2">$19K</span>
        </div>
        <div className="activityCard-stats-item">
          <span className="activityCard-stats-item-title-1">Quantity</span>
          <span className="activityCard-stats-item-title-2">14.9K</span>
        </div>
        <div className="activityCard-stats-item">
          <span className="activityCard-stats-item-title-1">Floor price</span>
          <span className="activityCard-stats-item-title-2">
            <img src={etherium} alt="" />
            <span>16,4</span>
          </span>
        </div>
        <div className="activityCard-stats-item">
          <span className="activityCard-stats-item-title-1">Traded</span>
          <span className="activityCard-stats-item-title-2">
            <img src={etherium} alt="" />
            <span>26,4</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
