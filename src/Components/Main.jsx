import React, { Component } from "react";
import Slider from "react-slick";
import Container from "./Container";
import image2 from "../assets/image2.png";
import banner from "../assets/banner.png";
import Button from "./reuseables/Button";
import Layer_1 from "../assets/Layer_1.png";
import Layer_2 from "../assets/Layer_2.png";
import surgicalitem from "../assets/surgicalitem.png";
import Simg from "../assets/Simg.png";
import Simg2 from "../assets/Simg2.png";

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
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
      {/* // footer */}
      <div className="bg-gradient-to-r from-[#327C9B] to-[#86DDD2] py-10">
        <Container>
          <div>
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 content-center items-center">
              <div className=" col-start-2 md:col-start-1">
                <img src={Simg2} alt="" />
              </div>
              <div className="col-start-1  row-start-1 row-span-2 md:col-start-2 md:row-span-1">
                <div className="text-center ">
                  <p className="text-[32px] lg:text-[61px] leading-[36.39px] lg:leading-[60.65px] text-[#292D32] font-bold">
                    Sets & Kits
                  </p>
                  <p className="text-[17px] lg:text-[20px] leading-[17px] lg:leading-[24.25px] text-white my-2">
                    Ends This Weekend
                  </p>
                  <p className="text-[20px] font-bold lg:text-[77px] leading-[24.26px] lg:leading-[80px] bg-[#292D32] text-[#7CE1EA] mx-3">
                    BIG SALE
                  </p>
                  <p className="text-[20px] lg:text-[50px] leading-[24.26px] lg:leading-[60.65px] bg-white text-[#292D32]">
                    Up to 50% off
                  </p>
                  <p className="text-[14px] lg:text-[20px] leading-[17px] lg:leading-[24.25px] text-white px-6 lg:px-0 mt-2">
                    Use code DENSOL on select sale style
                  </p>
                </div>
                <div className="flex mt-12 items-center justify-center">
                  <button className="flex bg-[#292D32] text-white rounded py-2 px-4">
                    SHOP NOW
                    <span className="ml-4">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.43 5.92999L20.5 12L14.43 18.07"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.50008 12H20.3301"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-start-2  row-start-2 md:col-start-3 md:row-start-1">
                <img src={Simg} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* slider */}
      <div className="bg-gradient-to-r from-[#307BC9]  to-[#3C59A5]">
        <Container>
          <div>
            <div>
              <div>
                <div></div>
                <h2>We Care About Our Customers</h2>
                <div>
                  <svg
                    width="96"
                    height="89"
                    viewBox="0 0 96 89"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="70.1298"
                      height="70.1298"
                      fill="white"
                      fill-opacity="0.2"
                    />
                    <rect
                      x="26.1814"
                      y="19.2671"
                      width="69.1298"
                      height="69.1298"
                      stroke="white"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                  </Slider>
                </div>
              </div>
              <div>
                <svg
                  width="70"
                  height="65"
                  viewBox="0 0 70 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="51.0988"
                    height="51.0988"
                    fill="white"
                    fill-opacity="0.15"
                  />
                  <rect
                    x="19.2122"
                    y="14.1743"
                    width="50.0988"
                    height="50.0988"
                    stroke="white"
                  />
                </svg>
              </div>
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
