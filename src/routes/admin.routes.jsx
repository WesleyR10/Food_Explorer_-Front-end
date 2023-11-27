import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { NotFound } from '../pages/NotFound';
import { New } from '../pages/New'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/new" element={< New />} />
      <Route path="/product/:id" element={< Product />} />


      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}