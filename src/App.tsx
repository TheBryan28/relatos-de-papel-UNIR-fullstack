import { AuthProvider } from './contexts/Auth.Context';
import { ThemeProvider } from './contexts/Theme.Context';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './routers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <MainRouter />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
