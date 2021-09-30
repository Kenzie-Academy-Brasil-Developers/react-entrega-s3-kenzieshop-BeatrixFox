import { Container } from "./style";
import ListProducts from "./../../components/ListProducts/ListProducts";
import { useHistory } from "react-router";

export const Home = () => {
  const history = useHistory();

  const hadlerClick = () => {
    history.push("/buycart");
  };

  return (
    <Container>
      <ListProducts />
      <button onClick={hadlerClick}></button>
    </Container>
  );
};

export default Home;
