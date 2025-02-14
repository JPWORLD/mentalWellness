export const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
    fontSize: '16px',
  },
  dark: {
    background: '#000000',
    color: '#ffffff',
    fontSize: '16px',
  },
  sepia: {
    background: '#f5deb3',
    color: '#5b3a29',
    fontSize: '16px',
  },
};

export const getTheme = (themeName) => {
  return themes[themeName] || themes.light;
};

export const setTheme = (themeName) => {
  const theme = getTheme(themeName);
  document.body.style.backgroundColor = theme.background;
  document.body.style.color = theme.color;
  document.body.style.fontSize = theme.fontSize;
};