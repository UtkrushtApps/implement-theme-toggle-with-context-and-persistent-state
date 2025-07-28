import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getPreferredTheme } from '../utils/theme';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  // Incomplete: does not handle initial theme, localStorage sync, or body class
  const [theme, setTheme] = useState('light');

  // Incomplete: theme switching and persistence logic needed

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
