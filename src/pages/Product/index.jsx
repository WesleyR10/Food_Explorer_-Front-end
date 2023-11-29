//import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../../utils/roles';
import { api } from '../../services/api';
import { FaChevronLeft } from "react-icons/fa6";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Container } from "./styles"
import { Tag } from '../../components/Tag'
import { Footer } from '../../components/Footer';

export function Product() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalValue, setTotalValue] = useState(0);

  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  function handleBack() {
    navigate(-1)
  }

  function handleEditProduct() {
    navigate(`/edit/${params.id}`)
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

  function formatQuantity(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  function calculateTotalValue() {
    if (product) {
      const total = quantity * parseFloat(product.value.replace('R$', '').replace(',', '.')); // Convertendo o valor do produto para um número e multiplicando pela quantidade
      setTotalValue(total.toFixed(2)); // Atualiza o estado do valor total
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const productResponse = await api.get(`/products/${params.id}`);
        setProduct(productResponse.data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    calculateTotalValue();
  }, [quantity, product]);

  return (
    <Container>
      <Header />

      {product &&
        <div className='content'>
          <ButtonText onClick={handleBack} icon={FaChevronLeft} title="voltar" className="btnBack" />
          <div className='section1'>

            <img src={`${api.defaults.baseURL}files/${product.thumbnailUrl}`} alt={`imagem ${product.title}`} />

            <div className='section2'>
              <h1>{product.title}</h1>
              <p>{product.description}</p>

              {product.ingredients &&
                <div className='ingredient'>
                  {
                    product.ingredients.map(ingredient => (
                      <Tag key={ingredient} title={ingredient} />
                    ))
                  }
                </div>
              }
              {user.role === USER_ROLE.ADMIN ? <Button title="Editar prato" style={{ maxWidth: '175px' }} onClick={handleEditProduct} />
                :
                <div className="quantity">
                  <span>
                    <FiMinus onClick={decreaseQuantity} /> {formatQuantity(quantity)} <FiPlus onClick={increaseQuantity} />
                  </span>
                  <Button title={`incluir - R$ ${totalValue}`} />
                </div>
              }
            </div>
          </div>
        </div>
      }

      <div className='headFooterAbsolute'>
        <Footer />
      </div>

    </Container >
  )
}