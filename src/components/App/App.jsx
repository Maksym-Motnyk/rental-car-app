import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import CatalogPage from '../../pages/CatalogPage/CatalogPage';
import Navigation from '../Navigation/Navigation';
import CatalogPageDetails from '../../pages/CatalogPageDetails/CatalogPageDetails';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:catalogId" element={<CatalogPageDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
