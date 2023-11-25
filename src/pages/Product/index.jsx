//import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
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

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
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

              <div className="quantity">
                <span>
                  <FiMinus /> 01 <FiPlus />
                </span>
                <Button title={`incluir - R$ ${product.value}`} />
              </div>
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