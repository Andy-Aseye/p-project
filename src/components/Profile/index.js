import React from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img1 from './assets/bootstrap.png';
import img2 from './assets/css.png';
import img3 from './assets/express.png';
import img4 from './assets/gsap.png';
import img5 from './assets/git.png';
import img6 from './assets/mongodb.png';
import img7 from './assets/node.png';
import img8 from './assets/html.png';
import img9 from './assets/Lt.png';
import img10 from './assets/react.png';






export default function Profile() {
 
  // gsap.registerPlugin(ScrollTrigger);

  


//   const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".img-f",
//         start: "top 70%",
//         end: "top 19%",
//         scrub: 1,
//         // markers: true,
//     }
// })


// tl.to(".profile", {width: "94vw", borderRadius: 19, duration: 1.5});


  return (
    <section className="profile" id="profile-scroll" data-scroll-section >
        <div className="top-div">
            <p>Andy Sedzifa</p>
            <p>Creative Developer</p>
            <p>Copyright@ 2023</p>
        </div>
        <div className="inner-container">
        <div className="row main-row">
        <div className="col text-area">
            <h1>Hey, Andy here. Hope you had a <br />great time going through my portfolio.</h1>
            {/* <h1>Let's talk about how we can elevate your brand or business to the next level</h1> */}
            <div className="text-area-p">
            <p>I am a creative frontend developer with the drive to build responsive interactive websites.
            I have experience with working with some of the most talented developers and designers. </p>
            <p>Below is a list of my skills and tools I work with. Feel free to leave a message regarding any idea, project, or for a quick chat. Hoping to stay in touch with you. Have a great day.</p>
            </div>
            <div className="marquee-div">
            <marquee width="100%" direction="left">
            <span><img src={img8} className="m-img img-f" alt="html-i"/>HTML</span>
            <span><img src={img2} className="m-img img-f" alt="css-i"/>CSS</span>
            <span><img src={img10} className="m-img img-f" alt="react-i"/>React</span>
            <span><img src={img1} className="m-img img-f" alt="bootstrap-i"/>Bootstrap</span>
            <span><img src={img7} className="m-img img-f"  alt="node-i"/>Node.js</span>
            <span><img src={img3} className="m-img img-f" alt="express-i"/>Express.js</span>
            <span><img src={img6} className="m-img img-f"  alt="mongo-i"/>Mongodb</span>
            <span>Mongoose Schema</span>
            <span><img src={img4} className="m-img img-f"  alt="gsap-i"/>GSAP</span>
            <span><img src={img5} className="m-img img-f"  alt="github-i"/>Github</span>
            <span><img src={img9} className="m-img img-f"  alt="browser-i"/>LT Browser</span>
            </marquee>
            </div>
         </div>
         <div className="col img-col">
            <img src="https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNyZWF0aXZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="img-f"/>
        </div>
        </div>
       
      </div>
        
        
    </section>
  );
}



/* <div className="buttons-section">
<div className="row first-row">
    <button>HTML</button>
    <button>CSS</button>
    <button>Bootstrap</button>
    <button>Node.js</button>
    <button>Express.js</button>
    <button>React.js</button>
    <button>Mongoose</button>
  
</div>
<div className="row second-row">
    <button>Mongodb</button>
    <button>Npm</button>
    <button>Gsap</button>
    <button>Github</button>
    <button>LT Browser</button>
    <button>Mongoose Schema</button>
</div>
</div> */



// const pageContainer = document.querySelector("#profile-scroll");
  
//   scroller.on("scroll", ScrollTrigger.update);

//   ScrollTrigger.scrollerProxy(pageContainer, {
//     scrollTop(value) {
//       return arguments.length
//         ? scroller.scrollTo(value, 0, 0)
//         : scroller.scroll.instance.scroll.y;
//     },
//     getBoundingClientRect() {
//       return {
//         left: 0,
//         top: 0,
//         width: window.innerWidth,
//         height: window.innerHeight
//       };
//     },
//     pinType: pageContainer.style.transform ? "transform" : "fixed"
//   });