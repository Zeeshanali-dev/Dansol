import React from 'react'
import Container from './Container'
import Input from './reuseables/Input'
import Button from './reuseables/Button'
import capctha from '../assets/capctha.png'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <>
       <section className='my-28'>
              <Container>
                  <div className='flex items-start flex-col lg:flex-row gap-3 mb-20 md:pb-20'>
                    <div className='rounded-xl  w-full xl:w-2/3  mb-10 md:mb-0'>
                          <form action="">
                          <div>
                        <div className='px-6 py-8 md:px-28 md:py-10 lg:px-5 lg:py-8 bg-[#F0F3F7] rounded-[10px] border border-[#C8CDD5] '>
                        <div>
                        <div><h2>Billing Address</h2></div>
                        <div className='block xl:grid grid-cols-2 gap-7 mb-12'>
                              <Input
                                  label="Registered Business Name*"
                                  type="text"
                                  placeholder='Enter your business name'
                                  bdclassName=''
                                  required='required'
                              />
                              <Input
                                  label="Trending Name*"
                                  type="text"
                                  placeholder='Your trending name'
                                  bdclassName=''
                                  required='required'
                              />
                               <Input
                                  label="Business Email Address*"
                                  type="text"
                                  placeholder='Enter your email'
                                  bdclassName=''
                                  required='required'
                              />
                               <Input
                                  label="Name of Proprietori(s) *"
                                  type="text"
                                  placeholder='Your proprietary name'
                                  bdclassName=''
                                  required='required'
                              />
                              
                        </div>
                    <div>
                                      <Input
                                  label="Suite/Unit No "
                                  type="text"
                                  placeholder='Enter Unit no'
                                  bdclassName='mb-5'
                                  required='required'
                              />
                        </div>
                        <div className='block xl:grid grid-cols-2 gap-7 mb-12'>
                              <Input
                                  label="Registered Business Name*"
                                  type="text"
                                  placeholder='Enter your business name'
                                  bdclassName=''
                                  required='required'
                              />
                              <Input
                                  label="Trending Name*"
                                  type="text"
                                  placeholder='Your trending name'
                                  bdclassName=''
                                  required='required'
                              />
                               <Input
                                  label="Business Email Address*"
                                  type="text"
                                  placeholder='Enter your email'
                                  bdclassName=''
                                  required='required'
                              />
                               <Input
                                  label="Name of Proprietori(s) *"
                                  type="text"
                                  placeholder='Your proprietary name'
                                  bdclassName=''
                                  required='required'
                              />
                              
                          </div>
                                      <div>
                                          <label htmlFor="comments" className="text-[15px] leading-[18px]  mb-2 font-normal" >Comments</label>
                                          <textarea name="" id="comments" className='rounded-md px-4 py-4 mt-2 w-full outline-none h-28' placeholder='Comments..'></textarea>
                                      </div>
                                  </div>
                                  <div>
                                      
                        </div>
                          
                          <div>
                              <div className='max-w-full sm:max-w-[392px] flex justify-between items-center rounded-[4px] border border-[#C8C8C8] bg-white px-5 py-5 my-6'>
                                  <div className='flex items-center'>
                                  <input type="checkbox" name="" id="" className='mr-2 md:mr-4 w-[20px] h-[20px]'/>
                                  <span className='text-[16px] md:text-[19px]'>I’m not a robot</span>
                                  </div>
                                  <div>
                                      <div>
                                          <img src={capctha} alt="" className='mx-auto mb-1'/>
                                      </div> 
                                      <p className='text-[12px] md:text-[14px] text-[#575757]'>reCAPTCHA</p>
                                      <p className='text-[10px] text-[#575757]'>Privacy - Terms</p>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                    </form>
                    </div>
                 <div className="rounded-xl bg-[#C6DFED] w-full xl:w-1/3">
                
                <div className="bg-[#2367AE] rounded-t-xl  px-4 py-4 text-white">
                  <h2 className="font-bold text-[22px]">Your order</h2>
                </div>
                <div className="px-4 py-5">
                  <div className="flex font-bold justify-between text-[15px]  mb-5">
                    <h2 className="pr-3">Item Summary Total:</h2>
                    <span>totalPrice$</span>
                  </div>
                  <div className="flex font-bold justify-between text-[15px] mb-5">
                    <h2 className="pr-3">
                      Shipping: Free shipping (5-6 Business Days)
                    </h2>
                    <span>shippingFee$</span>
                  </div>
                  <div className="flex font-bold justify-between text-[15px] mb-5">
                    <h2 className="pr-3">included GST @ 10%</h2>
                    <span>Gst$</span>
                  </div>
                  <div className="flex font-bold justify-between text-[15px] text-[#2367AE] mb-6">
                    <h2 className="pr-3">Grand Total</h2>
                    <span>grandTotal$</span>
                  </div>
                 
                 </div>
                <div className="flex font-bold justify-end text-[22px] bg-[#2367AE] text-white mb-6 px-4 py-3">
                    <h4 className="pr-3">Total</h4>  
                          </div>
                <div >
                              
                </div>
                <div className='px-4 py-4'>
                <Link to="/checkout"> <Button classname="w-full py-3">place Order</Button></Link>
                </div>
              </div>
                  </div>
              </Container>
          </section>
      </>

  )
}

export default Checkout