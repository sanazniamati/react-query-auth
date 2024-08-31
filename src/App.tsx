import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import HomePage from './Pages/Home';
import AboutPage from './Pages/About';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClientStore from './lib/store';
import DashboardPage from './Pages/dashboard';
import InfoPage from './Pages/dashboard/info';
import LoginPage from './Pages/auth/login';
import RegisterPage from './Pages/auth/register';

const App = () => {
  return (
    <QueryClientProvider client={queryClientStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />}>
              <Route path="info" element={<InfoPage />} />
            </Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
