import { ReactElement } from "react";

function Header(): ReactElement {
  return (
    <header className=" sticky w-full h-12 bg-green-500 left-0 top-0 flex justify-center items-center z-50">
      <p className="text-white text-xl font-bold">My To Do List App</p>
    </header>
  );
}

export default Header;
