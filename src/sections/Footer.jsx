import React from 'react'
import {socialImgs} from '../constants/index'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-col justify-center">
                <a href="#">Visit my Portfolio</a></div>
        </div>
        <div className="socials">
            {socialImgs.map((img)=>(
                <a className="icon" target="_blank" href={img.url} key={img.url}>
                    <img src={img.imgPath} alt="" />
                </a>
            ))}
        </div>
    </footer>
  )
}

export default Footer