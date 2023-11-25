/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Button } from "../../Button";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { api } from '../../../services/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function SlideCard({ product, handleFavoriteToggle }) {
  const [favorites, setFavorites] = useState([]);
  const isFavorite = favorites.includes(product.id);

  const navigate = useNavigate();

  useEffect(() => {
    setFavorites([]); // Carregar os favoritos da API aqui usando setFavorites
  }, []);

  async function toggleFavorite(productId) {
    try {
      await handleFavoriteToggle(productId);
      setFavorites((prevFavorites) => {
        if (prevFavorites.includes(productId)) {
          return prevFavorites.filter((favId) => favId !== productId);
        } else {
          return [...prevFavorites, productId];
        }
      });
    } catch (error) {
      console.error("Erro ao alterar os favoritos:", error);
    }
  }

  async function toggleProduct(productId) {
    try {
      navigate(`product/${productId}`)
    } catch (error) {
      console.error("Erro ao tentar abrir a pagina desse produto.", error);
    }
  }

  return (
    <Container>
      <section
        key={product.id}
        style={{
          width: '300px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingLeft: "1rem",
          gap: "0.5rem"
        }}
      >
        <span className="like" onClick={() => toggleFavorite(product.id)} > {isFavorite ? <FaHeart /> : <CiHeart />}</span>
        <img src={`${api.defaults.baseURL}files/${product.thumbnailUrl}`} alt={product.title} onClick={() => toggleProduct(product.id)} />
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