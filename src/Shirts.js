import React, { useState } from "react";

function Shirts(props) {
  const [showAltImage, setShowAltImage] = useState(false);

  return (
    <div className="col-3 mt-3">
      <div className="card card-color border-5 rounded-0 text-center">
        <img
          className={`card-img-top ${showAltImage ? "card-img-alt" : ""}`}
          src={showAltImage ? props.shirtsss.altimg : props.shirtsss.img}
          alt="shirt"
          onMouseEnter={() => setShowAltImage(true)}
          onMouseLeave={() => setShowAltImage(false)}
        />
        <div
          className={`card-body card-color text-white ${
            showAltImage ? "hovered" : ""
          }`}
        >
          <div className="card-title card-title-font">
            {props.shirtsss.name}
          </div>

          {props.shirtsss.quantity === 0 ? (
            <div className="card-text">
              <span className="card-sold">SOLD OUT</span>
            </div>
          ) : (
            <div className="card-text">
              <span className="card-title-price">{props.shirtsss.price}</span>
              <span className="card-title-orig">
                <strike>{props.shirtsss.origPrice}</strike>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shirts;
