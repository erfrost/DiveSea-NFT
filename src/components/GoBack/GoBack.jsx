/* eslint-disable react/prop-types */
import "./GoBack.css";
import arrowBtn from "../../assets/goBack.svg";
import { useNavigate } from "react-router-dom";

const GoBack = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="GoBack">
      <img
        src={arrowBtn}
        alt=""
        style={{ cursor: "pointer" }}
        onClick={() => navigate(-1)}
      />
      <span className="GoBack-title">{title}</span>
    </div>
  );
};

export default GoBack;
