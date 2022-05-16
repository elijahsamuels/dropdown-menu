import "./App.css";

import { ReactComponent as Apps } from "./icons/apps.svg";
import { ReactComponent as Email } from "./icons/email.svg";
import { ReactComponent as Home } from "./icons/home.svg";
import { ReactComponent as Search } from "./icons/search.svg";
import { ReactComponent as User } from "./icons/user.svg";

import React from "react";
import DropdownMenu from "./components/DropdownMenu";
import NavItem from "./components/NavItem";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <div>
      <Navbar>
        <NavItem icon={<Home />} href={"www.home.com"} />
        <NavItem icon={<Search />} />
        <NavItem icon={<Apps />} href={"www.apps.com"} />
        <NavItem icon={<Email />} href={"www.gmail.com"} />
        <NavItem icon={<User />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>

			<Main />

    </div>
  );
}

export default App;
