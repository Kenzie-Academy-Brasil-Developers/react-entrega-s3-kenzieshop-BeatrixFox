import { Link } from "react-router-dom";
import { Container } from "./style";
import { useSelector } from "react-redux";

export const Header = () => {
  const cartQnt = useSelector((store) => store.cart).length;
  return (
    <Container>
      <Link to="/">KenzieShop - Produtos Animes</Link>
      <Link to="/buycart">
        <p>Carrinho de compras</p>
        <span>{cartQnt}</span>
      </Link>
    </Container>
  );
};
