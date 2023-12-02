import { FaChevronLeft } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { SideMenu } from '../../components/SideMenu';
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Container } from "./styles";

import AOS from "aos";
import "aos/dist/aos.css";

export function SearchResults() {
  const { searchTerm } = useParams();
  const [searchResults, setSearchResults] = useState([])
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  function toggleProduct(productId) {
    try {
      navigate(`/product/${productId}`)
    } catch (error) {
      console.error("Erro ao tentar abrir a pagina desse produto.", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/products/title?searchTerm=${searchTerm}`);
        setSearchResults(response.data); // Armazena os resultados da busca no estado
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData(); // Chama a função assíncrona
  }, [searchTerm]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      easing: "ease-in-out", // Tipo de easing da animação
      once: true, // Animar apenas uma vez
    });
  }, [])

  return (
    <Container>
      <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <div className="container">
        <ButtonText onClick={handleBack} icon={FaChevronLeft} title="voltar" className="btnBack" />
        <div className="flexCard">
          {searchResults.map((result) => (
            <div key={result.id} className="card"
              data-aos="flip-right" data-aos-delay={`${result.id * 200}`}
              onClick={() => toggleProduct(result.id)}
            >
              <img src={`${api.defaults.baseURL}files/${result.thumbnailUrl}`} alt={`imagem ${result.title}`} />
              <div className="content">
                <h2>{result.title}</h2>
                <p>{result.description}</p>
                <span>{result.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </Container>
  )
}