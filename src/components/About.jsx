import React from 'react';

const About = () => {
  return (
    <section className="about">
      <div className="about-left">
        <div className="profile-image">
          <div className="video-placeholder">
            <video autoPlay loop muted preload="auto" playsinline className="background-video">
              <source src="/fast.mp4" type="video/mp4"/>
            </video>
            <div className="image-content">
              <h2>My name is Qight.</h2>
              <p>I consider myself as a hardworking artist who constantly seeks new skills and explores different styles to deliver the best results in my projects.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-right">
        <div className="section">
          <h3>Introduction</h3>
          <p>I'm crafting on merging narratives and interactive emotional expression,making every frame not just an image, but an explorable sensory interface.Also being dedicated to creating visual works that combine both visual impact and emotional depth.  </p>
        </div>
      </div>
    </section>
  );
};

export default About;