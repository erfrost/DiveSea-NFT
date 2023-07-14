/* eslint-disable react/prop-types */
import Filter from "../Filter/Filter";
import WeeklyTopItem from "../WeeklyTopItem/WeeklyTopItem";
import "./DiscoverNfts.css";

const DiscoverNfts = ({ itemsCount }) => {
  const weeklyTopItems = [];
  for (let i = 0; i < itemsCount; i++) {
    weeklyTopItems.push(<WeeklyTopItem key={i} />);
  }

  return (
    <>
      <Filter />
      <div className="box4-items">{weeklyTopItems.map((item) => item)}</div>
    </>
  );
};

export default DiscoverNfts;
