import "./ProfileActivity.css";
import cart from "../../assets/cart-icon.svg";
import chains from "../../assets/chains.svg";
import arrow from "../../assets/arrow-bottom.svg";
import ActivityCard from "../ActivityCard/ActivityCard";

const ProfileActivity = () => {
  return (
    <div className="ProfileActivity">
      <div className="ProfileActivity-filter">
        <div className="ProfileActivity-filter-item">
          <img src={cart} alt="" />
          <span>Sales</span>
          <img src={arrow} alt="" />
        </div>
        <div className="ProfileActivity-filter-item">
          <img src={chains} alt="" />
          <span>All Chains</span>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="profileActivity-list">
        <ActivityCard />
        <ActivityCard />
      </div>
    </div>
  );
};

export default ProfileActivity;
