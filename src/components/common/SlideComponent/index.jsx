/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { SlideCard } from "../SlideCard";
import { Container } from "./styles";


export function SlideComponent({ products, handleFavoriteToggle, onQuantityChange }) {
  let slideCount = 0;

  if (products.length >= 5) {
    slideCount = 5
  } else if (products) {
    slideCount = products.length
  }

  return (
    <>
      <div>
        <Splide
          options={{
            type: "loop",
            perPage: slideCount,
            perMove: 1,
            width: 'auto',
            pagination: false,
            arrows: products.length > 4 ? true : false,
            drag: products.length > 4 ? true : false,
            gap: '1.5rem',
            breakpoints: {
              1700: {
                perPage: slideCount >= 4 ? 4 : slideCount,
                width: slideCount >= 4 ? 1400 : 980,
                arrows: products.length > 4 ? true : false,
                drag: products.length > 4 ? true : false,
              },
              1400: {
                perPage: slideCount >= 3 ? 3 : slideCount,
                width: slideCount >= 3 ? 980 : 480,
                arrows: products.length > 3 ? true : false,
                drag: products.length > 3 ? true : false,
              },
              980: {
                perPage: slideCount >= 2 ? 2 : slideCount,
                width: slideCount >= 2 ? 640 : 480,
                arrows: products.length > 2 ? true : false,
                drag: products.length > 2 ? true : false,
              },
              650: {
                perPage: slideCount >= 2 ? 2 : slideCount,
                width: slideCount >= 2 ? 500 : 480,
                arrows: products.length > 2 ? true : false,
                drag: products.length > 2 ? true : false,
              },
              520: {
                perPage: 1,
                width: 300,
                arrows: products.length > 1 ? true : false,
                drag: products.length > 1 ? true : false,
              },
              300: {
                width: 250,
              },
            },
          }}
        >
          {products.map(product => (
            <SplideSlide key={product.id}>
              <Container>
                <SlideCard product={product} handleFavoriteToggle={handleFavoriteToggle} onQuantityChange={onQuantityChange} />
              </Container>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
}

export default SlideComponent;