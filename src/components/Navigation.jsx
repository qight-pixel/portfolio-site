import React from 'react';

const Navigation = ({ activeTab, setActiveTab, scrollToSection }) => {
  const tabs = [
    { id: 'about', label: 'About me' },
    { id: 'resume', label: 'Resume' },
    { id: 'work', label: 'Work' }
  ];

  return (
    <nav className="navigation">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`nav-button ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => {
            setActiveTab(tab.id);
            scrollToSection(tab.id);
          }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;