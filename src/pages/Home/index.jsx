import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from "./styles";
import { Header } from '../../components/Header'
import { Banner } from "../../components/Banner";
import { Categories } from "../../components/common/Categories";
import { Footer } from "../../components/Footer";
import { SideMenu } from '../../components/SideMenu';

export function Home() {
  const [categories, setCategories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [productQuantity, setProductQuantity] = useState(0);

  const handleQuantityChange = (quantity) => {
    setProductQuantity((prevQuantity) => prevQuantity + quantity);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryResponse = await api.get('/category');
        setCategories(categoryResponse.data);

        const favoritesResponse = await api.get(`/favorites`);
        const favoritesFromAPI = favoritesResponse.data.map(favorite => favorite.product_id);
        setFavorites(favoritesFromAPI);
        localStorage.setItem('@user:favorites', JSON.stringify(favoritesFromAPI));


      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);

  const handleFavoriteToggle = async (productId) => {
    try {
      let updatedFavorites = [...favorites];
      const index = updatedFavorites.indexOf(productId);

      if (index !== -1) {
        await api.delete(`/favorites/${productId}`);
        updatedFavorites.splice(index, 1);
      } else {
        await api.post(`/favorites/${productId}`);
        updatedFavorites.push(productId);
      }

      setFavorites(updatedFavorites);
      localStorage.setItem('@user:favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error("Erro ao alterar os favoritos:", error);
    }
  };

  return (
    <main>
      <Container>
        <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

        <Header productQuantity={productQuantity} onOpenMenu={() => setMenuIsOpen(true)} />
        <Banner />
        <Categories categories={categories} handleFavoriteToggle={handleFavoriteToggle} onQuantityChange={handleQuantityChange} />
        <Footer />
      </Container>
    </main>
  )
}