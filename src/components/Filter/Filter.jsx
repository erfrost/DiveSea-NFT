import "./Filter.css";
import category from "../../assets/category.svg";
import voice from "../../assets/voice.svg";
import dollar from "../../assets/dollar.svg";
import { useMediaQuery } from "react-responsive";

const Filter = () => {
  const width625 = useMediaQuery({ maxWidth: "625px" });

  return (
    <div className="Filter">
      {!width625 ? <div className="filter-btn">All</div> : null}
      <div className="filter-btn filter-btn-row">
        <img src={category} alt="" className="filter-icon" />
        <span className="filter-title">Category</span>
      </div>
      <div className="filter-btn filter-btn-row">
        <img src={voice} alt="" className="filter-icon" />
        <span className="filter-title">Collection</span>
      </div>
      <div className="filter-btn filter-btn-row">
        <img src={dollar} alt="" className="filter-icon" />
        <span className="filter-title">Price</span>
      </div>
    </div>
  );
};

export default Filter;
