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
import Filter from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import arrows from "../../assets/table-filter-arrows.svg";
import avatar from "../../assets/table-1.svg";
import etherium from "../../assets/etherium-fromCreator.svg";
import "./StatsPage.css";
import { useMediaQuery } from "react-responsive";
import Load from "../../components/Load/Load";

const StatsPage = () => {
  const width800 = useMediaQuery({ maxWidth: "800px" });
  const lines = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="StatsPage">
      <Header />
      <div className="statsPage-content">
        <span className="statsPage-title">Leaderboard NFTs</span>
        <Filter />
        <TableContainer width="100%">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={width800 ? "flex-start" : "center"}
                    gap="5px"
                  >
                    <span className="statsPage-thead">Collection</span>
                    <img
                      src={arrows}
                      alt=""
                      className="statsPage-filter-arrows"
                    />
                  </Stack>
                </Th>
                <Th>
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent={width800 ? "flex-end" : "center"}
                    gap="5px"
                  >
                    <span className="statsPage-thead">Volume</span>
                    <img
                      src={arrows}
                      alt=""
                      className="statsPage-filter-arrows"
                    />
                  </Stack>
                </Th>
                {!width800 ? (
                  <>
                    <Th>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        gap="5px"
                      >
                        <span className="statsPage-thead">24 H</span>
                        <img
                          src={arrows}
                          alt=""
                          className="statsPage-filter-arrows"
                        />
                      </Stack>
                    </Th>
                    <Th>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        gap="5px"
                      >
                        <span className="statsPage-thead">Floor Price</span>
                        <img
                          src={arrows}
                          alt=""
                          className="statsPage-filter-arrows"
                        />
                      </Stack>
                    </Th>
                    <Th>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        gap="5px"
                      >
                        <span className="statsPage-thead">Owner</span>
                        <img
                          src={arrows}
                          alt=""
                          className="statsPage-filter-arrows"
                        />
                      </Stack>
                    </Th>
                    <Th>
                      <span className="statsPage-thead">Items</span>
                    </Th>
                  </>
                ) : null}
              </Tr>
            </Thead>
            <Tbody>
              {lines.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent={width800 ? "flex-start" : "center"}
                      gap="10px"
                    >
                      <img src={avatar} alt="" className="statsPage-avatar" />
                      <Stack
                        direction="column"
                        alignItems="flex-start"
                        justifyContent="space-between"
                      >
                        <span className="statsPage-name-1">Alex Ca.</span>
                        <span className="statsPage-name-2">By Alex</span>
                      </Stack>
                    </Stack>
                  </Td>
                  <Td>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent={width800 ? "flex-end" : "center"}
                      gap="5px"
                    >
                      <img src={etherium} alt="" />
                      <span className="statsPage-bold">8,456</span>
                    </Stack>
                  </Td>
                  {!width800 ? (
                    <>
                      <Td textAlign="center">
                        <span className="sellPage-procents-plus">+ 27.78%</span>
                      </Td>
                      <Td>
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="center"
                          gap="5px"
                        >
                          <img src={etherium} alt="" />
                          <span className="statsPage-bold">3,5</span>
                        </Stack>
                      </Td>
                      <Td textAlign="center">
                        <span className="statsPage-medium">2,2K</span>
                      </Td>
                      <Td textAlign="center">
                        <span className="statsPage-medium">500</span>
                      </Td>
                    </>
                  ) : null}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Load />
      </div>
      <Footer />
    </div>
  );
};

export default StatsPage;
