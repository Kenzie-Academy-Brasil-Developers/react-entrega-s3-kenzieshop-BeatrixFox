import CartList from "../../components/CartList/CartList";
import { Container } from "./style";
import { useHistory } from "react-router";
import { Header } from "../../components/Header/Header";

export const BuyCart = () => {
  const history = useHistory();

  const hadlerClick = () => {
    history.push("/");
  };
  return (
    <Container>
      <Header />
      <button onClick={hadlerClick}>voltar as compras</button>
      <CartList />
    </Container>
  );
};

export default BuyCart;
