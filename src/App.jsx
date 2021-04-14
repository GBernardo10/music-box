import NavBar from "./components/Nav";
import Inicio from "./pages/Inicio";
import AddMusic from "./pages/AddMusic";
import NotFound from "./pages/NotFound";
import Rotas from "./routes/routes";

// Exporta e cria o componente App
export default function App() {
  return (
    <>
      <NavBar />
      <Rotas />
    </>
  );
}

// Exporta o componente App
// export default App
