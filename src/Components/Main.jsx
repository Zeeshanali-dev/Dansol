import React from "react";
import Container from "./Container";
import image2 from "../assets/image2.png";
import banner from "../assets/banner.png";
import Button from "./reuseables/Button";
import Layer_1 from "../assets/Layer_1.png";
import Layer_2 from "../assets/Layer_2.png";
import surgicalitem from "../assets/surgicalitem.png";

const Main = () => {
  return (
    <>
      <div>
        <div
          className={`bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700  w-full before:bg-[url(${image2})]`}
        >
          <Container>
            <div className="py-20 flex justify-between flex-col lg:flex-row w-full gap-10">
              <div className=" lg:w-1/3 pr-32 lg:py-20 xl:px-24 flex flex-col order-2 lg:order-1">
                <h2 className="text-[93px] leading-[91px] text-white font-bold mb-4">
                  Densol Events
                </h2>
                <p className="text-white text-[16px] leading-[25px] text-sm mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the.
                </p>
                <button className="px-10 py-2 bg-white rounded-md w-[200px]">
                  View All
                </button>
              </div>
              <div className="lg:w-2/3 flex w-full justify-center xl:justify-end order-1 lg:order-2">
                <div className="">
                  <img
                    src={banner}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="mt-6 md:-mt-10 flex items-center">
        <Container>
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              <div className="bg-[#DBE1EA] rounded-lg py-2 pl-4 pr-16 min-h-[84px] md:min-h-[150px] flex items-center">
                <div className="w-[100px] h-[120px] flex items-center mr-2">
                  <img
                    src={banner}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-2xl font-bold">Request Catalogue </p>
              </div>
              <div className="bg-[#3D8BDC] rounded-lg py-2 pl-4 pr-16 min-h-[84px] md:min-h-[150px] flex items-center">
                <div className="w-[100px] h-[120px] flex items-center mr-2">
                  <img
                    src={banner}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-2xl font-bold text-white">
                  Download Densol App{" "}
                </p>
              </div>
              <div className="bg-[#DBE1EA] rounded-lg py-2 pl-4 pr-16 min-h-[84px] md:min-h-[150px] flex items-center">
                <div className="w-[100px] h-[120px] flex items-center mr-2">
                  <img
                    src={banner}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-2xl font-bold">Register with Densol </p>
              </div>
              <div className="bg-[#55BE92] rounded-lg py-2 pl-4 pr-16 min-h-[84px] md:min-h-[150px] flex items-center">
                <div className="w-[100px] h-[120px] flex items-center mr-2">
                  <img
                    src={banner}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-2xl font-bold text-white">Expo Promotion</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div>
            <div className="flex">
              <div className="w-1/3 hidden md:flex h-[455px] bg-[#DEE3E9] items-center rounded-lg px-6">
                <img
                  src={surgicalitem}
                  alt=""
                  className="w-[270px] h-[360px] mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h2>
                  Some Words About <span>Densol</span>
                </h2>
                <p>
                  A company that entails the experience of more than six decades
                  in manufacturing and selling Surgical instruments, Dental
                  instruments worldwide. Densol is a family business where we
                  value finest quality at the best prices. We have been
                  manufacturing all these instruments which allow us to beat the
                  prices and produce the best quality to meet the customers’
                  expectations. Our Australian office is located in Melbourne
                  and this is from where we are looking after the Valuable
                  customers from Australia and New Zealand.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="my-16">
        <Container>
          <div>
            <div className="mb-12">
              <h2 className="text-center text-[40px] font-bold">
                Densol Events
              </h2>
              <p className=" text-center text-[20px]">
                Dicover the next events and stay updarted on all our news.
              </p>
            </div>
            <div>
              {events.map((event) => (
                <div
                  className=" border-b border-[#B3BAC3] py-4 flex justify-between items-center pr-4 "
                  key={event.id}
                >
                  <div className="flex justify-between items-center">
                    <div className="mr-6 rounded w-[96px] h-[84px]">
                      <img
                        src={event.img}
                        alt=""
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div>
                      <div className="text-[12px] sm:text-[20px] ">
                        {event.date}
                      </div>
                      <div className="text-[#3C59A5] text-[20px] sm:text-[28px] font-bold">
                        {event.name}
                      </div>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <svg
                      width="14"
                      height="24"
                      viewBox="0 0 14 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 22.0568L12 12.0284L2 2"
                        stroke="#2367AE"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ))}
              <div className="flex justify-center mt-12">
                <Button classname="py-4 px-16 min-w-[200px]">ViewAll</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="flex flex-col md:flex-row gap-8 my-10">
            <div className="bg-[#F0F3F7] rounded-[10px] md:w-1/2 flex justify-between flex-col items-center px-5 md:px-10 py-12 pb-[105px] min-h-[330px]">
              <div className="w-[90px] h-[90px] rounded-[50%] bg-gradient-to-br from-[#307BC9] to-[#3C59A5] flex justify-center items-center p-3">
                <img src={Layer_1} alt="" className="mx-auto" />
              </div>
              <p className="font-bold text-[26px] md:text-[38px]  text-[#292D32] text-center ">
                Distribution Enquiry
              </p>
            </div>
            <div className="bg-[#F0F3F7] rounded-[10px] md:w-1/2 flex justify-between flex-col items-center px-5 md:px-10 py-12 min-h-[330px]">
              <div className="w-[90px] h-[90px] rounded-[50%] bg-gradient-to-br from-[#307BC9] to-[#3C59A5] flex justify-center items-center p-4">
                <img src={Layer_2} alt="" className="mx-auto" />
              </div>
              <p className="font-bold text-[26px] md:text-[38px] text-[#292D32] text-center ">
                Sterilizing & Cleaning Instructions
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Main;

const events = [
  {
    id: 1,
    img: banner,
    date: "06/02/24 00:00 - 08/02/24 00:00",
    name: "Adex23 Melbourne",
  },
  {
    id: 2,
    img: banner,
    date: "06/02/24 00:00 - 08/02/24 00:00",
    name: "Adex23 Melbourne",
  },
  {
    id: 3,
    img: banner,
    date: "06/02/24 00:00 - 08/02/24 00:00",
    name: "Adex23 al",
  },
  {
    id: 4,
    img: banner,
    date: "06/02/24 00:00 - 08/02/24 00:00",
    name: "Adex23 Melbourne",
  },
];
