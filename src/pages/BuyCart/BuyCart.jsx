import CartList from "../../components/CartList/CartList";
import { Container } from "./style";
import { useHistory } from "react-router";

export const BuyCart = () => {
  const history = useHistory();

  const hadlerClick = () => {
    history.push("/");
  };
  return (
    <Container>
      <button onClick={hadlerClick}></button>
      <CartList />
    </Container>
  );
};

export default BuyCart;
