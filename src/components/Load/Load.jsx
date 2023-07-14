import { Spinner } from "@chakra-ui/react";
import "./Load.css";
import { useState } from "react";

const Load = () => {
  const [load, setLoad] = useState(false);

  if (load) {
    return <Spinner size="xl" borderWidth="3px" />;
  } else {
    return (
      <div className="load-btn" onClick={() => setLoad(true)}>
        More
      </div>
    );
  }
};

export default Load;
