import {React, useState} from 'react'

const useSelect = (stateInicial, opciones) => {

    //state del custom hook

    const [state, setState] = useState(stateInicial);
  
        const SelectNoticias = () => (
            <select 
                value={state}
                className='browser-default'
                onChange={e => setState(e.target.value)}
                >

                    <option value="">Seleccione</option>
                    {opciones.map (opcion => (
                        <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
                    ))  } 
            </select>
        );

        return [state, SelectNoticias]
}

export default useSelect