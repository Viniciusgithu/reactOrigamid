import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  // const { pathname } = window.location;

  // let Pagina;
  // if(pathname === '/produtos'){
  //   Pagina = Produtos
  // } else {
  //   Pagina = Home
  // }


  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);


  async function handleClick(event) {
    setCarregando(true);
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,)
    const json = await response.json();
    setDados(json);
    setCarregando(false);
  };


  React.useEffect(() => {
    document.title = 'Total ' + dados;
  }, [dados])

  return (
    <>
      <Header />
      <button onClick={handleClick}>Tablet</button>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      {carregando && <p>Carregando... ⌚</p>}
      {!carregando && dados && <Home dados={dados} />}
    </>
  )
};

export default App;