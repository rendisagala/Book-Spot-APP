import React from "react";
import backgroundImage from "../assets/image/book-bg.jpg";

export default function Hero() {
  return (
    <div>
      <div className="card text-light ">
        <img
          src={backgroundImage}
          className="card-img "
          alt="backgroundImage"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <h5 className="card-title display-3 fw-bolder mb-0">BOOK SPOT</h5>
          <p className="card-text lead">
            “Think before you speak. Read before you think.” - Fran Lebowitz
          </p>
        </div>
      </div>
    </div>
  );
}
