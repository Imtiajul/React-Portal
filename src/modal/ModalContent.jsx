import React from "react"


const Child= ()  => {
  return (
    <div className="p-1 border border-red-500 text-white flex flex-col">
      I am child
      <button className="p-1 border "> child button</button>
    </div> 
  )
}

const ModalContent = ({ onClose }) => {
  return (
    <div className="p-3 bg-slate-950 flex flex-col items-center h-40 justify-evenly rounded-lg absolute top-20 left-20 z-10" role="dialog" aria-modal="true">
      <p className="text-white"> I am Modal</p>
      <Child/>
      <button
        className="p-1 bg-slate-700 text-white rounded-lg"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  )
}

export default ModalContent
