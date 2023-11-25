/* eslint-disable react/prop-types */
import { Container } from "./styles";
import SlideComponent from "../SlideComponent";

export function Categories({ categories, handleFavoriteToggle }) {
  return (
    <Container>
      {categories && categories.map(category => (
        <div key={category.id}>
          <h1>{category.name}</h1>
          <SlideComponent products={category.products} handleFavoriteToggle={handleFavoriteToggle} />
        </div>))
      }
    </Container>
  )
}