/* eslint-disable react/prop-types */
import { Container } from "./styles";
import { Button } from "../../Button";
import { CiHeart } from "react-icons/ci";
import { FiPlus, FiMinus } from "react-icons/fi";
import { api } from '../../../services/api'

export function SlideCard({ product }) {

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
        <span className="like"><CiHeart /></span>
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