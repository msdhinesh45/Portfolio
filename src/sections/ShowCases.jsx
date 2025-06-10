import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowCases = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

const projects = [project1Ref.current,project2Ref.current,project3Ref.current];

projects.forEach((card,index)=>{
    gsap.fromTo(
        card,
        {
            y:50,opacity:0
        },
        {
            y:0,
            opacity:1,
            duration:2,
            delay:0.3*(index+1),
            scrollTrigger:{
                trigger:card,
                start:"top bottom-=100",
            }
        }
    )
})
    useGSAP(()=>{
        gsap.fromTo(sectionRef.current,
            {opacity:0},
            {opacity:2,duration:2.5})
    },[]);

    return (
    <section ref={sectionRef} id="work" className='app-showcase'>
        <div className="w-full">
        <div className="showcaselayout">

            {/* Left */}
            <div className="first-project-wrapper" ref={project1Ref}>
                <div className="image-wrapper">
                    <img src="/images/project1.png" alt="ryde" />
                </div>
                <div className="text-content">
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit possimus impedit sed quasi assume.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam earum dolorem quae vitae sit voluptas quis atque mollitia, porro ratione.</p>
                </div>
            </div>

            {/* Right */}

            <div className="project-list-wrapper overflow-hidden">
                <div className="project" ref={project2Ref}>
                    <div className="image-wrapper bg-[#ffefdb]">
                    <img src="/images/project2.png" alt="Admin dashboard" />
                    </div>
                    <h2>Admin dashboard</h2>
                </div>
                <div className="project" ref={project3Ref}>
                    <div className="image-wrapper bg-[#ffe7eb]">
                    <img src="/images/project3.png" alt="Admin dashboard" />
                    </div>
                    <h2>startupb show case</h2>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ShowCases