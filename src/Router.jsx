import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import HousingPage from './pages/HousingPage/HousingPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'

export default function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/logement/:id" element={<HousingPage />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/a-propos.html" element={<Navigate to="/a-propos" replace />} />
        <Route path="/fiche-logement.html" element={<Navigate to="/" replace />} />
        <Route path="/404.html" element={<Navigate to="/404" replace />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
