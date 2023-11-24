import { Container } from "./styles";
import { useState, useEffect } from 'react'
import { api } from '../../../services/api'
import SlideComponent from "../SlideComponent";
//import { SlideCard } from "../SlideCard";


export function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchCategory() {
      const response = await api.get(`/category`)
      setCategories(response.data);
    }
    fetchCategory()
  }, [])

  return (
    <Container>
      {categories && categories.map(category => (
        <div key={category.id}>
          <h1>{category.name}</h1>
          <SlideComponent products={category.products} />
        </div>))
      }
    </Container>
  )
}