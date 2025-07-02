import React from 'react'
import TitleHeader from '../components/TitleHeader'

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
    <TitleHeader 
    title="Get in Touch with me"
    sub="Contact Information"
    />      
    <div className="mt-16">
      <p className="text-center">Feel free to reach out for collaborations, questtions or just say to "Hello!"</p>
      <p className="text-center mt-4"></p>
      </div>  
      </div>
    </section>
  )
}

export default Contact