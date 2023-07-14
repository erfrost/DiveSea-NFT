/* eslint-disable react/prop-types */
import SwiperLeftArrow from "../../assets/swiper-left-arrow";
import SwiperRightArrow from "../../assets/swiper-right-arrow";
import "./Swiper.css";

const Swiper = ({ findClass, scrollValue }) => {
  const scrollToLeft = () => {
    const scrollBlock = document.querySelector(findClass);
    const currentPosition = scrollBlock.scrollLeft;
    const newPosition = currentPosition - scrollValue;
    scrollBlock.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  const scrollToRight = () => {
    const scrollBlock = document.querySelector(findClass);
    const currentPosition = scrollBlock.scrollLeft;
    const newPosition = currentPosition + scrollValue;
    scrollBlock.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  return (
    <div className="box1-swiper">
      <div className="box1-swiper-btn" onClick={scrollToLeft}>
        <SwiperLeftArrow />
      </div>
      <div className="swiper-divider" />
      <div className="box1-swiper-btn" onClick={scrollToRight}>
        <SwiperRightArrow />
      </div>
    </div>
  );
};

export default Swiper;
