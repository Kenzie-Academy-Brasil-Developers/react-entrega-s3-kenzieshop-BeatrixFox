import { Container } from "./style";
import ListProducts from "./../../components/ListProducts/ListProducts";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Header } from "../../components/Header/Header";

export const Home = () => {
  const qntProducts = useSelector((store) => store.cart).length;
  const history = useHistory();

  const hadlerClick = () => {
    history.push("/buycart");
  };

  return (
    <Container>
      <Header />
      <ListProducts />
      <button onClick={hadlerClick}>Carrinho de compras {qntProducts}</button>
    </Container>
  );
};

export default Home;
