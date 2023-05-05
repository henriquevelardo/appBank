import React from "react";
import { extratoLista } from "../../info";
import { Box, Botao } from "../UI";
import Itens from "../Itens";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map(({ id, type, value, from, date }) => {
        return <Itens key={id} id={id} type={type} value={value} from={from} date={date}/>;
      })}
      <Botao>Ver mais</Botao>
    </Box>
  );
};

export default Extrato;
