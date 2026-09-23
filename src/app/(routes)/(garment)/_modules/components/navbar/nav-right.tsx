import React from "react";

import { Bell } from "lucide-react";

import Cart from "./nav-right/cart";
import UserMenu from "./nav-right/user-menu";

import { Button } from "@/components/ui/button";

export default function NavRight() {
  return (
    <div className="flex gap-1 items-center">
      {/* <Logout /> */}

      <Button className="relative"
      variant="outline"
      size={"icon"}
      >
        <Bell className="size-6"/>
      </Button>

      <UserMenu />

      <Cart />
    </div>
  );
}
