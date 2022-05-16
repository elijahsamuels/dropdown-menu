import React, { useState } from "react";

function NavItem(props) {
  const returnHref = (linkString) => {
    return typeof linkString === "undefined" ? "#" : `//${linkString}`;
  };

  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href={returnHref(props.href)}
        className="icon-button"
        onClick={() => setOpen(!open)}
      >
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

export default NavItem;
