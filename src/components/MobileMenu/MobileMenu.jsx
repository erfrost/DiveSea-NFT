import { Input, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import "./MobileMenu.css";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <Menu>
      <MenuButton as={HamburgerIcon} />
      <MenuList>
        <Input type="text" placeholder="Search" className="mobile-menu-input" />
        <MenuItem>Connect Wallet</MenuItem>
        <Link className="link" to="/discover">
          <MenuItem>Discover</MenuItem>
        </Link>
        <Link className="link" to="/creators">
          <MenuItem>Creators</MenuItem>
        </Link>
        <Link className="link" to="/sell">
          <MenuItem>Sell</MenuItem>
        </Link>
        <Link className="link" to="/stats">
          <MenuItem>Stats</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default MobileMenu;
