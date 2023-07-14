import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Switch,
  Textarea,
} from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./SellPage.css";
import { EditIcon } from "@chakra-ui/icons";
import upload from "../../assets/sell-upload.svg";

const SellPage = () => {
  return (
    <div className="SellPage">
      <Header />
      <div className="SellPage-content">
        <span className="sellPage-title">Create Your NFT</span>
        <div className="sellPage-forms-container">
          <div className="sellPage-forms">
            <FormControl>
              <FormLabel className="form-label">Name</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="ArtWork Name"
                  className="sell-input"
                />
                <InputRightElement>
                  <EditIcon boxShadow={5} color="#9596A6" />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel className="form-label">Description</FormLabel>
              <InputGroup>
                <Textarea
                  placeholder="Enter Your Description"
                  rows={10}
                  className="sell-input sell-area"
                ></Textarea>
                <InputRightElement>
                  <EditIcon boxShadow={5} color="#9596A6" />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <div className="sell-selects-box">
              <FormControl>
                <FormLabel className="form-label">Royalty</FormLabel>
                <Select className="sell-select">
                  <option>10%</option>
                  <option>20%</option>
                  <option>30%</option>
                  <option>40%</option>
                  <option>50%</option>
                  <option>60%</option>
                  <option>70%</option>
                  <option>80%</option>
                  <option>90%</option>
                  <option>100%</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel className="form-label">Size</FormLabel>
                <Input
                  type="text"
                  placeholder="Ex - 100 x 100"
                  className="sell-input"
                />
              </FormControl>
            </div>
            <FormControl>
              <FormLabel className="form-label">Tags</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Beautiful Castle, Monkeys ETC"
                  className="sell-input"
                />
                <InputRightElement>
                  <EditIcon boxShadow={5} color="#9596A6" />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <div className="sell-selects-box" style={{ width: "100%" }}>
              <FormControl width="200%">
                <FormLabel className="form-label">Price</FormLabel>
                <InputGroup id="input-group-1">
                  <Select className="sell-select half-select">
                    <option>ETH</option>
                    <option>BTC</option>
                    <option>DOGE</option>
                  </Select>
                  <Input
                    type="number"
                    placeholder="0.00007 ETC"
                    className="sell-input half-input"
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel className="form-label">In Stock</FormLabel>
                <Input
                  type="number"
                  placeholder="1000"
                  className="sell-input"
                />
              </FormControl>
            </div>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormLabel htmlFor="email-alerts" mb="0">
                <div className="label-switch">
                  <span className="label-switch-title-1">Put On Sale</span>
                  <span className="label-switch-title-2">
                    People Will Bids On Your NFT Project
                  </span>
                </div>
              </FormLabel>
              <Switch id="email-alerts" />
            </FormControl>
            <FormControl
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <FormLabel htmlFor="email-alerts" mb="0">
                <div className="label-switch">
                  <span className="label-switch-title-1">Direct Sale</span>
                  <span className="label-switch-title-2">
                    No Bids - Only Direct Salling
                  </span>
                </div>
              </FormLabel>
              <Switch id="email-alerts" />
            </FormControl>
            <div className="sellPage-create-btn">Create</div>
          </div>
          <div className="sellPage-file">
            <div className="sellPage-file-area">
              <img src={upload} alt="" />
              <span className="sellPage-file-area-title">
                PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.
              </span>
            </div>
            <div className="sellPage-file-btn">Upload</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellPage;
