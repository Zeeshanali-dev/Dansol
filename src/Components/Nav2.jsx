import React, { useState } from "react";
import Container from "./Container";
import down_arrow from "../assets/down_arrow.png";
import { Link } from "react-router-dom";
import { links } from "./Constant";
import { useSelector } from "react-redux";

function Nav2() {
  const [type, settype] = useState(false);
  const [value, setvalue] = useState("");
  const { cartData } = useSelector((state) => state.counter);
  return (
    <>
      <div className="border-1  border-b border-t border-solid border-[#989DA5] md:block hidden">
        <Container>
          <div className="px-1 flex justify-between items-center  w-full">
            <div className="flex items-center cursor-pointer group/item relative py-4">
              <span className="cursor-pointer mr-4">&#9776;</span>
              <p>Shop By Categories</p>
              <span className="cursor-pointer ml-4 group-hover/item:rotate-180  transition-all duration-300">
                <img src={down_arrow} alt="" />
              </span>
              <div className="absolute bg-[#C3DAF5]  -bottom-[55px] -left-[3px] hidden group-hover/item:flex text-black  min-w-[522px]  z-10 ">
                {links.map((tab) => (
                  <div>
                    <div className="px-[47px] hover:bg-[#E1E7F0] py-4 flex items-center group/edit ">
                      {tab.name}
                      <span className="cursor-pointer ml-4 group-hover/edit:rotate-180 transition-all duration-300">
                        <img src={down_arrow} alt="" />
                      </span>
                      <div className="absolute top-[56px] bg-white  group-hover/edit:grid xl:gap-x-28 md:gap-x-10 xl:grid-cols-3 md:grid-cols-2 hidden left-0 xl:min-w-[1050px] md:min-w-[700px] px-[40px] py-[24px] shadow-lg border rounded-b-md rounded-r-md">
                        {tab.submenu &&
                          tab.sublinks.map((slink) => (
                            <div>
                              <div className="relative group/subitem">
                                <div className="flex items-center  hover:bg-[#2671BF] hover:text-white rounded-md group/subitem">
                                  <div className="min-w-[200px] py-4 px-4">
                                    {slink.Head}
                                    {slink.sublink.length == 0 && (
                                      <span className="ml-4 px-3 py-1 text-[13px] bg-[#FC3565] text-white">
                                        New
                                      </span>
                                    )}
                                  </div>
                                  {slink.sublink.length >= 1 && (
                                    <span className="cursor-pointer ml-4 -rotate-90 transition-all duration-300">
                                      <img src={down_arrow} alt="" />
                                    </span>
                                  )}

                                  <div
                                    className={`${
                                      slink.sublink.length >= 1
                                        ? "absolute z-50 min-w-[260px] bg-[#C3DAF5] p-4 -right-[257px]  top-0 hidden group-hover/subitem:block rounded-md"
                                        : ""
                                    }`}
                                  >
                                    {slink.sublink.map((mylink) => (
                                      <div>
                                        <div className="text-black ] hover:bg-[#2671BF] hover:text-white py-3 px-2 rounded-md">
                                          <Link to={mylink.link}>
                                            {mylink.name}
                                          </Link>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-[50%]">
              <div className="relative py-2 border-l border-r border-[#989DA5] ">
                <input
                  type="text"
                  className={`w-full outline-none placeholder:text-[#989DA5]  ${
                    type ? "pl-9" : "pl-3"
                  } pr-8 py-2 `}
                  placeholder="Search product or category"
                  value={value}
                  onChange={(e) => [setvalue(e.target.value), settype(true)]}
                />
                <span
                  className={`cursor-pointer absolute left-3 top-[22px] ${
                    !type ? "hidden" : "block"
                  }`}
                  onClick={() => [setvalue(""), settype(false)]}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12.4078L13 1"
                      stroke="#111416"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 12.4078L1 1"
                      stroke="#111416"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="absolute right-2 top-[15px] cursor-pointer">
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0772 19C15.0671 19 18.3015 15.6421 18.3015 11.5C18.3015 7.35786 15.0671 4 11.0772 4C7.08742 4 3.85303 7.35786 3.85303 11.5C3.85303 15.6421 7.08742 19 11.0772 19Z"
                      stroke="#989DA5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.5987 24.5C22.0941 22.9379 17.8193 18.5 17.8193 18.5"
                      stroke="#989DA5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="mr-9">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <Link to="/cart" className="flex ">
                <button className={`relative mr-9`}>
                  <span
                    className={`block absolute -top-[8px] -right-[6px] w-[19px]  h-[19px] text-white rounded-[50%] bg-[#2367AE] text-[12px]`}
                  >
                    {cartData.length}
                  </span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 8H21"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </Link>

              <button className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
                    stroke="#292D32"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Nav2;
