import React from "react";
import { Logo, Inbox, Plus, Logo3Sc } from "./custom/icons";

type HeaderProps = {
  noOfNominations: number;
};

export const Header = (props: HeaderProps) => {
  const { noOfNominations = 3 } = props;
  return (
    <div className="py-5 pl-5 pr-9 bg-black">
      <div className="flex items-center">
        <Logo classNames={["sm:hidden"]} />
        <Logo3Sc classNames={["hidden sm:block"]} />
        <div className="ml-auto flex gap-6 py-2 items-center">
          <div className="sm:hidden flex gap-6">
            <Plus />
            <Inbox />
          </div>
          <p className="font-anon text-white text-base font-bold underline tracking-[0.32px] hidden sm:block">
            Your Nominations ({noOfNominations})
          </p>
        </div>
      </div>
    </div>
  );
};
