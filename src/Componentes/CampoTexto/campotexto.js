
import './campotexto.css'

const CampoTexto = (props) => {
// onchange criase para dar guardar os valores escritos dentro dos campos de testo cria ele e depois monta o console.log 


    
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    return (
        <div className="campo-texto">
            <label>
                {props.label}
                </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto