import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyled } from "./Components/GlobalStyled";
import { temaEscuro, temaClaro } from "./Components/UI/temas";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";


function App() {
  const [tema, setTema] = useState(true)

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
    <ThemeProvider theme={tema ? temaEscuro : temaClaro}>
      <GlobalStyled />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
