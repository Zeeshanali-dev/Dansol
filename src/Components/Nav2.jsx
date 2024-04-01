import React from "react";
import Container from "./Container";
import down_arrow from "../assets/down_arrow.png";
import heart from "../assets/heart.png";
import shopping_cart from "../assets/shopping_cart.png";
import user from "../assets/user.png";
import search_normal from "../assets/search_normal.png";
import { Link } from "react-router-dom";

function Nav2() {
  return (
    <>
      <div className="border-1 border-t border-b border-solid border-gray-600 ">
        <Container>
          <div className="px-1 flex justify-between  w-full">
            <div className="flex items-center py-4 min-w-[270px]">
              <span className="cursor-pointer mr-4">&#9776;</span>
              <p>Shop By Categories</p>
              <span className="cursor-pointer ml-4 hover:rotate-180 transition-all duration-300">
                <img src={down_arrow} alt="" />
              </span>
            </div>
            <div className="flex items-center lg:border-r lg:border-l border-gray-600 relative w-auto lg:w-[50%]">
              <input
                type="text"
                name=""
                id=""
                placeholder="write something here..."
                className="outline-none border-none pl-6 pr-8 relative w-full"
              />

              <div className="absolute right-4">
                <img src={search_normal} alt="" />
              </div>
            </div>
            <div className="py-4 hidden lg:flex items-center ml-[9rem] ">
              <span className="mr-10">
                <img src={heart} alt="" />
              </span>

              <span className="mr-10">
                <Link to="/cart">
                  <img src={shopping_cart} alt="" />
                </Link>
              </span>

              <span className="">
                <img src={user} alt="" />
              </span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Nav2;
