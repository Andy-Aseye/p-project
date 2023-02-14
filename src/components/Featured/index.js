import React from "react";
import "./style.css";
// import gsap from "gsap";

export default function Featured() {
  return (
    <section className="featured-section"  >
      <div className="container-fluid" data-scroll-section id="stick">
           <div className="line"></div>
           <div className="s-row" >
              <div className="col-12 col-md-4">
                <div className="left" data-scroll-sticky data-scroll data-scroll-target="#stick">
                  <h1>CORE <br />VALUES</h1>
                </div>
              </div>
              <div className="col-12 col-md-8">
              <div className="right">
                {/* <div className="r-line"></div> */}
                  <div className="content">
                  <h3>Creative</h3>
                  <p>
                  Websites carry a message to everyday users and clients. It is one of the ideas I believe in, and try to implement through fun and exciting UI experience. Websites do not entirely have to be dull and boring, it can be lively and a fun way of telling a story or idea about a company to the user.
                  </p>
                </div>
                </div>
                <div className="right">
                <div className="r-line"></div>
                  <div className="content">
                  <h3>Responsive</h3>
                  <p>
                  This is definitely one emphasized feature in websites. Accessibility of a website to users across different screens and devices is one feature I keep in mind in development. With experience and proficiency in Bootstrap, Tailwind.css and vanilla CSS, I've got you covered in making your website accessible.
                  </p>
                </div>
                </div>
                <div className="right">
                <div className="r-line"></div>
                  <div className="content">
                  <h3>Interactive</h3>
                  <p>
                  Why Interactive? Why not. It is definitely key to know limitations when creating interactive websites. Business pages can portray an idea to clients in a fun and interactive way through simple animations. I restrict animations in web-apps such as e-commerce sites to avoid distracting the user from the primary goal of functionality. I'm proficient with GSAP 3, and other frameworks such as Framer Motion.
                  </p> 
                </div>
                </div>
                <div className="right">
                <div className="r-line"></div>
                <div className="content" id="content-3">
                <h3>Minimalistic</h3>
                  <p>
                  More is less, less is more. Trends do come and go (bruh, but minimalism always stays). NB: you're cool if you get the reference. Aside handling the issue of overcrowding of elementson the website, minimalist websites do give an aesthetic look. It gives a precise and detailed overview of the idea being portrayed, and allows for easy navigation.
                  </p>
                </div>
                </div>
              </div>
           </div>

           {/* This is for only mobile screens */}
            <div className="m-row">
            <div className="m-col">
                 <h3>Creative</h3>
                  <p>
                  Websites carry a message to everyday users and clients. It is one of the ideas I believe in, and try to implement through fun and exciting UI experience. Websites do not entirely have to be dull and boring, it can be lively and a fun way of telling a story or idea about a company to the user.
                  </p>
            </div>
            <div className="m-col">
                  <h3>Responsive</h3>
                  <p>
                  This is definitely one emphasized feature in websites. Accessibility of a website to users across different screens and devices is one feature I keep in mind in development. With experience and proficiency in Bootstrap, Tailwind.css and vanilla CSS, I've got you covered in making your website accessible.
                  </p>
            </div>
            <div className="m-col">
                  <h3>Interactive</h3>
                  <p>
                  Why Interactive? Why not. It is definitely key to know limitations when creating interactive websites. Websites can portray an idea to clients in a fun way with simple animations. I restrict animations in web-apps to avoid distracting the user from the primary goal of functionality. I'm proficient with GSAP 3, and other frameworks such as Framer Motion.
                  </p>
            </div>
            <div className="m-col">
                  <h3>Minimalistic</h3>
                  <p>
                  More is less, less is more. Trends do come and go (bruh, but minimalism always stays). Aside handling the issue of overcrowding of elements on the website, minimalist websites do give an aesthetic look. It gives a precise and detailed overview of the idea being portrayed, and allows for easy navigation.
                  </p>
            </div>
            </div>
      </div> 
    </section>
  );
}
