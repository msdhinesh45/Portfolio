import React from 'react'

const GlowCard = ({card,children}) => {
  return (
    <div className="card card-border timeline-card rounded-xl p-10 cursor-pointer">
        <div className="glow"></div>
        <div className='flex items-center gap-1 mb-5'>
            {Array.from({length:5},(_,i)=>(
                <img src='/images/star.png' key={i} alt='star' className='size-5' />
            ))}
        </div>
    </div>
  )
}

export default GlowCard