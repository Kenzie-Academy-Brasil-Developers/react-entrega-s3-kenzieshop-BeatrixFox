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
    margin: theme.spacing(0),
    color: "white",
    background: "green",
  },
}));

const Product = ({ product, isRemovable = false }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { id, name, price, img } = product;

  return (
    <Container>
      <h3>{name}</h3>
      <img src={img} alt={name} width="150px" height="150px" />
      <h3>{price}</h3>
      {isRemovable ? (
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() => dispatch(removeFromCartThunk(id))}
        >
          Remover item do carrinho
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          size="large"
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
