import Container from "./Container";
import React from "react";
import footLogo from "../assets/footLogo.svg";
import footfb from "../assets/footFb.svg";
import footlinkedin from "../assets/footlinkedin.svg";
import foottwitter from "../assets/foottwitter.svg";
import insta from "../assets/insta.svg";

function Footer() {
  return (
    <>
      <footer className="pb-[30px] footer">
        <div className=" border-b border-white ">
          <Container>
            <div className="flex flex-col xl:flex-row items-center pb-8 xl:pb-0">
              <div className="text-white w-full xl:w-1/2  text-[16px] sm:text-2xl text-center xl:text-start	md:px-[78px] pt-[53px] pb-[30px]">
                <p className="">
                  Stay up to date on techniques, product information, continuing
                  education, seminars & events, plus special promotions.
                </p>
              </div>
              <div className="w-[80%] xl:w-1/2  mx-auto ">
                <div className="relative max-w-[570px] px-[23px] pt-[21px]">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full h-[60px] md:h-[68px]  rounded-lg  pl-4 pr-[5.5rem] sm:pr-44 outline-none border-none "
                    placeholder="Search..."
                  />
                  <span className=" justify-center items-center absolute right-0 w-20 sm:w-[150px] py-[18px] md:w-[168px] md:py-[22px]  bg-gradient-to-r from-cyan-500 to-blue-500 rounded-r-lg text-center align-middle">
                    Submit
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div>
          <Container>
            <div className="pt-12  flex flex-col sm:flex-wrap lg:flex-nowrap sm:flex-row text-white px-[35px] ">
              <div className="w-[100%] sm:w-[50%] lg:w-[35%]  pr-24 mb-6 pl-[35px] pt-[14px]">
                <img
                  src={footLogo}
                  alt=""
                  className="mb-9 pt-5 cursor-pointer"
                />
                <p className="leading-6">
                  A company that entails the experience of more than six decades
                  in manufacturing and selling Surgical instruments, Dental
                  instruments worldwide
                </p>

                <ul className="flex mt-16">
                  {footSocial.map((icon) => (
                    <li
                      className="mr-8 hover:-translate-y-2 transition-all duration-300"
                      key={icon.id}
                    >
                      <a href={icon.href}>
                        <img src={icon.Image} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-[100%] sm:w-[50%] lg:w-[23%]  mb-6">
                <h2 className="text-[22px] mb-10 pt-6">Services</h2>
                <ul>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    Pay Bills Online
                  </li>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    Open A Credit Account
                  </li>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    Become A Distributor
                  </li>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    Medical Rep
                  </li>
                  <li className="cursor-pointer hover:text-blue-400">
                    Distributer Inquiry
                  </li>
                </ul>
              </div>
              <div className="w-[100%] sm:w-[50%] lg:w-[23%] mb-6">
                <h2 className="text-[22px] mb-10 pt-6">Information</h2>
                <ul>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    Sterilizing & Cleaning
                  </li>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    Instructions
                  </li>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    Credit Terms
                  </li>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    Warranty policy
                  </li>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    Manufacturing Process
                  </li>
                  <li className="cursor-pointer hover:text-blue-400">
                    Privacy Policy
                  </li>
                </ul>
              </div>
              <div className="w-[100%] sm:w-[50%] md:w-[50%] lg:w-[23%] mb-6">
                <h2 className="text-[22px] mb-10 pt-6">Contact Us</h2>
                <ul>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    6 Moonah Ave Brookfield VIC 3338
                  </li>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    1300 920 097
                  </li>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    sales@ar-instrumed.com.au
                  </li>
                  <li className="mb-6 cursor-pointer hover:text-blue-400">
                    9:00am-4:00pm Weekdays
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-white flex flex-col lg:flex-row items-center justify-center px-2 sm:px-0 pb-12 lg:pb-0 pt-2 ">
              <div className="mb-4">
                <span>©Copyright Densol 2024</span>
              </div>
              <div className=" w-[58%] border-b border-white hidden lg:block mx-6"></div>
              <span className="block mb-4">
                Designed & Developed By Tecmyer
              </span>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}

export default Footer;

const footSocial = [
  {
    id: 1,
    Image: footfb,
    href: "#",
  },
  {
    id: 2,
    Image: foottwitter,
    href: "#",
  },
  {
    id: 3,
    Image: footlinkedin,
    href: "#",
  },
  {
    id: 4,
    Image: insta,
    href: "#",
  },
];
