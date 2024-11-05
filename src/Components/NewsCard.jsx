import React, { useEffect, useState } from "react";
import default_img from './assests/Default_article_image.jpg'

function NewsCard({ src, title, description, date, url }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="card-container ">
      <div
        className="card
      "
        style={{ width: "370px", border: "none" }}
      >
        <img src={src? src : default_img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0, 50) + "..."}</h5>
          <p className="card-date">{formatDate(date)}</p>
          <p className="card-text">
            {description
              ? description
              : "This information is about the avent that occurred read more at the article page"}
          </p>
          <a href={url} className="btn p-0 d-flex align-items-center">
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="rgba(255,79,105,1)"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
