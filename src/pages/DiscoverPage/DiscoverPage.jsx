import { useMediaQuery } from "react-responsive";
import DiscoverNfts from "../../components/DiscoverNfts/DiscoverNfts";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./DiscoverPage.css";
import Load from "../../components/Load/Load";

const DiscoverPage = () => {
  const width725 = useMediaQuery({ maxWidth: "725px" });

  return (
    <div className="Discover">
      <Header />
      <div className="discover-content">
        <span className="discover-title">Discover NFTs</span>
        <DiscoverNfts itemsCount={width725 ? 8 : 12} />
        <Load />
      </div>
      <Footer />
    </div>
  );
};

export default DiscoverPage;
