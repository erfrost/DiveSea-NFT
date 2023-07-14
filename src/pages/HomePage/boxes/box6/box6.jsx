import { Stack } from "@chakra-ui/react";
import "./box6.css";
import image from "../../../../assets/box6-image.png";

const Box6 = () => {
  return (
    <div className="Box6">
      <div className="box6-content">
        <div className="box6-titles">
          <Stack direction="column" alignItems="flex-start" gap={0}>
            <span className="box6-title-1">Create and Sell NFTs</span>
            <span className="box6-title-2">World’s Largest NFT Place</span>
          </Stack>
          <div className="box6-buttonGroup">
            <div className="box6-btn-1">Explore More</div>
            <div className="box6-btn-2">Sell Artwork</div>
          </div>
        </div>
        <img src={image} alt="" className="box6-image" />
      </div>
    </div>
  );
};

export default Box6;
