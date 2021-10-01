import { Container } from "./style";
import ListProducts from "./../../components/ListProducts/ListProducts";
import { Header } from "../../components/Header/Header";

export const Home = () => {
  return (
    <Container>
      <Header />
      <ListProducts />
    </Container>
  );
};

export default Home;
