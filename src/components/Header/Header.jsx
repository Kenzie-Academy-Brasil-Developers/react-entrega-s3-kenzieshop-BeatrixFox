import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Link to="/">
        <h4>KenzieShop - Produtos Animes</h4>
      </Link>
      <Link to="/buycart">
        <h5>Carrinho de compras</h5>
      </Link>
    </>
  );
};
