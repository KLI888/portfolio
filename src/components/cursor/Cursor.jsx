import React from 'react'
import AnimatedCursor from "react-animated-cursor"

function Cursor() {
  return (
    <div>
    <AnimatedCursor 
        innerSize={20}
        outerSize={35}
        color='128, 128, 128'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
    />
      
    </div>
  )
}

export default Cursor
