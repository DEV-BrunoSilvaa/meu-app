
import Banner from './componentes/banner';
import CampoTexto from './componentes/CampoTExto';

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="nome" />
      <CampoTexto label="cargo" />
      <CampoTexto label="imagem" />
    </div>
  );
}

export default App;
