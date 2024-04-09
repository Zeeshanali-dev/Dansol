import React from "react";

function Dropdown() {
  return (
    <>
      <div className="absolute bg-gray-500 px-4 py-2">
        <ul>
          <li className="cursor-pointer px-3 py-2 hover:bg-blue-500 rounded-md">
            Market
          </li>
          <li className="cursor-pointer px-3 py-2 hover:bg-blue-500 rounded-md">
            About
          </li>
          <li className="cursor-pointer px-3 py-2 hover:bg-blue-500 rounded-md">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
