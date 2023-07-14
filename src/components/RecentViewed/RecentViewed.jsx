/* eslint-disable react/prop-types */
import "./RecentViewed.css";
import menu from "../../assets/horizontal-menu-icon.svg";
import { Stack } from "@chakra-ui/react";
import image1 from "../../assets/half-block-1.svg";
import image2 from "../../assets/half-block-2.svg";
import etherium from "../../assets/etherium.svg";

const RecentViewed = ({ posAbsolute }) => {
  return (
    <div
      className={posAbsolute ? "half-block half-block-absolute" : "half-block"}
    >
      <div className="half-block-top">
        <span className="half-block-title">Recent Viewed</span>
        <img src={menu} alt="" style={{ cursor: "pointer" }} />
      </div>
      <div className="half-block-item">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap="10px"
        >
          <img src={image1} alt="" />
          <Stack direction="column" justifyContent="space-between">
            <span className="half-block-title-1">Alex Ca.</span>
            <span className="half-block-title-2">Alexy</span>
          </Stack>
        </Stack>
        <Stack direction="column" justifyContent="space-between">
          <Stack direction="row" justifyContent="space-between">
            <img src={etherium} alt="" />
            <span className="curs">8,456</span>
          </Stack>
          <span className="procents-plus">+23,00%</span>
        </Stack>
      </div>
      <div className="half-block-item">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap="10px"
        >
          <img src={image2} alt="" />
          <Stack direction="column" justifyContent="space-between">
            <span className="half-block-title-1">Julia S.</span>
            <span className="half-block-title-2">JuliaS</span>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Stack direction="row" justifyContent="space-between">
            <img src={etherium} alt="" />
            <span className="curs">5,327</span>
          </Stack>
          <span className="procents-minus">-32,01%</span>
        </Stack>
      </div>
    </div>
  );
};

export default RecentViewed;
