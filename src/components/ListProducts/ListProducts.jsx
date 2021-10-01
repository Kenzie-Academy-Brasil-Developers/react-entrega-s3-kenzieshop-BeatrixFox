import { Container } from "./style";
import Product from "../Product/product";
import { useSelector } from "react-redux";

export const ListProducts = () => {
  const products = useSelector((store) => store.products);

  return (
    <Container>
      <h1>Produtos disponiveis</h1>
      <section>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </section>
    </Container>
  );
};

export default ListProducts;
