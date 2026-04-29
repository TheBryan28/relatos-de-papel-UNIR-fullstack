import ThemeToggle from './components/ui/ThemeToggle'
import { AuthProvider } from './contexts/Auth.Context'
import { ThemeProvider } from './contexts/Theme.Context'
import { CartProvider } from './contexts/Cart.Context'
import Login from './modules/Auth/pages/Login'
import Signup from './modules/Auth/pages/Signup'
import Cart from './modules/Auth/pages/Cart'


function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <ThemeToggle />
          <Signup />
          <Login />
          <CartProvider>
            {}
            <Cart /> 
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
