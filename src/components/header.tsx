import React from "react";
import { Logo, Inbox, Plus } from "./custom/icons";

export const Header = () => {
  return (
    <div className="py-5 pl-5 pr-9 bg-black">
      <div className="flex items-center">
        <Logo />
        <div className="ml-auto flex gap-6 py-2">
          <Plus />
          <Inbox />
        </div>
      </div>
    </div>
  );
};
