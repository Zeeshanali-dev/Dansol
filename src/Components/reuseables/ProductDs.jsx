import React from 'react'
import Button from "./Button"
import shoppingcart from '../../assets/shoppingcart.png'


function ProductDs({item ,handleAddCart,showpopup}) {
  return (
   
   <div className='item border-2 border-white md:hover:border-blue-500 rounded-md relative' key={item.id}>
        <div className="card p-1 md:p-6">
               <div className='mx-auto max-w-48 min-h-[230px] lg:max-w-full'>
                    <img src={item.Image} alt="" className='mx-auto'/>
        </div>
        <div className='px-1 md:px-4  text-center'><p className='text-[14px] sm:text-[14px] lg:text-[14px]  my-4'>{item.Pname}</p></div>
        <div className='text-center my-3'><p className='text-[#6F7985] font-bold text-[18px]'>SKU: {item.SKU}</p></div>
        <div className='flex justify-between items-center'>
          <div className='px-1 md:px-4  text-center'>
             
          <span className='font-bold text-[20px] pl-2 '>{item.price }$</span>
        </div>
        <Button  classname=" w-[50px] h-[50px] p-3" onClick={handleAddCart} item={item}> 
        <img src={shoppingcart} alt=""   />
        </Button>
        </div>
          
        {/* {showpopup&&<CartPopup>Product added Succesfully</CartPopup>} */}
  </div>
 </div>
                       
   
  )
}

export default ProductDs

