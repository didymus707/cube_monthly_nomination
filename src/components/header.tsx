import React from "react";
import { Logo, Inbox, Plus } from "./custom/icons";

export const Header = () => {
  return (
    <div className="py-5 pl-5 pr-9 border border-red-600">
      <div className="flex items-center border border-orange-700">
        <Logo />
        <div className="ml-auto flex gap-6 py-2 border border-green-700">
          <Plus />
          <Inbox />
        </div>
      </div>
    </div>
  );
};
