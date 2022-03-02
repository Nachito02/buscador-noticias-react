import Header from "./components/Header";
import Formulario from "./components/Formulario";
import { useState, useEffect } from "react";

import ListadoNoticias from "./components/ListadoNoticias";
function App() {
  //definir categoria y noticia

  const [categoria, setCategoria] = useState("");

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=f554bf0ba5c04939864ad947f2db7606`;

      const respuesta = await fetch(url);

      const noticias = await respuesta.json();

     setNoticias(noticias.articles);
    };

    consultarApi();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />

      <div className="container white">
        <Formulario setCategoria={setCategoria} />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
