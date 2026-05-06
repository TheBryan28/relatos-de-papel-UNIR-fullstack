import { AuthProvider } from './state/contexts/Auth.Context';
import { ThemeProvider } from './state/contexts/Theme.Context';
import { CartProvider } from './state/contexts/Cart.Context';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <MainRouter />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
