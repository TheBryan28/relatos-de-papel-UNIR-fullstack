import ThemeToggle from './components/ui/ThemeToggle'
import { AuthProvider } from './contexts/Auth.Context'
import { ThemeProvider } from './contexts/Theme.Context'
import Login from './modules/Auth/pages/Login'
import Signup from './modules/Auth/pages/Signup'

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <ThemeToggle />
          <Signup />
          <Login />
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
