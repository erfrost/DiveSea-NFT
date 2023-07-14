import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { ChakraProvider } from "@chakra-ui/react";
import DiscoverPage from "./pages/DiscoverPage/DiscoverPage";
import ItemPage from "./pages/ItemPage/ItemPage";
import UserPage from "./pages/UserPage/UserPage";
import SellPage from "./pages/SellPage/SellPage";
import CreatorsPage from "./pages/CreatorsPage/CreatorsPage";
import StatsPage from "./pages/StatsPage/StatsPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/creators" element={<CreatorsPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
