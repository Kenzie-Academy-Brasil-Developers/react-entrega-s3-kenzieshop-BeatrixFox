import { useSelector } from "react-redux";
import Product from "../Product";

const CartList = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <div>
      <h1>Meu carrinho de compras</h1>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable />
      ))}
    </div>
  );
};

export default CartList;