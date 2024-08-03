import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";

const NavbarComponent = () => {
  return (
    <Navbar isBlurred={false} className="z-10">
      <NavbarBrand>
        <h1>EM</h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>Templates</NavbarItem>
        <NavbarItem>Contribute</NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
