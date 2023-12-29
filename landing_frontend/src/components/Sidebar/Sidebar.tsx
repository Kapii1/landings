import React from 'react';
import './Sidebar.css'; // Import the CSS file

interface SidebarProps {
  // Add any props if needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
      <div className="heading">Sidebar</div>
      <ul className="menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
