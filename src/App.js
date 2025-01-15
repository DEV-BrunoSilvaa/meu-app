import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/formulario/iindex';


function App() {
    const[colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdiconado = (colaborador) => {
        console.log(colaborador)
        //colaboradores esplaha os antigos e (colaborador tras os novos)
        setColaboradores([...colaboradores, colaborador])
    }
    return (
        <div className="App">
            <Banner />
            <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdiconado(colaborador)}
                />
        </div>
    )
}

export default App;