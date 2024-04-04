import React from "react";
import Container from "./Container";
import image2 from "../assets/image2.png";
import banner from "../assets/banner.png";

const Main = () => {
  return (
    <>
      <div>
        <div
          className={`bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  w-full before:bg-[url(${image2})]`}
        >
          <Container>
            <div className="py-20 flex justify-between w-full gap-10">
              <div className=" md:w-1/3 py-20 px-24 ">
                <h2 className="text-[93px] leading-[91px] text-white font-bold mb-4">
                  Densol Events
                </h2>
                <p className="text-white text-[16px] leading-[25px] text-sm mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the.
                </p>
                <button className="px-10 py-2 bg-white rounded-md">
                  View All
                </button>
              </div>
              <div className="md:w-2/3">
                <div className="flex justify-end">
                  <img src={banner} alt="" className="" />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Main;
