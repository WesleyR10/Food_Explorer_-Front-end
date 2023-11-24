import { Container } from "./styles";
import { Header } from '../../components/Header'
import { Banner } from "../../components/Banner";
import { Categories } from "../../components/common/Categories";

export function Home() {
  return (
    <main>
      <Container>
        <Header />
        <Banner />
        <Categories />
      </Container>
    </main>
  )
}