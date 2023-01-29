import React from 'react'

const Section = ({id, children}) => {
  return (
    <div id={id} className="relative z-10 w-full h-full snap-center flex-none grid place-items-center">
        {children}
    </div>
  )
}

export default Section