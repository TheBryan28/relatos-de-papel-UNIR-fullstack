import { useContext } from 'react';
import { ThemeContext } from '../../state/contexts/Theme.Context';
import HeaderButton from './HeaderButton';
import { FaRegLightbulb } from 'react-icons/fa6';
import { FaLightbulb } from 'react-icons/fa6';

const ThemeToggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.toggleTheme();
  };
  return (
    <HeaderButton id="theme-toggle-button" onClick={handleClick} ariaLabel="change theme">
      <span className="text-lg">
        {theme.theme === 'light' ? <FaRegLightbulb /> : <FaLightbulb />}
      </span>
    </HeaderButton>
  );
};

export default ThemeToggle;
