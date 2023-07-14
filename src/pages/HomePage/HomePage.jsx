import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./HomePage.css";
import Box1 from "./boxes/box1/box1";
import Box2 from "./boxes/box2/box2";
import Box3 from "./boxes/box3/box3";
import Box4 from "./boxes/box4/box4";
import Box5 from "./boxes/box5/box5";
import Box6 from "./boxes/box6/box6";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Header />
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <Box5 />
      <Box6 />
      <Footer />
    </div>
  );
};

export default HomePage;
