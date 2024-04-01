import React from 'react'

function Button({children ,classname, onClick,item}) {
  return (
      <button onClick={()=>`${onClick(item)}`}  className={`flex justify-center items-center rounded-lg text-white    bg-gradient-to-r from-[#307BC9] to-[#3C59A5] hover:bg-gradient-to-r hover:from-[#5a95d4] hover:to-[#2d437a] transition-all duration-500 ${classname}`}>
          {children}
      </button>
  )
}

export default Button