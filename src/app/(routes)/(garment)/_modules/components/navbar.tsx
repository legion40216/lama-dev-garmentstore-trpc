import React from "react";

import NavLeft from "./navbar/nav-left";
import NavMain from "./navbar/nav-main";
import NavRight from "./navbar/nav-right";

export default function Navbar() {
  return (
      <div className="flex items-center justify-between py-4">
        <NavLeft />

        <NavMain />

        <NavRight />
      </div>
  );
}