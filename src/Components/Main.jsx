import React, { useState } from "react";
import Container from "./Container";
import image2 from "../assets/image2.png";
import banner from "../assets/banner.png";
import Button from "./reuseables/Button";
import Layer_1 from "../assets/Layer_1.png";
import Layer_2 from "../assets/Layer_2.png";
import surgicalitem from "../assets/surgicalitem.png";
import featurep1 from "../assets/featurep1.png";
import featurep2 from "../assets/featurep2.png";
import { events, tabs } from "./Constant";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabData, setTabData] = useState(tabs[0]);

  const handletabclick = (index) => {
    setActiveTab(index);
    setTabData(tabs[index]);
  };
  return (
    <>
      <div>
        <div
          className={`bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 relative -z-10 w-full bg-[url('${banner}')] before:absolute before:left-0 before:right-0 before:w-full before:h-full`}
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

      <div className="my-20">
        <Container>
          <div>
            <div className="flex gap-16">
              <div className="w-1/3 hidden md:flex h-[455px] bg-[#DEE3E9] items-center rounded-lg px-6">
                <img
                  src={surgicalitem}
                  alt=""
                  className="w-[270px] h-[360px] mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="font-bold text-[40px] mb-4">
                  Some Words About
                  <span className="text-[#3C59A5]"> Densol</span>
                </h2>
                <p className="text-[22px] tracking-[3%] leading-[43px]">
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
                <div className="mt-10">
                  <Button classname="py-2 px-6">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gradient-to-r from-[#327C9B] to-[#86DDD2] py-10">
        <Container>
          <div>
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 content-center items-center">
              <div className=" col-start-2 md:col-start-1">
                <img src={featurep2} alt="" />
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
                <img src={featurep1} alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="my-20">
        <Container>
          <div>
            <div>
              <div className="flex justify-center items-center mb-16">
                <h2 className="text-[40px] font-bold">
                  DENSOL Dental Solutions
                </h2>
              </div>
              <div className="flex xl:gap-2 2xl:gap-6">
                <div className=" xl:w-1/3 2xl:w-1/4">
                  <div className="hidden md:block">
                    {tabs.map((tab, index) => (
                      <div key={index} onClick={() => handletabclick(index)}>
                        <h3
                          className={`cursor-pointer text-[28px] py-2 ${
                            activeTab == index
                              ? "text-[#3C59A5]"
                              : "text-[#6F7985]"
                          }`}
                        >
                          {tab.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                  <div className="block md:hidden">
                    {tabs.map((tab, index) => (
                      <div key={index} onClick={() => handletabclick(index)}>
                        <h3
                          className={`cursor-pointer text-[28px] py-2 ${
                            activeTab == index
                              ? "text-[#3C59A5]"
                              : "text-[#6F7985]"
                          }`}
                        >
                          {tab.name}
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="xl:w-2/3 2xl:w-3/4 py-6">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: "100%" }} // Start off-screen to the left
                    animate={{ opacity: 1, x: 0 }} // Move in from the left
                    exit={{ opacity: 0, x: "-100%" }} // Move out to the right
                    transition={{
                      duration: 0.9,
                      ease: "easeInOut",
                      delay: 0.2,
                    }}
                    className="grid grid-cols-3  gap-3 2xl:gap-6"
                  >
                    {tabData.product.slice(0, 6).map((product) => (
                      <div className="bg-[#E7ECF1] rounded-md p-4">
                        <div className="mb-3">
                          <img
                            src={product.img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-[18px] font-bold">
                          {product.pname}
                        </h4>
                      </div>
                    ))}
                  </motion.div>
                  {tabData.product.length > 6 && (
                    <div className="mt-16 flex items-center justify-end">
                      <Button classname="py-4 px-10">Explore All</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gradient-to-r from-[#307BC9] to-[#3C59A5] my-10">
        <Container>
          <div className="py-20">
            <div className="flex items-center justify-center">
              <h2 className="text-[40px] font-bold text-white">
                We Care About Our Customers
              </h2>
            </div>

            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h3>Very Excellent !!</h3>
                <p>
                  The instruments I purchased from Densol were great. Such
                  excellent quality for the price. They look great and are
                  comfortable to hold. Wahab gave great service in finding what
                  I needed, and his staff were very patient. The instruments
                  arrived quickly. I will definitely be back for more.
                </p>
                <p>Meredith Metin</p>
                <p>Dentist</p>
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
            <div className="">
              {events.map((event) => (
                <div
                  className="last:bottom-0 border-b border-[#B3BAC3] py-4 flex justify-between items-center pr-4 "
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
