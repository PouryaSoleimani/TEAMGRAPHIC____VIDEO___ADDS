import React, { useState } from 'react'

const TEST = () => {

   const [number, setNumber] = useState(0)

   function NumberAddHandler() {
      if (number < 100) { setNumber(prev => prev + 1) }
   }
   return (
      <div>TEST</div>
   )
}

export default TEST
