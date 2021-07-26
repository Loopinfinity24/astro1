import React from "react";
import Slider from "react-slick";
import cardimage1 from "../images/blog1.jpeg"
import cardimage2 from "../images/blog2.jpg"
import cardimage3 from "../images/blog3.jpg"
import Navbar from './Navbar';



const BlogPage = () =>{
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
      };
    return(
      <div className="blogpage">
          {/* <Navbar /> */}
        <div class="container py-5">
            <div class="blog-header text-center py-3">
                <h1>Latest Blog Posts</h1>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
<div class="row row-cols-1 row-cols-md-3 g-4 py-3">
  <div class="col">
    <div class="card">
      <img src={cardimage1}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={cardimage1}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={cardimage1}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a nab dfjdkh fhjgkf  dhthgk tural lead-in to additional content.</p>
        
      </div>
    </div>
  </div>
  </div>
  <hr/>
  <div class="blog-description">
<h3>BEST ASTROLOGY ONLINE - ASTROKAPOOR</h3>
   <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer
</p>
  </div>
  <div class="blog-description">
<h3>BEST ASTROLOGY ONLINE - ASTROKAPOOR</h3>
   <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer
</p>
  </div>
  <div class="blog-description">
<h3>BEST ASTROLOGY ONLINE - ASTROKAPOOR</h3>
   <p>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer
</p>
  </div>
</div>

</div>
 );
}
export default BlogPage;