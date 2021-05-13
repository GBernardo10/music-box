import { useState } from "react";
import addMusic from "../assets/img/add-music-img.png";
import api from "../services/api";

export default function AddMusic() {
  const [music, setMusic] = useState({
    nome: "Jesus",
    ano: "2021",
    genero: "Acao",
    url: "meu_site.com",
  });

  function handleInput(eventoDoOnChange) {
    const { name, value } = eventoDoOnChange.target;

    setMusic({
      ...music,
      [name]: value,
    });
  }

  async function cadastrar() {
    const resposta = await api.post("/", {
      ...music,
    });
    if (resposta.status === 201) {
      alert("Cadastrou a musica");
    } else {
      alert("Xiiiiii");
    }
  }

  return (
    <div className="container">
      <div className="add-music">
        <form>
          {/* <form onSubmit={cadastrar}> */}
          <h1>Adicionar</h1>
          <div>
            <label>
              Nome:
              <input type="text" name="nome" onChange={handleInput} />
            </label>
          </div>
          <div>
            <label>
              Genêro: <input type="text" name="genero" onChange={handleInput} />
            </label>
          </div>
          <div>
            <label>Ano Lançamento:</label>
            <input type="text" name="ano" onChange={handleInput} />
          </div>

          <div>
            <label> Imagem (url):</label>
            <input type="text" name="url" onChange={handleInput} />
          </div>
          <div>
            <button type="button" className="btn-green" onClick={cadastrar}>
              Enviar
            </button>
          </div>
        </form>
        <img src={addMusic} alt="addMusic" />
      </div>
    </div>
  );
}
