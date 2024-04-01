import React from 'react'

function Input({
  label,
  required =false,
  className = '',
  type,
  placeholder,
  bdclassName ='',
}) {
  return (
      <div className={`${bdclassName}`}>
      <label htmlFor={`${label}`} className="text-[15px] leading-[18px]  mb-2" >{`${label}`} </label>
      <input
        type={`${type}`}
        required={required}
        className={` ${className} rounded-md px-4 py-4 mt-2 w-full outline-none`}
        placeholder={placeholder}
        id={`${label}`}
        
      />
      </div>
  )
}

export default Input