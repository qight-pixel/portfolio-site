import React from 'react';

const Work = ({ onProjectSelect }) => {
  const projects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      category: '#Branding',
      description: 'Complete brand identity design for a tech startup, including logo, color palette, and brand guidelines.',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20brand%20identity%20design%20with%20logo%20and%20color%20palette&image_size=landscape_16_9'
    },
    {
      id: 2,
      title: 'Social Media Campaign',
      category: '#Social_Media',
      description: 'Social media content strategy and design for a fashion brand, including Instagram posts and stories.',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=social%20media%20design%20for%20fashion%20brand%20with%20modern%20aesthetic&image_size=landscape_16_9'
    },
    {
      id: 3,
      title: 'Packaging Design',
      category: '#Packaging',
      description: 'Eco-friendly packaging design for a sustainable skincare brand, focusing on minimalism and sustainability.',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=eco-friendly%20packaging%20design%20for%20skincare%20products&image_size=landscape_16_9'
    },
    {
      id: 4,
      title: 'Poster Design',
      category: '#Poster',
      description: 'Event poster design for a music festival, featuring bold typography and vibrant colors.',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20music%20festival%20poster%20design%20with%20bold%20typography&image_size=landscape_16_9'
    },
    {
      id: 5,
      title: '3D Motion Graphic',
      category: '#3D_&_Motion_Graphic',
      description: '3D animated explainer video for a tech product launch, showcasing product features in an engaging way.',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3D%20motion%20graphic%20animation%20for%20tech%20product&image_size=landscape_16_9'
    }
  ];

  return (
    <section className="work">
      <h2>My Work</h2>
      <div className="accordion">
        {projects.map((project) => (
          <div key={project.id} className="accordion-item" onClick={() => onProjectSelect(project)}>
            <div className="accordion-header">
              <div className="accordion-title">
                <span className="project-title">{project.title}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <div className="accordion-icon">+</div>
            </div>
            <div className="accordion-content">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-description">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;