import React from 'react';

const Resume = () => {
  const experiences = [
    {
      id: 1,
      title: 'Freelance',
      period: '2022-Present',
      role: 'Graphic Designer (Logo, Brand Identity, Social Media, etc.)',
      description: 'Provided creative design solutions for clients across various industries. Created brand identities, social media content, and marketing materials that helped clients establish strong visual presence and achieve their business goals.'
    },
    {
      id: 2,
      title: 'Etay',
      period: '2021-Present',
      role: 'Seller (Watercolor Illustrations & Merch Design Templates)',
      description: 'Designed and sold watercolor illustrations and merchandise design templates on online platforms. Created unique artistic content that resonated with customers and built a loyal following.'
    },
    {
      id: 3,
      title: 'PT Koncar Global Indonesia',
      period: '2021-2022',
      role: 'Junior Staff Of Industrial Engineering Team',
      description: 'Assisted in industrial engineering projects, including process optimization and efficiency improvements. Gained valuable experience in project management and technical problem-solving.'
    }
  ];

  return (
    <section className="resume">
      <div className="resume-left">
        <div className="section">
          <h3>Experience</h3>
          <div className="experience-accordion">
            {experiences.map((experience) => (
              <div key={experience.id} className="experience-item">
                <div className="experience-header">
                  <div className="experience-title-row">
                    <span className="experience-title">{experience.title}</span>
                    <span className="experience-period">{experience.period}</span>
                  </div>
                  <div className="experience-icon">+</div>
                </div>
                <div className="experience-content">
                  <div className="experience-details">
                    <span className="experience-role">{experience.role}</span>
                  </div>
                  <div className="experience-description">
                    <p>{experience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="resume-right">
        <div className="section">
          <h3>Expertise</h3>
          <div className="expertise-tags">
            <span className="expertise-tag">Video editing</span>
            <span className="expertise-tag">Packaging</span>
            <span className="expertise-tag">Poster</span>
            <span className="expertise-tag">Editorial</span>
            <span className="expertise-tag">Social Media</span>
          </div>
        </div>
        <div className="section">
          <h3>Hardskill</h3>
          <div className="skills">
            <div className="skill-icon">
              <span className="skill-label">Ai</span>
            </div>
            <div className="skill-icon">
              <span className="skill-label">Ps</span>
            </div>
            <div className="skill-icon">
              <span className="skill-label">Ae</span>
            </div>
            <div className="skill-icon">
              <span className="skill-label">Pr</span>
            </div>
          </div>
        </div>
        <div className="section">
          <h3>Softskill</h3>
          <div className="softskill-tags">
            <span className="softskill-tag">#Creativity</span>
            <span className="softskill-tag">#Teamwork</span>
            <span className="softskill-tag">#Time_Management</span>
            <span className="softskill-tag">#Flexibility</span>
            <span className="softskill-tag">#Communication</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;