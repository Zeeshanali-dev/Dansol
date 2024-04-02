import React from "react";
import Logo_main from "../assets/Logo_main.png";
import phone_logo from "../assets/phone_logo.png";
import Container from "./Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { links } from "./Constant";

function Nav() {
  const { cartData } = useSelector((state) => state.counter);
  return (
    <>
      <div className="border-1  border-b border-solid border-[#989DA5] ">
        <Container>
          <nav className="py-7 px-1">
            <div className="flex  items-center">
              <div className=" w-[150px]  ">
                <Link to="/">
                  <img src={Logo_main} alt="" className="w-full" />
                </Link>
              </div>

              <div>
                <div className="hidden sm:flex justify-between items-center">
                  <div className="w-4 mr-2 ">
                    <img src={phone_logo} alt="" />
                  </div>
                  <p className="text-[13px]">Call +1300 297 689</p>
                </div>
                <div className="flex sm:hidden justify-between items-center">
                  <div>⭕</div>
                </div>
              </div>
            </div>
          </nav>
        </Container>
        <div className="block sm:hidden absolute bg-white left-0 top-0 h-full w-full z-40 px-6 py-5">
          <div className="flex justify-between">
            <div>
              <span>a</span>
              <span>b</span>
              <span>c</span>
            </div>
            <div>❌</div>
          </div>
          <ul>
            {links.map((link) => (
              <li>{link.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
