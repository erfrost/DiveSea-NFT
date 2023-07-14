import "./box2.css";
import WeeklyTopItem from "../../../../components/WeeklyTopItem/WeeklyTopItem";
import Swiper from "../../../../components/Swiper/Swiper";
import { useMediaQuery } from "react-responsive";

const Box2 = () => {
  const width1920 = useMediaQuery({ maxWidth: "1920px" });
  const width1200 = useMediaQuery({ maxWidth: "1200px" });
  const width730 = useMediaQuery({ maxWidth: "730px" });
  const width400 = useMediaQuery({ maxWidth: "400px" });
  let scrollValue;

  if (width1920) scrollValue = 600;
  if (width1200) scrollValue = 400;
  if (width730) scrollValue = 275;
  if (width400) scrollValue = 175;

  return (
    <div className="Box2">
      <div className="box2-title">Weekly - Top NFT</div>
      <div className="box2-items">
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
        <WeeklyTopItem />
      </div>
      <Swiper findClass=".box2-items" scrollValue={scrollValue} />
    </div>
  );
};

export default Box2;
