/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Button } from "../../Button";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { api } from '../../../services/api'
import { useState, useEffect } from 'react'

export function SlideCard({ product }) {
  const [favorites, setFavorites] = useState([]);

  async function fetchUserFavorites() {
    try {
      const response = await api.get(`/favorites`);
      const favoritesFromAPI = response.data.map(favorite => favorite.product_id);

      setFavorites(favoritesFromAPI);
      localStorage.setItem('@user:favorites', JSON.stringify(favoritesFromAPI));
    } catch (error) {
      console.error("Erro ao buscar os favoritos:", error);
    }
  }

  async function toggleFavorite(productId) {
    try {
      let updatedFavorites = [...favorites]; // Criando uma cópia do array de favoritos

      const index = updatedFavorites.indexOf(productId);
      if (index !== -1) {
        await api.delete(`/favorites/${productId}`);
        updatedFavorites.splice(index, 1); // Removendo o item se já estiver nos favoritos

        // Removendo o item do localStorage se foi removido do banco de dados
        const storedFavorites = JSON.parse(localStorage.getItem('@user:favorites')) || [];
        const storedIndex = storedFavorites.indexOf(productId);
        if (storedIndex !== -1) {
          const newStoredFavorites = [...storedFavorites.slice(0, storedIndex), ...storedFavorites.slice(storedIndex + 1)];
          localStorage.setItem('@user:favorites', JSON.stringify(newStoredFavorites));
        }
      } else {
        await api.post(`/favorites/${productId}`);
        const storedFavorites = JSON.parse(localStorage.getItem('@user:favorites')) || [];

        if (!storedFavorites.includes(productId)) {
          updatedFavorites.push(productId); // Adicionando o item se não estiver nos favoritos
          localStorage.setItem('@user:favorites', JSON.stringify([...storedFavorites, productId]));
        }
      }

      setFavorites(updatedFavorites);
    } catch (error) {
      console.error("Erro ao alterar os favoritos:", error);
    }
  }


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('@user:favorites')) || [];

    if (storedFavorites.length === 0) {
      fetchUserFavorites();
    } else {
      setFavorites(storedFavorites);
    }
  }, []);


  return (
    <Container>
      <section
        key={product.id}
        style={{
          width: '304px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingLeft: "1rem",
          gap: "0.5rem"
        }}
      >
        <span className="like" onClick={() => toggleFavorite(product.id)} > {favorites.includes(product.id) ? <FaHeart /> : <CiHeart />}</span>
        <img src={`${api.defaults.baseURL}files/${product.thumbnailUrl}`} alt={product.title} />
        <p className="title">{product.title}</p>
        <p className="paragraph">{product.description}</p>
        <span className="value">R$ {product.value}</span>
        <div className="quantity">
          <span>
            <FiMinus /> 01 <FiPlus />
          </span>
          <Button title="Incluir" />
        </div>
      </section>
    </Container >
  )
}