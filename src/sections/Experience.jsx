import React from 'react'
import TitleHeader from '../components/TitleHeader'
import {expCards} from '../constants/index'
import GlowCard from '../components/GlowCard'
const Experience = () => {
  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Internship Experience" sub="💼 My Carrer Overview"/>

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card,index)=>(
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                <GlowCard card={card} index={index}>
                  <div>
                    <img src={card.imgPath} alt={card.title} />
                  </div>
                </GlowCard>
                </div>

              {/* Experience Timeline Session */}

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline"></div>
                      <div className="gradient-line w-1 h-full"></div>
                    </div>
              <div className="expText flex xl:gap-20 md: gap-10 gap-5 relative z-20">
              <div className="timeline-logo">
                <img src={card.logoPath} alt="logo" />
              </div>
              <div>
                <h1 className='font-semibold text-3xl'>{card.title}</h1>
                <p className="my-5 text-white-50"> 📅{card.date}</p>
              </div>
              </div>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
        </div>
    </section>
  )
}

export default Experience
