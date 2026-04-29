import { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme.Context';
import HeaderButton from './HeaderButton';

const ThemeToggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.toggleTheme();
  };
  return (
    <HeaderButton onClick={handleClick} ariaLabel="Cambiar tema">
      <span className="text-lg">{theme.theme === 'light' ? '🌞' : '🌜'}</span>
    </HeaderButton>
  );
};

export default ThemeToggle;
