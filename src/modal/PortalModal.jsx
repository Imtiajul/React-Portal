import React, { useState } from "react"
import Portal from "../Portal"
import ModalContent from "./ModalContent"

const PortalModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    console.log("I am click, child");
  }

  return (
    <div className="p-2 border border-red-600 relative w-64 h-20 mb-5 overflow-hidden" onClick={handleClick}>
      <button
        className="p-1 bg-slate-700 text-white rounded-lg"
        onClick={() => setShowModal(true)}
      >
        Show Modal
      </button>
  

      {showModal && (
        <Portal>
          <ModalContent onClose={() => setShowModal(false)} />
        </Portal>
      )}
    </div>
  )
}

export default PortalModal
