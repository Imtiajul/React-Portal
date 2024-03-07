import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({children}) => {
   const mountElemnt = document.getElementById('portal-div');
   const divElement = document.createElement('div');

   useEffect(()=> {
      mountElemnt.appendChild(divElement);

      return ()=> mountElemnt.removeChild(divElement);

   }, [divElement, mountElemnt])

  return (
   createPortal(children, divElement)
  )
}

export default Portal
