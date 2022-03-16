import React from "react";
import Logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="w-full h-14 shadow-md bg-white p-5 flex flex-row justify-between items-center">
      <div>
        <img src={Logo} alt="Logo" className="h-16 w-16 shrink-0 animate-spin" />
      </div>
      <div className="flex items-center space-x-5">
        <img
          class="rounded-full"
          src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=27&h=27&q=60&crop=faces&bg=fff 1x, https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=2&auto=format&fit=crop&w=27&h=27&q=60&crop=faces&bg=fff 2x"
          alt="avatar"
        />
        <span className="text-base no-underline">Jhon Doe</span>
      </div>
    </nav>
  );
};

export default Nav;
