import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'
const Testimonal = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="What humans Say About Me?"
        sub="💥 Friends and Teachers feedBack"/>

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">

          {testimonials.map((testimonial)=>(
          <GlowCard card={testimonial}>
              <div className="flex items-center gap-3">
                
              </div>
          </GlowCard>
          
          ))}

        </div>
      </div>
    </section>
  )
}

export default Testimonal