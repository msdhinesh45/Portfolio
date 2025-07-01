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

          {testimonials.map(({imgPath, name,mentions})=>(
          <GlowCard card={testimonial}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={imgPath} alt={name} />
                </div>
                <div>
                  <p className="font-bold">{mentions}</p>
                </div>
              </div>
          </GlowCard>

          ))}

        </div>
      </div>
    </section>

  )
}

export default Testimonal