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

  useEffect(() => {
    if (contador > 12) {
      setContadorAux(true);
      setMensagem("O ano possui apenas 12 meses");
    } else {
      setContadorAux(false);
    }
  }, [contador]);

  useEffect(() => {}, [contadorAux]);

  return (
    <div>
      <div>
        <h1>Quem somos nós?</h1>
        </div>
      <div>
      A by Seven é uma empresa jovem e moderna, focada em oferecer serviços de qualidade aliada a busca de performance e tecnologia. Queremos oferecer o melhor para o nosso cliente, que ele tenha conosco a melhor experiência que poderia ter.
      Utilizamos com experiência o que há de melhor em soluções de T.I. para agregar valor ao negócio de nossos clientes. Com eficiência, comprometimento sempre suportados pelos melhores métodos e tecnologias consolidadas no mercado.
      </div>
      
    </div>
  );
};

export default Contador;
