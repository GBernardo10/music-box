import { useEffect, useState } from "react";
import { useParams } from "react-router";
import addMusic from "../assets/img/add-music-img.png";
import Button from "../components/Button";
import api from "../services/api";

export default function AddMusic() {
  const [music, setMusic] = useState({
    nome: "Jesus",
    ano: "2021",
    genero: "Acao",
    url: "meu_site.com",
  });

  const { id } = useParams();

  useEffect(() => {
    async function getMusicById() {
      if (id != null && id != undefined) {
        console.log("music");
        const resposta = await api.get(`/${id}`);
        setMusic(resposta.data);
      }
    }
    getMusicById();
    console.log(music);
  }, []);

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
  function editar() {
    console.log("EDITEI", music);
  }

  return (
    <div className="container">
      <div className="add-music">
        <form>
          {/* <form onSubmit={cadastrar}> */}
          <h1>{id ? "Editar" : "Adicionar"}</h1>
          <div>
            <label>
              Nome:
              <input
                type="text"
                name="nome"
                onChange={handleInput}
                value={music.nome}
              />
            </label>
          </div>
          <div>
            <label>
              Genero:
              <input type="text" name="genero" onChange={handleInput} />
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
            <Button type="button" onClick={id ? editar : cadastrar}>
              {id ? "Editar" : "Enviar"}
            </Button>
          </div>
        </form>
        <img src={addMusic} alt="addMusic" />
      </div>
    </div>
  );
}
