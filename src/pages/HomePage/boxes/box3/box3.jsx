import {
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import "./box3.css";
import image1 from "../../../../assets/table-1.svg";
import image2 from "../../../../assets/table-2.svg";
import etherium from "../../../../assets/etherium-table.svg";
import { useMediaQuery } from "react-responsive";
import ExploreBtn from "../../../../components/ExploreBtn/ExploreBtn";

const Box3 = () => {
  const width1000 = useMediaQuery({ maxWidth: "1000px" });

  return (
    <div className="Box3">
      <span className="box3-title">Top Collection</span>
      {width1000 ? (
        <TableContainer width="100%">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Collection</Th>
                <Th>Volume</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <div className="table-1">
                    <img src={image1} alt="" className="table-avatar" />
                    <div className="table-1-titles">
                      <span className="table-1-title-1">Alex Ca.</span>
                      <span className="table-1-title-2">By Alex</span>
                    </div>
                  </div>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">8,456</span>
                  </Stack>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <div className="table-1">
                    <img src={image2} alt="" className="table-avatar" />
                    <div className="table-1-titles">
                      <span className="table-1-title-1">Alex Ca.</span>
                      <span className="table-1-title-2">By Alex</span>
                    </div>
                  </div>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">8,456</span>
                  </Stack>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <div className="table-1">
                    <img src={image1} alt="" className="table-avatar" />
                    <div className="table-1-titles">
                      <span className="table-1-title-1">Alex Ca.</span>
                      <span className="table-1-title-2">By Alex</span>
                    </div>
                  </div>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">8,456</span>
                  </Stack>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <div className="table-1">
                    <img src={image2} alt="" className="table-avatar" />
                    <div className="table-1-titles">
                      <span className="table-1-title-1">Alex Ca.</span>
                      <span className="table-1-title-2">By Alex</span>
                    </div>
                  </div>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">8,456</span>
                  </Stack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <TableContainer width="100%">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Collection</Th>
                <Th>Volume</Th>
                <Th>24h %</Th>
                <Th>Floor Price</Th>
                <Th>Owners</Th>
                <Th>Items</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <div className="table-1">
                    <img src={image1} alt="" />
                    <div className="table-1-titles">
                      <span className="table-1-title-1">Alex Ca.</span>
                      <span className="table-1-title-2">By Alex</span>
                    </div>
                  </div>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">8,456</span>
                  </Stack>
                </Td>
                <Td>
                  <span className="table-procents-plus">+ 27,78%</span>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">3,5</span>
                  </Stack>
                </Td>
                <Td>
                  <span className="table-default">22K</span>
                </Td>
                <Td>
                  <span className="table-default">500</span>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <div className="table-1">
                    <img src={image2} alt="" />
                    <div className="table-1-titles">
                      <span className="table-1-title-1">Alex Ca.</span>
                      <span className="table-1-title-2">By Alex</span>
                    </div>
                  </div>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">8,456</span>
                  </Stack>
                </Td>
                <Td>
                  <span className="table-procents-minus">- 15,24%</span>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">3,5</span>
                  </Stack>
                </Td>
                <Td>
                  <span className="table-default">22K</span>
                </Td>
                <Td>
                  <span className="table-default">500</span>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <div className="table-1">
                    <img src={image1} alt="" />
                    <div className="table-1-titles">
                      <span className="table-1-title-1">Alex Ca.</span>
                      <span className="table-1-title-2">By Alex</span>
                    </div>
                  </div>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">8,456</span>
                  </Stack>
                </Td>
                <Td>
                  <span className="table-procents-plus">+ 27,78%</span>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">3,5</span>
                  </Stack>
                </Td>
                <Td>
                  <span className="table-default">22K</span>
                </Td>
                <Td>
                  <span className="table-default">500</span>
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <div className="table-1">
                    <img src={image2} alt="" />
                    <div className="table-1-titles">
                      <span className="table-1-title-1">Alex Ca.</span>
                      <span className="table-1-title-2">By Alex</span>
                    </div>
                  </div>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">8,456</span>
                  </Stack>
                </Td>
                <Td>
                  <span className="table-procents-minus">- 15,24%</span>
                </Td>
                <Td>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="10px"
                  >
                    <img src={etherium} alt="" />
                    <span className="table-price">3,5</span>
                  </Stack>
                </Td>
                <Td>
                  <span className="table-default">22K</span>
                </Td>
                <Td>
                  <span className="table-default">500</span>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
      <ExploreBtn />
    </div>
  );
};

export default Box3;
