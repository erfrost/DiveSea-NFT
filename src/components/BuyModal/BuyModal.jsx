/* eslint-disable react/prop-types */
import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Select,
  Stack,
} from "@chakra-ui/react";
import image from "../../assets/buyModal-image.png";
import etherium_big from "../../assets/etherium-fromCreator.svg";
import etherium_small from "../../assets/etherium.svg";
import buy from "../../assets/buy.svg";
import "./BuyModal.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

const BuyModal = ({ isOpen, onClose }) => {
  const width410 = useMediaQuery({ maxWidth: "410px" });
  const [currentImageETH, setCurrentImageETH] = useState(
    width410 ? etherium_small : etherium_big
  );

  useEffect(() => {
    if (width410) setCurrentImageETH(etherium_small);
    else setCurrentImageETH(etherium_big);
  }, [width410]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <div className="BuyModal">
            <Stack
              direction="column"
              align="flex-start"
              paddingLeft="15px"
              gap={0}
            >
              <span className="buyModal-title-1">History of Bid</span>
              <span className="buyModal-title-2">Oct 14, 2022</span>
            </Stack>
            <div className="buyModal-list">
              <div className="buyModal-list-item">
                <Stack direction="row" alignItems="center" gap="10px">
                  <img src={image} alt="" className="buyModal-avatar" />
                  <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    gap={0}
                  >
                    <span className="buyModal-item-title-1">Repo</span>
                    <span className="buyModal-item-title-2">
                      May 17, 2022 at 12:08
                    </span>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" gap="5px">
                  <img src={currentImageETH} alt="" />
                  <span className="buyModal-price">1.75</span>
                </Stack>
              </div>
              <div className="buyModal-list-item">
                <Stack direction="row" alignItems="center" gap="10px">
                  <img src={image} alt="" className="buyModal-avatar" />
                  <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    gap={0}
                  >
                    <span className="buyModal-item-title-1">Travo</span>
                    <span className="buyModal-item-title-2">
                      May 16, 2022 at 12:08
                    </span>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" gap="5px">
                  <img src={currentImageETH} alt="" />
                  <span className="buyModal-price">1.57</span>
                </Stack>
              </div>
              <div className="buyModal-list-item">
                <Stack direction="row" alignItems="center" gap="10px">
                  <img src={image} alt="" className="buyModal-avatar" />
                  <Stack
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    gap={0}
                  >
                    <span className="buyModal-item-title-1">Jennifer</span>
                    <span className="buyModal-item-title-2">
                      May 16, 2022 at 6:08
                    </span>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" gap="5px">
                  <img src={currentImageETH} alt="" />
                  <span className="buyModal-price">1.44</span>
                </Stack>
              </div>
            </div>
            <div className="buyModal-payment">
              <span className="buyModal-payment-title">Your Bid</span>
              <div className="buyModal-input-box">
                <Select className="buyModal-select">
                  <option value="BTC">BTC</option>
                  <option value="DOGE">DOGE</option>
                  <option value="ETH">ETH</option>
                </Select>
                <Input className="buyModal-input" type="number" />
              </div>
              <div className="buyModal-submit-btn" onClick={onClose}>
                <img src={buy} alt="" />
                <span className="buyModal-submit-btn-title">Submit</span>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BuyModal;
