import { Route, Routes } from 'react-router-dom';
import { Page404 } from '../pages/Page404';
import { Home } from '../pages/Home';

export function RoutesFunction() {
  return (
    <Routes>
      {/* A rota(URL) "/" ira renderizar a página Home */}
      <Route path="/" element={<Home />} />

      {/* Qualquer rota(URL) que não estiver configurada em routes.js ira renderizar a página de erro Page404  */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
