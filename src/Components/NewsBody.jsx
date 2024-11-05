// import React, { useState, useEffect } from "react";
// import NewsCard from "./NewsCard";
// import "./NewsBody.css";
// import NewsCarousel from "./NewsCarousel.jsx";

// function NewsBody({ category }) {
//   const [article, setArticle] = useState([]);
//   const [visibleArticles,setVisibleArticles] = useState(9);
//   useEffect(() => {
//     let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
//       import.meta.env.VITE_API_KEY
//     }`;
//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Netork response was not ok");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         console.log(data);
//         const filteredArticles = data.articles.filter(news => 
//           !(news.title === "[Removed]" && news.description === "[Removed]")
//         );
        
//         setArticle(filteredArticles);
//       });
//   }, [category]);

//   const handleVisibleArticles = ()=>{
//     setVisibleArticles(prev => prev + 9);
//   }


//   return (
//     <div className="main">
//         <div className="carousel">
//           <NewsCarousel articles = {article}/>
//         </div>
//       <div className="main-cards  box-container">
//         <div className="section-heading">
//           <span>Browse and read the latest stuff</span>
//           <h2>Latest Stories</h2>
//         </div>
//         <div className="articles-map ">
//           {article.slice(0,visibleArticles).map((news, index) => {
//             return (
//               <NewsCard
//                 key={index}
//                 src={news.urlToImage}
//                 title={news.title}
//                 description={news.description}
//                 url={news.url}
//                 date={news.publishedAt}
//               />
//             );
//           })}
//           {visibleArticles < article.length &&
//           <button className="load-more" onClick={handleVisibleArticles}><p className="load-more-txt d-inline-block" >show more articles</p> </button>}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewsBody;

import React, { useState, useEffect, useRef } from "react";
import NewsCard from "./NewsCard";
import "./NewsBody.css";
import NewsCarousel from "./NewsCarousel.jsx";

function NewsBody({ category }) {
  const [article, setArticle] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(9);
  const [heading, setHeading] = useState("Latest Stories");

  // Create a ref for the "main-cards" section
  const mainCardsRef = useRef(null);

  useEffect(() => {
    // Update the heading based on the category
    if (category === "general") {
      setHeading("Latest Stories");
    } else {
      setHeading(category.charAt(0).toUpperCase() + category.slice(1));
    }

    // Fetch news articles
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        
        const filteredArticles = data.articles.filter(
          (news) => !(news.title === "[Removed]" && news.description === "[Removed]")
        );
        setArticle(filteredArticles);
      });

    // Scroll to the "main-cards" section whenever the category changes
    if (mainCardsRef.current) {
      mainCardsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [category]);

  const handleVisibleArticles = () => {
    setVisibleArticles((prev) => prev + 6);
  };

  return (
    <div className="main">
      <div className="carousel">
        <NewsCarousel articles={article} />
      </div>
      <div className="main-cards box-container" ref={mainCardsRef}>
        <div className="section-heading">
          <span>Browse and read the latest stuff</span>
          <h2>{heading}</h2> {/* Dynamically update heading */}
        </div>
        <div className="articles-map">
          {article.slice(0, visibleArticles).map((news, index) => {
            return (
              <NewsCard
                key={index}
                src={news.urlToImage}
                title={news.title}
                description={news.description}
                url={news.url}
                date={news.publishedAt}
              />
            );
          })}
          {visibleArticles < article.length && (
            <button className="load-more" onClick={handleVisibleArticles}>
              <p className="load-more-txt d-inline-block">show more articles</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewsBody;
