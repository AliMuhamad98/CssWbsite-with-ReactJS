import React from "react";
import "./artical.css";

function Artical({ imgUrl, date, title }) {
  return (
    <div className="gpt3__blog-container_artical">
      <div className="gpt3__blog-container_artical-image">
        <img src={imgUrl} alt="blogImage" />
      </div>
      <div className="gpt3__blog-container_artical-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Artical;
