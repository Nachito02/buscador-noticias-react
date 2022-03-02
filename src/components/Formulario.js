import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from 'prop-types'

const Formulario = ({setCategoria}) => {
  const opciones = [
    {
      value: "general",
      label: "General",
    },
    {
      value: "business",
      label: "Negocios",
    },
    {
      value: "entertainment",
      label: "Entretenimiento",
    },
    {
      value: "health",
      label: "Salud",
    },
    {
      value: "science",
      label: "Ciencia",
    },
    {
      value: "sports",
      label: "Deportes",
    },{
        value: "technology",
        label: "Tecnologia",
      }
  ];

  //utilizar custom hooks
  const [categoria, SelectNoticias] = useSelect('general',opciones);

  //submit al form, pasar categoria

  const buscarCategoria = e => {
      e.preventDefault();

      setCategoria(categoria);
  }

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form 
            onSubmit={buscarCategoria}
        >
          <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`btn-large amber darken-2 ${styles.btn_block}`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};




Formulario.proTypes = {
  setCategoria: PropTypes.string.isRequired
}

export default Formulario;
