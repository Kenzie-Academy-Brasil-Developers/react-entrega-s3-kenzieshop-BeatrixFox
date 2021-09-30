import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../Product/product";

const CartList = () => {
  const cart = useSelector((store) => store.cart);
  const [totalBuy, setTotalBuy] = useState("R$ 0,00");
  const [count, setCount] = useState(0);

  useEffect(
    (count) => {
      cart.length > 0
        ? setCount(() =>
            cart.reduce((value, prod) => {
              let numStr = prod.price.substring(3).replace(",", ".");
              return value + Number(numStr);
            }, 0)
          )
        : setCount(0);
    },
    [cart]
  );

  useEffect(() => {
    setTotalBuy(`R$ ${count.toFixed(2).replace(".", ",")}`);
  }, [count]);

  return (
    <div>
      <h1>Meu carrinho de compras</h1>
      <p>Valor da compra : {totalBuy}</p>
      {cart.map((product, index) => (
        <Product key={index} product={product} isRemovable />
      ))}
    </div>
  );
};

export default CartList;
