import CartList from "../../components/CartList/CartList";
import { Container } from "./style";
import { Header } from "../../components/Header/Header";

export const BuyCart = () => {
  return (
    <Container>
      <Header />
      <CartList />
    </Container>
  );
};

export default BuyCart;
