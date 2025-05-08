// src/router/Router.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Housing from '../pages/Housing';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/housing/:id" element={<Layout><Housing /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  );
}

export default AppRouter;