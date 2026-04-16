import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import store from './core/store';
import ThemeProvider from './core/theme/ThemeProvider';
import AppRoutes from './core/routes/AppRoutes';

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3500,
            style: {
              borderRadius: '12px',
              fontSize: '14px',
              fontFamily: 'Poppins, sans-serif',
            },
          }}
        />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;