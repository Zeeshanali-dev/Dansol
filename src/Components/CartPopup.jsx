import React, { Children } from 'react'

function CartPopup({children}) {
  return (
      <div className='bg-orange-300 text-center rounded-md py-3 absolute bottom-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-48'>
          <h1>{children}</h1>
      </div>
  )
}

export default CartPopup