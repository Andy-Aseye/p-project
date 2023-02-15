import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../../hooks/useOnScreen";
import Adrenalin from './assets/adrenalin.png';
import Fitnuts from './assets/fitnuts.png';
import Pepe from './assets/pepe.png';
import PepeM from './assets/pepe-mobile.png';
import FitnutsM from './assets/fitnuts-mobile.png';
import cn from "classnames";

import "./style.scss";
// "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100"

// "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100"

// "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100"



const images = [
  {
    src: Fitnuts,
    title: "Fitnuts",
    subtitle: "Fitness and Health",
    category: "Web-App",
    role: "Frontend Development",
    modalImg: FitnutsM,
    overview: "Fitnuts is a health and lifestyle guide application with modern abilities such as setting up excercise routine and diets for users to meet wellness targets.",
    stack: ["Angualar", "Css", "Material UI", "Bootstrap"],
    demo: "Available for live demo"
  },
  {
    src: Adrenalin,
    title: "Adrenaline Sports",
    subtitle: "Sports Management",
    category: "Management platform",
    role: "Frontend Development",
    modalImg: "",
    overview: "Adrenaline sports is a sports management app to guide team planning",
    stack: ["Bootstrap", "Html", "PHP"],
    demo: "Available for live demo"
  },
  {
    src: Pepe,
    title: "Pepe's Game",
    subtitle: "Gaming",
    category: "Online gaming",
    role: "Frontend Development",
    modalImg: PepeM,
    overview: "Pepe's Game is an online casino game with modern functionalities and capabilities",
    stack: ["React.JS", "Greensock 3", "Css", "Bootstrap"],
    demo: "Available for live demo"
  },
  {
    src:
      "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
    title: "AIgenix",
    subtitle: "AI generator",
    category: "Arts and creativity",
    role: "Frontend and Backend",
    overview: "AIgenix is an image genreation webapplication with AI powered techology and sharing feature.",
    stack: ["React.JS", "Tailwind.CSS", "Node.js", "Express.js", "OpenAI", "Auth0", "CSS"],
    demo: ""
  },
];
function GalleryItem({
  src,
  category,
  subtitle,
  title,
  modalImg,
  // category,
  demo,
  stack,
  role,
  overview,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible((current) => !current);
  };



function Modal () {
  // style={{backgroundImage: `url(${src})`, objectFit: "cover"}}

  // <div className="m-content">
  //       <h1>Type</h1>
  //       </div>
  //       <div className="m-content">
  //       <h1>Overview</h1>
  //       </div>
  //       <div className="m-content">
  //       <h1>Stack</h1>
  //       </div>
  //       <div className="m-content">
  //       <h1>Link</h1>
  //       </div>
  return(
    <div className="modal-container"> 
      <div className="modal-top">
        <div className="modal-img-container" style={{backgroundImage: `url(${src})`, objectFit: "cover"}}>

        </div>
        <div className="m-project-h">

        </div>
      </div>
      <div className="modal-bottom" style={{height: "50%"}}>
        <div className="spec-container">
        <h3>Specifications</h3>
        </div>
        <div className="project-features">
          <div className="m-right">
          {/* <div className="m-r-line"></div> */}
          <div className="m-content">
            <h3>Type</h3>
            <p>{subtitle}</p>
          </div>
          </div>
          <div className="m-right">
          <div className="m-r-line"></div>
          <div className="m-content">
            <h3>Overview</h3>
            <p>{overview}</p>
          </div>
          </div>
          <div className="m-right">
          <div className="m-r-line"></div>
          <div className="m-content">
            <h3>Stack</h3>
            <div style={{width: "65%", display: "flex"}}>{stack.map(stackItem => <p>{stackItem}</p>)}</div>
          </div>
          </div>
          <div className="m-right">
          <div className="m-r-line"></div>
          <div className="m-content">
            <h3>Role</h3>
            <p>{role}</p>
          </div>
          </div>
          <div className="m-right">
          <div className="m-r-line"></div>
          <div className="m-content">
            <h3>Link</h3>
            <p>{demo}</p>
          </div>
          <div className="m-r-line"></div>
          </div>
        </div>
     </div>

    </div>
  )
}







  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"} onClick={handleToggle}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
          {visible && <Modal />}
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      let sections = gsap.utils.toArray(".gallery-item-wrapper");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section className="section-wrapper gallery-wrap">

      <div className="gallery" ref={ref}>
        <div className="gallery-counter">
          <span>{activeImage}</span>
          <span className="divider" />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
