import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
