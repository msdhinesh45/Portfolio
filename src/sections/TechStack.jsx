import React from 'react'
import TitleHeader from '../components/TitleHeader'
import {techStackIcons} from '../constants/index'
const TechStack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
            title="My Development Toolkit"
            sub="💻 Fueling innovation through code and creativity."
            />
        <div className="tech-grid">
          {techStackIcons.map((icon)=>(
            <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
              <div className="tech-card-animated-bg"></div>
              {icon.name}              
              </div>
              
          ))}
        </div>

        </div>
    </div>
  )
}


export default TechStack