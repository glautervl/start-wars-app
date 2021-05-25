import React from "react";
import DrawerMenu from "./DrawerMenu";
import { BrowserRouter } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter>
      <DrawerMenu />
    </BrowserRouter>
  );
}
