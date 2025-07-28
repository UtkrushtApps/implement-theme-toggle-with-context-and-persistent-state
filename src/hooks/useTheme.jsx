import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useTheme = () => {
  // Incomplete: actual consumption and expected shape required
  return useContext(ThemeContext);
};

export default useTheme;
