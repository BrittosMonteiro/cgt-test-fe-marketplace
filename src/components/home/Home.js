import * as React from "react";
import { Link } from "react-router-dom";

import img_path_a from "../../assets/a.jpg";
import img_path_b from "../../assets/b.jpg";

export default function Home() {
  return (
    <div>
      {/* <div className="row m-0">Welcome to our shop!</div> */}
      <div className="row py-4 hover-shadow">
        <div className="col-sm-12 col-md-6 mb-4">
          <span className="fw-black fs-1 bg-danger text-white p-2 shadow">
            ON SALE
          </span>
          <p className="fs-5 my-4 fw-light">
            You might probably be very interested in the new{" "}
            <span className="fw-bold fs-4">astronaut</span> design!
          </p>
          <Link to="/product/1" className="btn btn-md btn-success rounded-0">
            Check it here!
          </Link>
        </div>
        <div className="col-sm-12 col-md-6">
          <img src={img_path_a} alt="" className="img-thumbnail rounded-sm" />
        </div>
      </div>

      <hr />

      <div className="row py-4">
        <div className="col-sm-12 col-md-6 mb-4">
          <img src={img_path_b} alt="" className="img-thumbnail" height={350} style={{maxHeight: '350px'}}/>
        </div>
        <div className="col-sm-12 col-md-6">
          <span className="fw-black fs-1 bg-primary text-white p-2 shadow">
            MOST SEARCHED
          </span>
          <p className="fs-5 mt-4 mb-0 fw-light">
            It's been our most search art of the{" "}
            <span className="fw-bold fs-4">week!</span>
          </p>
          <p className="fs-5 mb-4 mt-0 fw-light">
            Take your time to have a look!
          </p>
          <Link to="/product/2" className="btn btn-md btn-success rounded-0">
            Check it here!
          </Link>
        </div>
        {/* <p>
          You are probably interested in <Link to={"/product/1"}>A</Link>.
        </p>
        <p>
          Check out the newest product <Link to={"/product/2"}>B</Link>!
        </p> */}
      </div>
    </div>
  );
}
