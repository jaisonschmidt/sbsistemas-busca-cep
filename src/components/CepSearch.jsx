import React from "react";
import Axios from "axios";

const CepSearch = ({ setCep }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    let url = `https://viacep.com.br/ws/${e.target.cep.value}/json/`;

    try {
      let retorno = await Axios.get(url);
      setCep(retorno.data);
    } catch (error) {
      alert("Não foi possível consultar o servidor remoto");
    }

    /*
    Axios.get(url)
      .then((response) => console.log(response.data))
      .catch((error) => console.log("Ocorreu um erro", error));
    */
  };

  return (
    <form className="p-2" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="cep">Informe um CEP:</label>
        <input
          type="tel"
          name="cep"
          className="form-control"
          id="cep"
          maxLength="8"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Buscar
      </button>
    </form>
  );
};

export default CepSearch;
