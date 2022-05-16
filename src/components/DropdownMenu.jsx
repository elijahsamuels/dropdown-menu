import React from "react";
import DropdownItem from "./../components/DropdownItem";
import { ReactComponent as Email } from "./../icons/email.svg";
import { ReactComponent as Headphones } from "./../icons/headphones.svg";
import { ReactComponent as Settings } from "./../icons/settings.svg";

function DropdownMenu() {
  return (
    <div className="dropdown">
      <DropdownItem
        link={`//www.settings.com`}
        leftIcon={<Settings />}
        className="menu-item"
      >
          Settings
      </DropdownItem>
      <DropdownItem
        link={`//www.gmail.com`}
        leftIcon={<Email />}
        rightIcon={<Headphones />}
        className="menu-item"
      >
        My Mail
      </DropdownItem>
    </div>
  );
}
export default DropdownMenu;
