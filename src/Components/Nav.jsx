import React from "react";
import Logo_main from "../assets/Logo_main.png";
import phone_logo from "../assets/phone_logo.png";
import Container from "./Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Nav() {
  const { cartData } = useSelector((state) => state.counter);
  return (
    <>
      <div>
        <Container>
          <nav className="py-7 px-1">
            <div className="flex justify-between items-center">
              <div className=" w-[150px] md-w-[100%]">
                <Link to="/">
                  <img src={Logo_main} alt="" />
                </Link>
              </div>

              <div className="flex justify-between items-center">
                <Link to="/cart">
                  <p className="mr-6">Cart ({cartData.length})</p>
                </Link>
                <div className="w-4 mr-2">
                  <img src={phone_logo} alt="" />
                </div>
                <p className="text-[13px]">Call +1300 297 689</p>
              </div>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
}

export default Nav;
