import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('themeName');
    if (storedTheme) {
      setThemeName(storedTheme);
      document.body.classList.add(storedTheme);
    } else {
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const initialTheme = darkMediaQuery.matches ? 'dark' : 'light';
      setThemeName(initialTheme);
      document.body.classList.add(initialTheme);

      darkMediaQuery.addEventListener('change', (e) => {
        const newTheme = e.matches ? 'dark' : 'light';
        setThemeName(newTheme);
        document.body.classList.replace(e.matches ? 'light' : 'dark', newTheme);
      });
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = themeName === 'dark' ? 'light' : 'dark';
    localStorage.setItem('themeName', newTheme);
    document.body.classList.replace(themeName, newTheme);
    setThemeName(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
