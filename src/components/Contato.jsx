import { Alert, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(11);
  const [contadorAux, setContadorAux] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const multiMes = () => {
    setContador(contador * contador);
  };

  const zerarMes = () => {
    setContador(0);
  };


  useEffect(() => {}, [contadorAux]);

  return (
    <div>
      <div>
        <h1>Contato</h1>
        </div>
      <div>
      <h1>Segue abaixo nossos meios para contato: </h1>
      <p>E-mail: contato@byseven.com.br</p>
      <p>Telefone: +55 47 3432-9000</p>
      </div>
      
    </div>
  );
};

export default Contador;
