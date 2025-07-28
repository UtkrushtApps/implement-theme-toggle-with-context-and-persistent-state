import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import useTheme from '../hooks/useTheme';

const Dashboard = () => {
  const { theme } = useTheme();
  // Incomplete: className or structure for styling/theme not fully applied
  return (
    <div className={`dashboard ${theme}`}>
      <h1>Dashboard</h1>
      <ThemeToggle />
      <div className="info-section">
        <p>Current theme: {theme}</p>
      </div>
    </div>
  );
};

export default Dashboard;
