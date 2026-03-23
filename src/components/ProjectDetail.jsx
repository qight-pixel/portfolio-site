import React from 'react';

const ProjectDetail = ({ project, onBack }) => {
  return (
    <section className="project-detail">
      <button className="back-button" onClick={onBack}>
        ← Back to Home
      </button>
      
      <div className="project-content">
        <h2>{project.title}</h2>
        <span className="project-category">{project.category}</span>
        
        <div className="project-image-large">
          <img src={project.image} alt={project.title} />
        </div>
        
        <div className="project-description-detail">
          <p>{project.description}</p>
          
          <div className="project-features">
            <h3>Project Features</h3>
            <ul>
              <li>Modern design approach</li>
              <li>Responsive layout</li>
              <li>High-quality visuals</li>
              <li>Professional branding</li>
            </ul>
          </div>
          
          <div className="project-tools">
            <h3>Tools Used</h3>
            <div className="tools-list">
              <span className="tool-tag">Adobe Photoshop</span>
              <span className="tool-tag">Adobe Illustrator</span>
              <span className="tool-tag">Figma</span>
              <span className="tool-tag">Adobe XD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;