import Router from "./routes/index";
import { Container } from "./style";
import { ToastContainer } from "react-toastify";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Container>
      <ToastContainer />
      <Router />
    </Container>
  );
}

export default App;
