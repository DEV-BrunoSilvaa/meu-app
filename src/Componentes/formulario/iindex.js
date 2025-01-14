import './formulario.css'
import CampoTexto from '../CampoTexto/inndex'


const Formulario = () => {
    return(
        <section className="formulario">
            <form>
                <h2>Preencha Os Dados Para Criar o Card Do Colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite Seu Nome"/>
            <CampoTexto label="Cargo" placeholder="Digite Seu Cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite Seu Endereço De Imagem"/>
            </form>
        </section>
    )
}

export default Formulario