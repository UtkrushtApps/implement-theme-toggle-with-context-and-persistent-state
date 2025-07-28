import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '../hooks/useTheme';

const ThemeToggle = ({ className }) => {
  const { theme, setTheme } = useTheme();
  // Incomplete: actual handler function logic needed
  const handleToggle = () => {
    // TODO: implement toggle and sync logic
  };
  return (
    <button className={className} aria-label="Toggle theme" onClick={handleToggle}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

ThemeToggle.propTypes = {
  className: PropTypes.string,
};

ThemeToggle.defaultProps = {
  className: '',
};

export default ThemeToggle;
