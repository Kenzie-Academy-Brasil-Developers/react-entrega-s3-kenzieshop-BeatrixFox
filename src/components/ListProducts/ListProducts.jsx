import { Container } from "./style";
import Product from "../Product/product";
import { useSelector } from "react-redux";

export const ListProducts = () => {
  const products = useSelector((store) => store.products);

  return (
    <Container>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ListProducts;
