import { Divider, List, ListIcon, ListItem, Stack } from "@chakra-ui/react";
import "./box5.css";
import { CheckCircleIcon } from "@chakra-ui/icons";
import SwiperRightArrow from "../../../../assets/swiper-right-arrow";
import SellersItems from "../../../../components/SellersItem/SellersItems";
import RecentViewed from "../../../../components/RecentViewed/RecentViewed";
import dot from "../../../../assets/dot.svg";
import newBidAvatar from "../../../../assets/new-bid-avatar.svg";
import newBidItem from "../../../../assets/new-bid-item.png";

const Box5 = () => {
  return (
    <div className="Box5">
      <Divider />
      <div className="box5-content">
        <div className="box5-titles">
          <Stack
            direction="column"
            alignItems="flex-start"
            gap={0}
            width="100%"
          >
            <span className="box5-title-1">Just Unleash -</span>
            <span className="box5-title-2">Your Inner Collector</span>
          </Stack>
          <List spacing={5}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} className="list-icon" />
              Best Seller All Around World
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} className="list-icon" />
              $2M+ Transections Every Day
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} className="list-icon" />
              Secure Transactions
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} className="list-icon" />
              Exclusive Collections From Sellers
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} className="list-icon" />
              Easy Buying and Selling
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} className="list-icon" />
              Join Our Community
            </ListItem>
          </List>
          <div className="box5-btn">
            <span className="box5-btn-title">Explore More</span>
            <SwiperRightArrow />
          </div>
        </div>
        <div className="box5-images-container">
          <div className="box5-images">
            <RecentViewed posAbsolute="true" />
            <div className="box5-images-main">
              <span className="box5-images-main-title">Best Sellers</span>
              <SellersItems />
            </div>
            <div className="new-bid">
              <div className="new-bid-info">
                <img src={dot} alt="" />
                <img src={newBidAvatar} alt="" />
                <Stack
                  direction="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  gap={0}
                >
                  <span className="new-bid-title-1">
                    <span style={{ color: "#949494" }}>New bid</span> Rotation
                  </span>
                  <span className="new-bid-title-2">0.002 ETH</span>
                  <span className="new-bid-timestamp">
                    6 Oct 2022, 11:44 PM
                  </span>
                </Stack>
              </div>
              <img src={newBidItem} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box5;
