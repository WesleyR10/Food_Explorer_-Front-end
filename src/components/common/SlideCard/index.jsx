/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Button } from "../../Button";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";
import { TiPencil } from "react-icons/ti";
import { api } from '../../../services/api'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/auth';
import { USER_ROLE } from '../../../../utils/roles';


export function SlideCard({ product, handleFavoriteToggle, onQuantityChange }) {
  const [favorites, setFavorites] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const isFavorite = favorites.includes(product.id);

  const { user } = useAuth();
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

  async function toggleEdit(productId) {
    try {
      navigate(`/edit/${productId}`)
    } catch (error) {
      console.error("Erro ao tentar abrir a pagina desse produto.", error);
    }
  }

  function formatQuantity(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  function increaseQuantity() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function decreaseQuantity() {
    setQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      } else {
        return prevQuantity;
      }
    });
  }

  function handleProductQuantity() {
    onQuantityChange(quantity);
  }

  return (
    <Container>
      <section
        key={product.id}
      >
        <div className="card">
          {user.role === USER_ROLE.ADMIN ? <span className="edit" onClick={() => toggleEdit(product.id)} > <TiPencil /> </span> : <span className="like" onClick={() => toggleFavorite(product.id)} > {isFavorite ? <FaHeart /> : <CiHeart />} </span>}
          <img src={`${api.defaults.baseURL}files/${product.thumbnailUrl}`} alt={product.title} onClick={() => toggleProduct(product.id)} />
          <p className="title">{product.title}</p>
          <p className="paragraph">{product.description}</p>
          <span className="value">{product.value}</span>

          {user.role === USER_ROLE.ADMIN ? ""
            :
            <div className="quantity">
              <span>
                <FiMinus onClick={decreaseQuantity} /> {formatQuantity(quantity)} <FiPlus onClick={increaseQuantity} />
              </span>
              <Button title="Incluir" onClick={handleProductQuantity} />
            </div>
          }
        </div>
      </section>
    </Container >
  )
}