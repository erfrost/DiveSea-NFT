import { useMediaQuery } from "react-responsive";
import ExploreBtn from "../../../../components/ExploreBtn/ExploreBtn";
import "./box4.css";
import DiscoverNfts from "../../../../components/DiscoverNfts/DiscoverNfts";

const Box4 = () => {
  const width1250 = useMediaQuery({ maxWidth: "1250px" });
  const width475 = useMediaQuery({ maxWidth: "475px" });

  return (
    <div className="Box4">
      <span className="box4-title">Explore Marketplace</span>
      <DiscoverNfts itemsCount={width475 ? 4 : width1250 ? 6 : 8} />
      <ExploreBtn />
    </div>
  );
};

export default Box4;
