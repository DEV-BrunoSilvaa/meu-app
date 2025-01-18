import './formulario.css'
import CampoTexto from '../CampoTextoo/inndex'
import ListaSuspensa from '../ListaSuspensa/lista'
import Botao from '../Botao/botao'
import { useState } from 'react'


const Formulario = (props) => {

    // faz as listas e depois joga aqui nos formularios montando uma conts usar o(useState)
    // TESTE ANTES DE COMPLETAR 
    // const times 
    // = [
    //    'programaçao',
    //    'front-end',
    //    'Data science',
    //    'develops',
    //   'Ux e design',
    //    'mobile',
    //    'inovaçao e gestao',
    //]    //cria esses eventos e joga nos campos textos para criar informaçoes nos campos
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    

    //funçao para guardar os dados
    const aoSalvar = (evento) => {
        evento.preventDefault( )
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })
        //LIMPANDO OS FORMULARIOS //
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha Os Dados Para Criar o Card Do Colaborador</h2>
            <CampoTexto
            obrigatorio={true} 
            label="Nome"
            placeholder="Digite Seu Nome"
            valor={nome}
            aoAlterado={valor => setNome(valor)}
                />
            <CampoTexto
            obrigatorio={true} 
            label="Cargo"
            placeholder="Digite Seu Cargo"
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
            />
            <CampoTexto 
            label="Imagem" 
            placeholder="Digite o Endereço Da Imagem"
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
            />
            <ListaSuspensa
            obrigatorio={true}
            label="Time"
            itens={props.times} 
            valor={time}
            aoAlterado={valor => setTime(valor)}
            />
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario