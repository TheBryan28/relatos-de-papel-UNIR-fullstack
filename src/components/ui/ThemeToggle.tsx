import { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme.Context";

const ThemeToggle = () => {
  const theme = useContext(ThemeContext)
  const handleClick = () => {
    theme.toggleTheme()
  }
  return (<button
      onClick={handleClick}
      className="rounded-full border border-(--input-border) bg-(--input-bg) p-2 text-(--txt-color) transition hover:bg-(--panel)"
    >
      {theme.theme === "light" ? "🌞" : "🌜"}
    </button>
  )
}

export default ThemeToggle
