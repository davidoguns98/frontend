import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          voluptate in eaque tenetur tempora aliquam quia repudiandae corporis
          sapiente enim eum corrupti id obcaecati expedita eos illum incidunt
          placeat laborum, quaerat voluptates sit blanditiis accusamus. Magni
          veniam asperiores doloribus quae.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          consectetur natus aliquam fuga deserunt earum totam alias deleniti
          aliquid accusantium!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
