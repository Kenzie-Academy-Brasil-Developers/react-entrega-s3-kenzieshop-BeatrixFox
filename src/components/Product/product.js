import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";
import { Container } from "./style";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price, img } = product;

  return (
    <Container>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <h3>{price}</h3>
      {isRemovable ? (
        <button onClick={() => dispatch(removeFromCartThunk(id))}>
          Remover item do carrinho
        </button>
      ) : (
        <button onClick={() => dispatch(addToCartThunk(product))}>
          Adicionar item no carrinho
        </button>
      )}
    </Container>
  );
};

export default Product;
