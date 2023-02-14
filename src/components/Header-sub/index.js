import React, { useEffect } from "react";
import gsap from "gsap";
import './style.css';
import firstVid from './assets/first.mp4';
import secondVid from './assets/second.mp4';
import Github from './assets/github-sign.png';
import LinkedIn from './assets/linkedin.png';
import Gmail from './assets/gmail-logo.png';


export default function Header() {


    return (
        <div className="header-container" data-scroll-section>
            <div className="h-navbar">
                <ul>
                    <li>Andy Sedzifa</li>
                    <li>Creative/ Frontend Developer</li>
                    <li>Based in Accra, Ghana</li>
                </ul>
            </div>
            <div className="title-r">
                <h1 className="normal-title">Creative</h1>
            </div>
            <div className="title-r" id="second-r">
                <div className="title" id="title-design">
                    <h1>Frontend</h1>
                </div>
                <div className="title" id="normal-title">
                    <h1 className="normal-title">Developer</h1>
                </div>
            </div>
            <div className="b-row">
                <div>
                    {/* <div><div className="divider"></div><h3>Built with React</h3> <div className="divider"></div></div> */}
                    {/* <img src={j} alt="img-icon" /> */}
                    {/* <h3 className="direction-text">Scroll down</h3> */}
                    <div className="e-container">
                        <p>Building web-apps and websites from scratch in an optimum way.</p>
                        <div className="link-icons">
                            <img src={LinkedIn} alt="linkedin-img" className="icon"/>
                            <img src={Github} alt="github-img" className="icon"/>
                            <img src={Gmail} alt="gmail-img" className="icon"/>
                        </div>
                    </div>
                    <svg class="arrows">
							<path class="a1" d="M0 0 L30 32 L60 0"></path>
							<path class="a2" d="M0 20 L30 52 L60 20"></path>
							<path class="a3" d="M0 40 L30 72 L60 40"></path>
					</svg>
                </div>
                <div className="video-s">
                    <div className="first-box">
                    <video className="web-video video-bg" height="100vh" id="video-1" preload="auto" loop autoPlay={true} muted>
                    <source src={firstVid} type="video/mp4" />
                    </video>
                    </div>
                 <div className="second-box">
                    <video className="web-video video-bg" height="100vh" id="video-2" preload="auto" loop autoPlay={true} muted>
                    <source src={secondVid} type="video/mp4" />
                    </video>
                 </div>
                </div>
            </div>
            
        </div>
    );
}