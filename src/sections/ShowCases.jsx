import React from 'react'

const ShowCases = () => {
  return (
    <div id="work" className='app-showcase'>
        <div className="w-full">
        <div className="showcaselayout">

            {/* Left */}
            <div className="first-project-wrapper">
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
                <div className="project">
                    <div className="image-wrapper bg-[#ffefdb]">
                    <img src="/images/project2.png" alt="Admin dashboard" />
                    </div>
                    <h2>Admin dashboard</h2>
                </div>
                <div className="project">
                    <div className="image-wrapper bg-[#ffe7eb]">
                    <img src="/images/project3.png" alt="Admin dashboard" />
                    </div>
                    <h2>startupb show case</h2>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ShowCases