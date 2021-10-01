import { useDispatch } from "react-redux";
import {
  addToCartThunk,
  removeFromCartThunk,
} from "../../store/modules/cart/thunks";
import { Container } from "./style";
import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    fontSize: "15px",
    fontWeight: "bold",
    background: "green",
    width: "100%",
    [theme.breakpoints.up(425)]: {
      width: "307px",
    },
    [theme.breakpoints.up(768)]: { width: "270px" },
  },
}));

const Product = ({ product, isRemovable = false }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id, name, price, img } = product;

  return (
    <Container>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <h4>{price}</h4>
      {isRemovable ? (
        <Button
          variant="contained"
          color="secondary"
          size="medium"
          className={classes.button}
          onClick={() => dispatch(removeFromCartThunk(id))}
        >
          Remover item do carrinho
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          size="medium"
          className={classes.button}
          onClick={() => dispatch(addToCartThunk(product))}
        >
          Adicionar item no carrinho
        </Button>
      )}
    </Container>
  );
};

export default Product;
