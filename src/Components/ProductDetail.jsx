import React, { useEffect, useId, useState } from "react";
import DetProImg from "../assets/DetProImg.png";
import fb from "../assets/fb.svg";
import linkedin from "../assets/linkedin.svg";
import pintest from "../assets/pintest.svg";
import print from "../assets/print.svg";
import twitter from "../assets/twitter.svg";
import shopping_cartbtn from "../assets/shopping_cartbtn.svg";
import Heartlogo from "./Heartlogo";
import Container from "./Container";

function ProductDetail() {
  const [counter, setcounter] = useState(1);
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(false);
  const [color, setcolor] = useState("none");
  const id = useId();

  const increment = () => {
    setcounter(counter + 1);
  };
  const decrement = () => {
    if (counter <= 1) {
      setcounter(1);
    } else {
      setcounter(counter - 1);
    }
  };
  const changeColor = () => {
    setcolor("red");
    setTimeout(() => {
      setcolor("none");
    }, 400);
  };

  return (
    <Container>
      <div className="relative">
        <div className="mt-2 text-[15px]">
          
          Home / <span>{PDdetail.map((pname) => pname.name)}</span>
        </div>
        <div className="">
        {PDdetail.map((item) => (
          <div className="flex flex-col lg:flex-row my-6" key={item.id}>
            <div className="w-full h-[450px] lg:h-[620px] lg:w-1/2 bg-slate-200 px-5 py-16">
              <img src={item.Image} alt="" className="mx-auto h-[100%]" />
            </div>
            <div
              className="w-full lg:w-1/2 lg:px-[67px]  lg:top-0 lg:mt-0 mt-10"
              key={item.id}
            >
              <div className="mb-7">
                <h2 className="text-2xl md:text-[32px] -tracking-[0.5px] ">{item.name}</h2>
                <div className="mt-4 mb-3">
                  <span className="line-through text-[24px] text-slate-400 mr-7">
                    ${item.dicPrice}
                  </span>
                  <span className="text-[32px] text-[#2367AE] font-bold">
                    ${item.Price}
                  </span>
                </div>
                <p className="text-[15px] font-medium">{item.proDetail}</p>
              </div>
              <div className="flex justify-between gap-2 bg-white">
                <div className="w-[33%] sm:w-[20%] lg:w-[43%]  flex border botder-[#B9B9C4] rounded-md justify-between lg:justify-normal">
                  <div className="w-full flex justify-between">
                  <span
                    className={`block border bg-[#F0F2F6]font-bold py-[12px] px-3 cursor-pointer ${
                      counter == 1
                        ? "opacity-50 pointer-events-none select-none"
                        : "opacity-100"
                    }`}
                    onClick={decrement}
                  >
                    -
                  </span>
                  <span className="text-center flex justify-center items-center px-6">
                    {counter}
                  </span>
                  <span
                    className={`block border bg-[#F0F2F6]  font-bold py-[12px]  px-3 cursor-pointer `}
                    onClick={increment}
                  >
                    +
                  </span>
                 </div>
                </div>
                <button className="border bg-[#2367AE] text-white rounded-md font-bold py-[12px]  w-full  flex justify-center items-center">
                  <img src={shopping_cartbtn} alt="" className="mr-6" />
                  Add to Cart
                </button>
                <div
                  className={`border bg-[#F0F2F6] rounded-md font-bold py-2 px-2 cursor-pointer hidden lg:flex w-[20%] justify-center items-center`}
                  onClick={changeColor}
                >
                  <Heartlogo color={color} />
                </div>
              </div>
              <div className="flex flex-row py-3 gap-2">
                <div
                  className={`border my-3 bg-[#F0F2F6] rounded-md font-bold py-3 px-2 cursor-pointer flex w-[20%] sm:w-[10%] justify-center items-center lg:hidden`}
                  onClick={changeColor}
                >
                  <Heartlogo color={color} />
                </div>
                <button className="mt-3  bg-[#F0F2F6] rounded-md font-bold py-3 w-full">
                  {" "}
                  Distribution Enquiry
                </button>
              </div>
              <div className="mt-3 ">
                <div className="text-[15px] mb-1">
                  SKU: <span className="font-bold">{item.sku}</span>
                </div>
                <div className="text-[14px] mb-1">
                  Categories:
                  {item.categories.map((itemcate) => (
                    <span className="font-bold text-[14px]" key={id}>
                      {itemcate},&nbsp;
                    </span>
                  ))}
                </div>
                {/* <div className='flex items-center my-4'>
                                <span className='mr-2 font-bold'>Share</span>
                                <ul className='flex'>
                                    {item.socialmedia.map((mediaicon) => (
                                        <li className='ml-3' key={mediaicon.id}><a href={mediaicon.href}><img src={mediaicon.Image} alt="" /></a></li>
                                    ))}
                              
                                </ul>
                            </div> */}
              </div>
              <div className="border-b border-black ">
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setOpen(!open)}
                  >
                    <h2 className="text-[22px] font-bold py-5">Discription </h2>
                    <div className="mr-3">{open ? "➖" : "➕"}</div>
                  </div>
                  <div
                    className={`  overflow-hidden ${
                      open
                        ? "h-28 transition-all ease-in duration-700"
                        : "h-0 transition-all ease-in duration-700"
                    }`}
                  >
                    <ul className="">
                      {item.description.map((detail) => (
                        <li className="ml-2 text-[14px]" key={id}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-b border-black ">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => setOpen1(!open1)}
                >
                  <h2 className="text-[22px] font-bold py-4">Shopping Info</h2>
                  <div className="mr-3">{open1 ? "➖" : "➕"}</div>
                </div>
                <div
                  className={`  overflow-hidden ${
                    open1
                      ? "h-32 transition-all ease-in duration-700"
                      : "h-0 transition-all ease-in duration-700"
                  }`}
                >
                  <ul className="mb-5">
                    {item.description.map((detail) => (
                      <li className="ml-2 text-[14px]">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </Container>
  );
}

export default ProductDetail;

const PDdetail = [
  {
    id: 1,
    Image: DetProImg,
    name: "Bone Morselizer Crusher Titanium TC",
    dicPrice: "350.00",
    Price: "185.00",
    proDetail:
      "Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
    sku: "106-27",
    categories: ["Dental", "Surgical", "Instruments", "Bone Crushers"],
    description: [
      "-Bone Morselizer Crusher Titanium TC used to grind blocks of bone into smaller particle sizes needed for grafting.",
      "-Made of German Stainless Steel.",
      "-5 Years Full Replacement Warranty.",
      "-All of our Instruments are TGA Approved",
    ],
    socialmedia: [
      {
        id: 10,
        Image: fb,
        href: "#",
      },
      {
        id: 2,
        Image: linkedin,
        href: "#",
      },
      {
        id: 3,
        Image: twitter,
        href: "#",
      },
      {
        id: 4,
        Image: pintest,
        href: "#",
      },
      {
        id: 5,
        Image: print,
        href: "#",
      },
    ],
  },
];
