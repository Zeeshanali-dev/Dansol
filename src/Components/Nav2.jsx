import React from "react";
import Container from "./Container";
import down_arrow from "../assets/down_arrow.png";
import { Link } from "react-router-dom";
import { links } from "./Constant";

function Nav2() {
  return (
    <>
      <div className="border-1  border-b border-solid border-[#989DA5] md:block hidden">
        <Container>
          <div className="px-1 flex justify-between  w-full">
            <div className="flex items-center py-4 cursor-pointer group/item relative">
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
                      <div className="absolute top-[56px] bg-white  group-hover/edit:grid gap-x-28  grid-cols-3 hidden left-0 max-w-[1218px] min-w-[1000px] px-[40px] py-[24px] shadow-lg border-r border-b rounded-b-md rounded-r-md">
                        {tab.submenu &&
                          tab.sublinks.map((slink) => (
                            <div>
                              <div className="relative group/subitem">
                                <div className="flex items-center  hover:bg-[#2671BF] hover:text-white rounded-md group/subitem">
                                  <div className="min-w-[200px] py-4 px-6">
                                    {slink.Head}
                                  </div>
                                  {slink.sublink.length >= 1 && (
                                    <span className="cursor-pointer ml-4 -rotate-90 transition-all duration-300">
                                      <img src={down_arrow} alt="" />
                                    </span>
                                  )}

                                  <div
                                    className={`${
                                      slink.sublink.length >= 1
                                        ? "absolute z-50 min-w-[260px] bg-[#C3DAF5] p-4 -right-[148px]  top-0 hidden group-hover/subitem:block rounded-md"
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
            <div>Serach</div>
            <div>Icon</div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Nav2;
