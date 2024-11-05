import React, { useState, useEffect } from "react";
import "./NewsCarousel.css";

function NewsCarousel({ articles }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [randomArticles, setRandomArticles] = useState([]);

  useEffect(() => {
    // Filter out articles with "[Removed]" content or without a valid image URL
    const filteredArticles = articles.filter((news) =>
      !(news.title === "[Removed]" && news.description === "[Removed]") && news.urlToImage
    );

    // Select 3 random articles from the filtered list
    if (filteredArticles.length > 0) {
      const shuffled = [...filteredArticles].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      setRandomArticles(selected);
    }
  }, [articles]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === randomArticles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? randomArticles.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-slidess"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {randomArticles.map((article, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={article.urlToImage || "default_image_url_here"}
              alt={article.title || "Default Image"}
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h3>{article.title}</h3>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <button className="read-more-btn">Read More</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Vertical Dots as Indicators */}
      <div className="carousel-indicatorss">
        {randomArticles.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>

     
    </div>
  );
}

export default NewsCarousel;
