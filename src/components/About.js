import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <>
    <div classname="container -3">
    <h3>About</h3>
    <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <h5>About Me</h5>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Welcome to my <strong>TextUtils</strong> website! I'm <strong> Ashish Joshi</strong>, a passionate coder with a keen eye for details and a love for solving problems through technology.
         
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h5>Who I Am</h5>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      I’m a passionate and driven software developer with a solid background in programming and web development. 
      I’ve created this Text Utils website to help users efficiently manage and manipulate their text, offering tools to capitalize, convert to lowercase, remove spaces, copy text, count the number of words, and count the number of characters.
       
      <br/>
      Eager to leverage my expertise in Python, web development, and database management, 
      I am committed to delivering innovative solutions and continuously expanding my knowledge in machine learning and data science. 
      I am seeking a challenging role where I can apply my skills, drive, and intellect to contribute effectively to a dynamic team environment and propel the organization's growth and success.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h5>Why Choose My Tools?</h5>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <ul>
        <li><strong>Efficiency:</strong> Quickly perform text transformations with just a few clicks.</li>
        <li><strong>Simplicity:</strong> User-friendly interface designed for ease of use.</li>
        <li><strong>Reliability:</strong> Accurate and consistent results every time.</li>
        <li><strong>Versatility:</strong> A variety of text utilities to cover common text processing tasks.</li>
      </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <h5>Get in touch</h5>
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      I’m always open to new opportunities and collaborations. If you’re looking for a skilled coder with a passion for innovation and a track record of delivering high-quality solutions,
       I’d love to hear from you. Feel free to  <a href="mailto:@ash.joshi404@gmail.com"> Contact me </a>  or connect with me on 
       <Link target="_blank" to={"www.linkedin.com/in/coder-ashish-joshi"} > LinkedIn </Link> .
      <br/>
      <br/>
      Thank you for visiting my Text Utils website. I hope you find the tools helpful and look forward to connecting with you!
      </div>
    </div>
  </div>
</div>
</div>
</>
  )
}
