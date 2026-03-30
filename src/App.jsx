import { Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import MainLayout from './components/Layout/MainLayout';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import SitemapPage from './pages/SitemapPage';
import ContentPage from './pages/ContentPage';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="novini" element={<NewsPage />} />
          <Route path="kontakti" element={<ContactPage />} />
          <Route path="karta-na-saita" element={<SitemapPage />} />
          <Route path="razdel/:slug" element={<ContentPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
