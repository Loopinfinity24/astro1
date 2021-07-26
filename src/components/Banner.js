import React from "react";


import "../styles/Banner.scss";

const Banner = () => {
  return (
    <div class="container-fluid banner py-5">
      <div class="row">
        <div class="col-lg-4 banner-colum-1 text-white py-5 ms-5">
          <p className="gemstone">Gemstones </p>
          <h3>New Collection</h3>
          <hr class="horz-line" />
          <hr class="horz-line" />
          <p className="gemstone-text">
            Gemstones that attracts luck <br /> and success
          </p>
          <div>
            <button type="button" class="btn btn-outline-success">
              view collection
            </button>
          </div>
        </div>
        <div class="col-lg-5 mx-auto card-bg">
        
        {/*
          <div class="card">
            <div class="card-body">
              <p className="card-text text-center">Get free counselling</p>
            <form>
  <div class="row mb-3">
    <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-10">
      <input type="Name" class="form-control" id="inputEmail3" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputGender3" class="col-sm-2 col-form-label">Gender</label>
    <div class="col-sm-10">
      <input type="gender" class="form-control" id="inputGender3" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputMobile3" class="col-sm-2 col-form-label">Mobile</label>
    <div class="col-sm-10">
      <input type="mobile" class="form-control" id="inputMobile3" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputDob3" class="col-sm-2 col-form-label">D.O.B</label>
    <div class="col-sm-10">
      <input type="dob" class="form-control" id="inputDob3" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputTob3" class="col-sm-2 col-form-label">T.O.B</label>
    <div class="col-sm-10">
      <input type="tob" class="form-control" id="inputTob3" />
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputBirthPlace" class="col-sm-2 col-form-label">Birthplace</label>
    <div class="col-sm-10">
      <input type="birthplace" class="form-control" id="inputBirthPlace" />
    </div>
  </div>
 
  <div class="input-group">
  <label for="inputBirthPlace" class="col-sm-2 col-form-label">Concern</label>
  <textarea class="form-control" aria-label="With textarea"></textarea>
</div>
<div className="text-center py-2">
<button type="button" class="btn btn-secondary ms-5">Submit</button>
</div>
  
</form>




            </div>
          </div>
       */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
