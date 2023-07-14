import { Stack } from "@chakra-ui/react";
import "./SellersItems.css";
import image1 from "../../assets/sellers-1.svg";
import image2 from "../../assets/sellers-2.svg";
import image3 from "../../assets/sellers-3.svg";
import image4 from "../../assets/sellers-4.svg";
import { useState } from "react";

const SellersItems = () => {
  const [list, setList] = useState([
    {
      id: 1,
      src: image1,
      name: "Alex Ca.",
      tg: "@Alexy",
      follow: false,
    },
    {
      id: 2,
      src: image2,
      name: "Julia Sa.",
      tg: "@Julias",
      follow: false,
    },
    {
      id: 3,
      src: image3,
      name: "Julia Sa.",
      tg: "@Julias",
      follow: false,
    },
    {
      id: 4,
      src: image2,
      name: "Trevor Pu.",
      tg: "@TrevorP",
      follow: false,
    },
    {
      id: 5,
      src: image1,
      name: "Trevor Pu.",
      tg: "@TrevorP",
      follow: false,
    },
    {
      id: 6,
      src: image4,
      name: "Trevor Pu.",
      tg: "@TrevorP",
      follow: false,
    },
  ]);

  return (
    <div className="SellersItems-list">
      {list.map((item, index) => (
        <div className="SellersItem" key={index}>
          <Stack direction="row" alignItems="center" gap="10px">
            <img src={item.src} alt="" />
            <Stack
              direction="column"
              justifyContent="space-between"
              alignItems="flex-start"
              minWidth="100%"
            >
              <span className="sellersItem-title-1">{item.name}</span>
              <span className="sellersItem-title-2">{item.tg}</span>
            </Stack>
          </Stack>
          {item.follow ? (
            <div
              className="sellersItem-btn-unfollow"
              onClick={() =>
                setList((prevState) => {
                  return prevState.map((el) => {
                    if (el.id === item.id) {
                      return { ...el, follow: !el.follow };
                    } else return el;
                  });
                })
              }
            >
              Unfollow
            </div>
          ) : (
            <div
              className="sellersItem-btn-follow"
              onClick={() =>
                setList((prevState) => {
                  return prevState.map((el) => {
                    if (el.id === item.id) {
                      return { ...el, follow: !el.follow };
                    } else return el;
                  });
                })
              }
            >
              Follow
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SellersItems;
