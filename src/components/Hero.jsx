import React from 'react';

const Hero = () => {
  const tags = [
    '#Video',
    '#Social_Media',
    '#Poster',
    '#Illustration',
  ];

  return (
    <section className="hero">
      <div className="hero-left">
        <div className="black-arrow"></div>
        <div className="design-icon">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="hero-right">
        <div className="portfolio-title">
          <div className="portfolio-text">
            {'PORTFOLIO'.split('').map((letter, index) => (
              <span key={index} className="letter" style={{ '--delay': index * 0.1 }}>
                {letter}
              </span>
            ))}
          </div>
          <span className="year">2026</span>
        </div>
      </div>
      <div className="black-rectangles">
        <div className="black-rectangle long"></div>
        <div className="black-rectangle short"></div>
      </div>
    </section>
  );
};

export default Hero;