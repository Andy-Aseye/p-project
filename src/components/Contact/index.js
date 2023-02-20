import React, {useRef, useState} from "react";
import "./style.css";
import emailjs from '@emailjs/browser';
import Whatsapp from './assets/whatsapp.png';
import Gmail from './assets/email.png';
import Github from './assets/github.png';
import LinkedIn from './assets/linkedin.png';

const Result = () => {
	return (
	<p>Your message has been successfully sent</p>);
}


export default function Contact() {
	const [result, showResult] = useState(false);

	const form = useRef();	 

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_5e6nw8m', 'template_ompzcq8', form.current, 'DvJfgoiSVGyHLXb3s')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset();
		  showResult(true);
	  };







  return (
  <section className="contact-section" data-scroll-section>
	
	<div className="col-c">
		<div className="row first-r">
			<div className="map-link">
				<p>look at google maps <div className="divider"></div></p>		
			</div>
			<h1>Contact Us</h1>
		</div>
		<div className="white-box">
		<form ref={form} action="" onSubmit={sendEmail}>
			<p>CONTACT FORM</p>
  <div className="form-pair">
	  <div className="form-group">
		<input type="text" name="Name" className="name input"/>
		<label className="placeholder">Name</label>
	  </div>
	  <div className="form-group">
		<input type="text" name="Organization" className="organization input" />
		<label className="placeholder">Organization</label>
		<label></label>
	  </div>
  </div>
  <div className="form-group f-s">
		<input type="text" name="email" className="email input"/>
		<label className="placeholder">E-mail</label>
	  </div>
	  <div className="form-group f-s">
		<input type="number" name="phone" className="phone input"/>
		<label className="placeholder">Phone Number</label>
	  </div>
  <div className="form-group f-s">
	<textarea row="1" name="message" className="message input" required/>
	<label className="placeholder">Message</label>
  </div>
  
  <button className="button">Send</button>
  <div className="row">{result ? <Result /> : null}</div>
  </form>
		</div>
		<div className="row second-r">
			<div className="left-a-main">
			<div className="col left-a">
				<h3>Address</h3>
				<ul>
					<li>East Legon</li>
					<li>Accra, Ghana</li>
				</ul>
			</div>
			<div className="col left-a">
				<h3>Developed by </h3>
				<ul>
					<li>Andy Sedzifa</li>
					<li>2023</li>
				</ul>
			</div>
			</div>
			<div className="col">
			<div className="c-details">
 			 <div><img src={Whatsapp} alt="whatsapp"/>(+233) 55 863 0441</div>
  			<div><img src={Github} alt="github"/> Github Andy-Aseye</div>
  			<div><img src={LinkedIn} alt="linkedin"/>LinkedIn</div>
  			<div><img src={Gmail} alt="gmail"/>andyaseye@gmail.com</div>
			</div>
			</div>
		</div>
	</div>

  </section>
  );
}





{/* <div className="row inner-c">
<div className="col left">
  <h1>Get in touch</h1>
</div>
<div className="col right">
  
  <div className="row">
  <form>
  <div className="form-pair">
	  <div className="form-group">
		<input type="text" className="name input"/>
		<label className="placeholder">Name/ Organization</label>
	  </div>
	  <div className="form-group">
		<input type="email" className="email input" />
		<label className="placeholder">Email</label>
		<label></label>
	  </div>
  </div>
  <div className="form-group">
	<textarea row="1" className="message input"/>
	<label className="placeholder">Message</label>
  </div>
  
  <button className="button">Send</button>
  </form>
  </div>
</div>

</div>
<div className="c-details">
  <div><img src={Whatsapp} alt="whatsapp"/>WhatApp (+233) 55 863 0441</div>
  <div><img src={Github} alt="github"/> Github Andy-Aseye</div>
  <div><img src={LinkedIn} alt="linkedin"/>LinkedIn</div>
  <div><img src={Gmail} alt="gmail"/>andyaseye@gmail.com</div>
</div> */}
















// Working area


{/* <div className="row inner-c">
   <div className="col left-contact">
    <h1>Get in touch</h1>
   </div>

	<div className="col right">

		<div className="row">
		<form>
  <div className="form-pair">
	  <div className="form-group">
		<input type="text" className="name input"/>
		<label className="placeholder">Name/ Organization</label>
	  </div>
	  <div className="form-group">
		<input type="email" className="email input" />
		<label className="placeholder">Email</label>
		<label></label>
	  </div>
  </div>
  <div className="form-group">
	<textarea row="1" className="message input"/>
	<label className="placeholder">Message</label>
  </div>
  
  <button className="button">Send</button>
  </form>
		</div>
	</div>
   </div>
   <div className="c-details">
  <div><img src={Whatsapp} alt="whatsapp"/>WhatApp (+233) 55 863 0441</div>
  <div><img src={Github} alt="github"/> Github Andy-Aseye</div>
  <div><img src={LinkedIn} alt="linkedin"/>LinkedIn</div>
  <div><img src={Gmail} alt="gmail"/>andyaseye@gmail.com</div>
</div> */}