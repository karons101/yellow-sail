import React, { useState, useEffect } from "react";
import './News.css'; //  CSS file for styling

function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    try {
      const apiKey = process.env.REACT_APP_NEWS_API_KEY; 
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="news-container">
      <h2>Latest News</h2>
      <div className="news-grid">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <div key={index} className="news-item">
              <img src={article.urlToImage} alt={article.title} className="news-image" />
              <h3 className="news-title">{article.title}</h3>
              <p className="news-source">{article.source.name}</p>
              <p className="news-description">{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
            </div>
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </div>
    </div>
  );
}

export default News;