import React from 'react'

const Button = () => {
  return (
    <a className="cta-wrapper">
        <div className="cta-group group">
            <div className="bg-circle" />
                <p className="text">See my Work</p>
                <div className="arrow-wrapper">
                    <img 
                    src="/public/images/arrow-down.svg" 
                    alt="arrow" />
                </div>
            
        </div>
    </a>
  )
}

export default Button