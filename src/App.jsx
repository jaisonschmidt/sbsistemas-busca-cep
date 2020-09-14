import React from "react";

import Header from "./components/Header";
import CepSearch from "./components/CepSearch";
import CepPanel from "./components/CepPanel";

const cep = {
  cep: "99052-360",
  logradouro: "Rua Joana Marques",
  bairro: "São José",
  localidade: "Passo Fundo",
  uf: "RS",
};

const App = () => {
  return (
    <>
      <Header title="Busca CEP" />
      <CepSearch />
      <CepPanel {...cep} />
    </>
  );
};

export default App;
