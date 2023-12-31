import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { NotFound } from '../pages/NotFound';
import { SearchResults } from '../pages/SearchResults';

export function CustomerRoutes() {

  console.log("CustomerRoutes accessed");

  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/product/:id" element={< Product />} />
      <Route path="/search-results/:searchTerm" element={< SearchResults />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}