import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <>
        <section class= "section1">
  <div class= "container">
    <h1 class= "title">TITLE</h1>
    <div class= "content-wrapper">
      <div class= "img-wrapper">
        <div class= "img"></div>
      </div>
      <div class="text-wrapper">
        <p class= "text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque deserunt aliquam. Provident labore molestias sequi autem deleniti eaque nisi corporis eveniet perferendis, ut iusto, recusandae praesentium harum distinctio iste!
        </p>
        <p class= "text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, fugit. Aperiam dignissimos voluptates praesentium fugit facere maiores, dolorum obcaecati maxime.
        </p>
        <div class="btn-wrapper">
          <a href="#" class="btn">
            <span>More</span>
          </a>
        </div>
      </div>
   </div>
  </div>
</section>
<section class= "section2"></section>
    
    
    </>
  )
}

export default About