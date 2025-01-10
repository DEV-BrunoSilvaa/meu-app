// fazendo o banner por aqui depos abre o css 
import './banner.css'

function Banner() {
    // JSX 
    //usando a pasta imagens para usar o banner
    return(
        <header className='banner'>
        <img src="/imagens/banner.png" alt="O banner principar do organo" />
        </header>
    )
}

export default Banner 