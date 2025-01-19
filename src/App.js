import { useState } from "react";
import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/formulario/iindex";
import Time from "./Componentes/Time/time";

function App() {
  //listas dos times
    const times = [
    {
        nome: "Programaçao",
        corPrimaria: "#57C278",
        corSecundaria: "#D9F7E9",
    },
    {
        nome: "Frot-end",
        corPrimaria: "#82CFFA",
        corSecundaria: "#E8F8FF",
    },
    {
        nome: "Data science",
        corPrimaria: "#A6D157",
        corSecundaria: "#F0F8E2",
    },
    {
        nome: "Develops",
        corPrimaria: "#E06B69",
        corSecundaria: "#FDE7E8",
    },
    {
        nome: "Ux e design",
        corPrimaria: "#DB6EBF",
        corSecundaria: "#FAE9F5",
    },
    {
        nome: "Mobile",
        corPrimaria: "#FFBA05",
        corSecundaria: "#FFF5D9",
    },
    {
        nome: "Inovaçao e gestao",
        corPrimaria: "#FF8A29",
        corSecundaria: "#FFEEDF",
    },
    ]

    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAdiconado = (colaborador) => {
    //console.log(colaborador);
    //colaboradores espalha os antigos e (colaborador tras os novos)
    
    setColaboradores([...colaboradores, colaborador]);
    };
    return (
    <div className="App">
        <Banner />
        <Formulario times={times.map(time => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
            aoNovoColaboradorAdiconado(colaborador)}/>

            
            {times.map(time => <Time 
            key={time.nome} 
            nome={time.nome}
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria} 
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />)}
            
    </div>
    );
}

export default App;
