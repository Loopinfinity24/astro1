import React from "react";
import "../styles/OurServices.scss";
import image1 from "../images/safrron-xd.png";
import image2 from "../images/predictionofmarraige.jpg";
import image3 from "../images/marraigeorlove.jpg";
import image4 from "../images/remedial.jpg"; 
import image5 from "../images/spouse.jpg";
import image6 from "../images/marital.jpg";
import image7 from "../images/spouse.jpg";
import image8 from "../images/vedic.jpg";
import image9 from "../images/marriedlife.jpg";


const OurServices = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div class="col text-center"></div>
          <p className="services-heading text-center">Our Services</p>
          <p className=" text-center">
            We at AstroKapoor believe in "Health,Wealth and Prosperity" <br />
            In AstroKapoor we provide various consulting services, among which
            Medical Astrology and Corporate Astrology are key services.
          </p>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <img src={image1} class="img-fluid" alt="..."></img>
          </div>
        </div>
      </div>

      <div className="container py-2">
        <div class="row px-auto">
          <div class="col-lg-3">
            <div class="card">
              <img src={image2} class="card-img-top" alt="..." />
              <div class="card-body  ">
                <h6 class="card-title text-center">
                  Prediction Of My Marriage
                </h6>
                <p class=" text-center marraige-prediction">
                  <span class="card-text text-line text-center">₹5,400.00 </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="card">
              <img src={image3} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">
                  My Marriage Will Be Love Or Arranged
                </h6>
                <p class=" text-center">
                  <span class="card-text text-line text-center">₹5,400.00 </span>{" "}
                  <span class="span-text ps-1 "> ₹2,100.00</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3">
            <div class="card">
              <img src={image4} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">
                  Remedial Astrology For Delay In Marriage
                </h6>
                <p class=" text-center ">
                  <span class="card-text text-line text-center">₹5,400.00 </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 ">
            <div class="card">
              <img src={image5} class="card-img-top" alt="..." />
              <div class="card-body ">
                <h6 class="card-title text-center">
                  Spouse Search Name Report
                </h6>
                <p class=" text-center  marraige-prediction">
                  <span class="card-text text-line text-center">₹5,400.00 </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row px-auto">
          <div class="col-lg-3 py-4">
            <div class="card">
              <img src={image6} class="card-img-top" alt="..." />
              <div class="card-body  ">
                <h6 class="card-title text-center">
                Marital Problems Solutions
                </h6>
                <p class=" text-center ">
                  <span class="card-text text-line text-center">₹5,400.00 </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 py-4">
            <div class="card">
              <img src={image7} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">
                Spouse Search Name Report
                </h6>
                <p class=" text-center">
                  <span class="card-text text-line text-center">₹5,400.00 </span>{" "}
                  <span class="span-text ps-1 "> ₹2,100.00</span>
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 py-4">
            <div class="card">
              <img src={image8} class="card-img-top" alt="..." />
              <div class="card-body">
                <h6 class="card-title text-center">
                Vedic Matchmaking
                </h6>
                <p class=" text-center ">
                  <span class="card-text text-line text-center">₹5,400.00 </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 py-4 ">
            <div class="card">
              <img src={image9} class="card-img-top" alt="..." />
              <div class="card-body ">
                <h6 class="card-title text-center">
                How Will Be My Married Life
                </h6>
                <p class=" text-center">
                  <span class="card-text text-line text-center">₹5,400.00 </span>{" "}
                  <span class="span-text ps-1 "> ₹3,600.00</span>
                </p>
              </div>
            </div>
          </div>
        </div>
       <div class="text-center"><button type="button" class="btn  services-btn">VIEW MORE</button></div>
        
      </div>
    </>
  );
};
export default OurServices;
