import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Input({label, type='text',...props}) {
    const [show,setShow] = useState(false)
    const [inputType,setInputType] = useState(type)
    useEffect(() => {
if(show) {
    setInputType('text')
}
else{
    setInputType('password')
}
    },[show])
  return (
    <label className="block relative flex  bg-zinc-50 border rounded-sm focus-within:border-gray-400">
    <input required={true} type={inputType}  className="  px-2
    focus:outline-none text-xs   w-full h-[38px] peer valid:pt-[10px]" {...props}/>
    <small className="absolute cursor-text pointer-events-none top-1/2  left-[9px] transition-all peer-valid:text-[10px] peer-valid:top-2.5 peer-valid:scale[0.8333] text-xs text-gray-500 -translate-y-1/2">{label}</small>
    {type === 'password' && props?.value && (
        <button type='button' value={inputType} className=' pr-2  h-full flex items-center text-sm font-semibold' onClick={() => setShow(show => !show)}>
            {show ? 'Hide' : 'Show'}
        </button>
    )}
  </label>

  )
}

export default Input