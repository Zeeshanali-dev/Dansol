import React from 'react'
import Container from './Container'
import Input from './reuseables/Input'
import Button from './reuseables/Button'
import capctha from '../assets/capctha.png'

function OpenAccount() {
  return (
      <>
          <section className='my-28'>
              <Container>
                  <div className='md:relative md:before:absolute md:before:bg-[#307BC9]  md:before:-right-[12px] md:before:top-3 md:before:rounded-[10px] md:before:-z-10 md:before:w-full md:before:h-full'>
                      <div className='px-6 py-8 md:px-28 md:py-10 lg:px-36 lg:py-16 bg-[#F0F3F7] rounded-[10px] '>
                          <div className='text-center mb-6'>
                              <h3 className=' text-[28px] sm:text-[40px] leading-[48px] font-bold'>Register With Densol</h3>
                              
                          </div>
                          <div className=''>
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
                              <div><h2>Billing Address</h2></div>
                              <div>
                              <Input
                                  label="Suite/Unit No "
                                  type="text"
                                  placeholder='Enter Unit no'
                                  bdclassName=''
                                  required='required'
                              />
                              </div>
                              <div>
                              <Input
                                  label="Street *"
                                  type="text"
                                  placeholder='Your street'
                                  bdclassName=''
                                  required='required'
                                  />
                                   <Input
                                  label="Postal Code* "
                                  type="text"
                                  placeholder='Your code'
                                  bdclassName=''
                                  required='required'
                                  />
                                   <Input
                                  label="City*"
                                  type="text"
                                  placeholder='Your city'
                                  bdclassName=''
                                  required='required'
                                  />
                                   <Input
                                  label="State*"
                                  type="text"
                                  placeholder='Your state'
                                  bdclassName=''
                                  required='required'
                                  />
                                  
                              </div>
                          </div>
                          <div>
                          <div><h2>Delivery address </h2></div>
                              <div>
                              <Input
                                  label="Suite/Unit No "
                                  type="text"
                                  placeholder='Yur building'
                                  bdclassName=''
                                  required='required'
                              />
                              </div>
                              <div>
                              <Input
                                  label="Street "
                                  type="text"
                                  placeholder='Your street'
                                  bdclassName=''
                                  required='required'
                                  />
                                   <Input
                                  label="Postal Code "
                                  type="text"
                                  placeholder='Your code'
                                  bdclassName=''
                                  required='required'
                                  />
                                   <Input
                                  label="City"
                                  type="text"
                                  placeholder='ciy name'
                                  bdclassName=''
                                  required='required'
                                  />
                                   <Input
                                  label="State"
                                  type="text"
                                  placeholder='Your state'
                                  bdclassName=''
                                  required='required'
                                  />
                                  
                              </div>
                          </div>
                          <div>
                              <div><h2>Contact Details</h2></div>
                              <div>
                              <Input
                                  label="Phone*"
                                  type="text"
                                  placeholder='Enter your phone'
                                  bdclassName=''
                                  required='required'
                                  />
                              <Input
                                  label="Fax"
                                  type="text"
                                  placeholder='Enter your fax'
                                  bdclassName=''
                                  required=''
                                  />
                              <Input
                                  label="Email*"
                                  type="text"
                                  placeholder='Enter your email'
                                  bdclassName=''
                                  required='required'
                              />    
                              </div>
                          </div>
                          <div>
                              <div><h2>Business Details</h2></div>
                              <div>
                              <Input
                                  label="How long has the business been established? "
                                  type="text"
                                  placeholder=''
                                  bdclassName=''
                                  required='required'
                                  />
                                  <Input
                                  label="How long have the current proprietors owned business?"
                                  type="text"
                                  placeholder=''
                                  bdclassName=''
                                  required='required'
                              />
                              </div>
                              <div>
                                  <ul>
                                      <li><input type="radio" name="business" id="" /><span>Dentist </span></li>
                                      <li><input type="radio" name="business" id="" /><span>Dental Specialist (specify) </span></li>
                                      <li><input type="radio" name="business" id="" /><span>Laboratory</span></li>
                                      <li><input type="radio" name="business" id="" /><span>Laboratory Specialist (specify) </span></li>
                                      <li><input type="radio" name="business" id="" /><span>Other</span></li>
                                  </ul>
                              </div>
                          </div>
                          <div>
                              <div>
                                  <h2>Trade Reference Details</h2>
                                  <p>Please give the names and phone numbers of two suppliers for trade reference purposes.</p>
                              </div>
                              <div>
                              <Input
                                  label="Person1"
                                  type="text"
                                  placeholder='Name here'
                                  bdclassName=''
                                  required='required'
                                  />
                                  <Input
                                  label="Phone"
                                  type="text"
                                  placeholder='Enter your phone'
                                  bdclassName=''
                                  required='required'
                                  />
                                  <Input
                                  label="Person2"
                                  type="text"
                                  placeholder='Name here'
                                  bdclassName=''
                                  required='required'
                                  />
                                  <Input
                                  label="Phone"
                                  type="text"
                                  placeholder='Phone'
                                  bdclassName=''
                                  required='required'
                                  />
                              </div>
                              <div>
                                  <input type="checkbox" name="" id="" />
                                  <span></span>
                              </div>
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
                          <div className='flex justify-end'>
                              <Button classname="px-12 sm:px-16 py-3 rounded-md">Send</Button>
                          </div>
                      </div>
                  </div>
              </Container>
          </section>
      </>
  )
}

export default OpenAccount