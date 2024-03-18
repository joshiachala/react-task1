import React from 'react'
import './Team.css'
import img1 from './image/01.png'
import img2 from './image/02.png'
import img3 from './image/03.png'
import img4 from './image/04.png'


function Team() {
    return (
        <>
            <section class="team">
                <h2 class="box1">Company Name</h2>
                <div class="about">
                    Welcome to our company, where a dedicated team of professionals works <br/>together to bring innovation, creativity, and expertise to the software industry. Get to know <br/>the individuals who make our company thrive.
                </div>
                <hr style={{ width: '80vw', height: '1rem' }} />

                <div class="center">
                    <h2>Meet Our Team</h2>
                </div>

                <h3 class="box1">Leadership/Management Team</h3>
                <div className="team-members">
                    <div className="member">
                        <img src={img1} alt="Member 1" />
                        <h3>Mr. John</h3>
                        <p>Founder CEO</p>
                    </div>
                    <div className="member">
                        <img src={img2} alt="Member 2" />
                        <h3>Mr. David</h3>
                        <p>Founder CEO</p>
                    </div>
                </div>
                <div class="team-content">
                    <div class="box">
                        <img src={img3} alt="Member 1" />
                        <h3>VP 1</h3>
                        <h5>VP. Development & Growth</h5>
                    </div>

                    <div class="box">
                        <img src={img4} alt="Member 2" />
                        <h3>VP 2</h3>
                        <h5>VP, Sales & Marketing</h5>
                    </div>

                    <div class="box">
                        <img src={img2} alt="Member 3" />
                        <h3>VP 3</h3>
                        <h5>VP, Finance & Operation</h5>
                    </div>
                </div>

                <h3 class="box1">Development Team</h3>
                <div class="team-content">
                    <div class="box">
                        <img src={img2} alt="Developer 1" />
                        <h3>Developer 1</h3>
                        <h5>Team Lead, SE</h5>
                    </div>

                    <div class="box">
                        <img src={img2} alt="Developer 2" />
                        <h3>Developer 2</h3>
                        <h5>Software Engineer</h5>
                    </div>

                    <div class="box">
                        <img src={img2} alt="Developer 3" />
                        <h3>Developer 3</h3>
                        <h5>Software Engineer</h5>
                    </div>

                    <div class="box">
                        <img src={img2} alt="Developer 4" />
                        <h3>Developer 4</h3>
                        <h5>Software Engineer</h5>
                    </div>

                    <div class="box">
                        <img src={img2} alt="Developer 5" />
                        <h3>Developer 5</h3>
                        <h5>Software Engineer</h5>
                    </div>
                    <div class="box">
                        <img src={img2} alt="Developer 6" />
                        <h3>Developer 6</h3>
                        <h5>Software Engineer</h5>
                    </div>
                    <div class="box">
                        <img src={img2} alt="Developer 7" />
                        <h3>Developer 7</h3>
                        <h5>Software Engineer</h5>
                    </div>
                </div>
                <h3 class="box1">Sales and Marketing Team</h3>
                <div class="team-content">
                    <div class="box">
                        <img src={img2} alt="Developer 1" />
                        <h3>Member 1</h3>
                        <h5>Sales Officer</h5>
                    </div>

                    <div class="box">
                        <img src={img2} alt="Developer 2" />
                        <h3>Member 2</h3>
                        <h5>Sales Officer</h5>
                    </div>

                    <div class="box">
                        <img src={img2} alt="Developer 3" />
                        <h3>Member 3</h3>
                        <h5>Sales Officer</h5>
                    </div>

                    <div class="box">
                        <img src={img2} alt="Developer 4" />
                        <h3>Member 4</h3>
                        <h5>Sales Officer</h5>
                    </div>

                    <div class="box">
                        <img src={img2} alt="Developer 5" />
                        <h3>Member 5</h3>
                        <h5>Marketing Officer</h5>
                    </div>
                    <div class="box">
                        <img src={img2} alt="Developer 6" />
                        <h3>Member 6</h3>
                        <h5>Marketing Officer</h5>
                    </div>
                    <div class="box">
                        <img src={img2} alt="Developer 7" />
                        <h3>Member 7</h3>
                        <h5>Marketing Officer</h5>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team
