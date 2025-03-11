import React, { useState } from 'react'

const TEST = () => {
   const inter = Inter({ subsets: "HELLO" })
   const [number, setNumber] = useState(0)

   function NumberAddHandler() {
      if (number < 100) { setNumber(prev => prev + 1) }
   }
   return (
      <div className='HELLO'>TEST
         <HELLO></HELLO>
      </div>
   )
}

export default TEST
