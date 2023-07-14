import CreatorsCard from "../../components/CreatorsCard/CreatorsCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import bg1 from "../../assets/creatorsCard-image-1.png";
import bg2 from "../../assets/creatorsCard-image-2.png";
import bg3 from "../../assets/creatorsCard-image-3.png";
import avatar1 from "../../assets/creatorsCard-avatar-1.svg";
import avatar2 from "../../assets/creatorsCard-avatar-2.svg";
import avatar3 from "../../assets/creatorsCard-avatar-3.svg";
import "./CreatorsPage.css";
import Load from "../../components/Load/Load";

const CreatorsPage = () => {
  return (
    <div className="CreatorsPage">
      <Header />
      <div className="CreatorsPage-content">
        <span className="creatorsPage-title">Meet Our Great Creators</span>
        <div className="creatorsPage-list">
          <CreatorsCard bgUrl={bg1} avatarUrl={avatar1} />
          <CreatorsCard bgUrl={bg2} avatarUrl={avatar2} />
          <CreatorsCard bgUrl={bg3} avatarUrl={avatar3} />
          <CreatorsCard bgUrl={bg2} avatarUrl={avatar2} />
          <CreatorsCard bgUrl={bg3} avatarUrl={avatar3} />
          <CreatorsCard bgUrl={bg1} avatarUrl={avatar1} />
        </div>
        <Load />
      </div>
      <Footer />
    </div>
  );
};

export default CreatorsPage;
