import React from 'react'
import Section from './Section'
import Wrapper from './Wrapper'


const Content = () => {
  return (
    <div className="w-full h-full absolute z-10 snap-x snap-mandatory section-wrapper flex">
        <Section id="Home">
            {/* <Wrapper>
                asd
            </Wrapper> */}
            <div className="w-[80%] h-[80%]" >
                Hi,
                I am ARPIT
            </div>
        </Section>
        <Section id="About">
            <h1>About</h1>    
        </Section>      
        <Section id="Contact Me" />         
        <Section id="Skills & Expertise" />         
        {/* <div id="Home" className="relative z-10 w-full h-full snap-center flex-none">
            Home
        </div>
        <div id="Home" className="relative z-10 w-full h-full snap-center flex-none">
            Home
        </div>
        <div id="Home" className="relative z-10 w-full h-full snap-center flex-none">
            Home
        </div>
        <div id="Home" className="relative z-10 w-full h-full snap-center flex-none">
            Home
        </div> */}
    </div>
  )
}

export default Content