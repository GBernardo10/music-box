// import NavBar from "./components/Nav";
import Inicio from "./pages/Inicio";
import AddMusic from "./pages/AddMusic";
import NotFound from "./pages/NotFound";
import Rotas from "./routes/routes";

// Cria o componente App e exporta, isso quer dizer, deixar essa funcao 
// publica para outros componentes poderem, se necessario, invocar a funcao App
export default function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Rotas />
    </>
  );
}

// Exporta o componente App
// export default App
