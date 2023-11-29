import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { New } from '../pages/New'
import { EditProduct } from '../pages/EditProduct'
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/new" element={< New />} />
      <Route path="/product/:id" element={< Product />} />
      <Route path="/edit/:id" element={< EditProduct />} />


      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}