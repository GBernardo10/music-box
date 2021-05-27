import { useEffect, useState } from "react";
import { useParams } from "react-router";
import addMusic from "../assets/img/add-music-img.png";
import Button from "../components/Button";
import api from "../services/api";

export default function AddMusic() {
  const [music, setMusic] = useState({
    nome: "",
    ano: "",
    genero: "",
    url: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function getMusicById() {
      if (id != null && id != undefined) {
        const { data } = await api.get(`/${id}`);
        setMusic(data);
      }
    }
    getMusicById();
  }, []);

  function handleInput(eventoDoOnChange) {
    const { name, value } = eventoDoOnChange.target;

    setMusic({
      ...music,
      [name]: value,
    });
  }

  async function cadastrar() {
    const resposta = await api.get("/", {
      ...music,
    });
    
    if (resposta.status === 201) {
      alert("Cadastrou a musica");
    } else {
      alert("Xiiiiii");
    }

  }
  async function editar() {
    const resposta = await api.put(`/${id}`, {
      ...music,
    });
    
    if (resposta.status === 200) {
      alert("Musica editada com sucesso");
    } else {
      alert("Erro ao editar a musica");
    }

  }

  return (
    <div className="container">
      <div className="add-music">
        <form>
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
              <input
                type="text"
                name="genero"
                onChange={handleInput}
                value={music.genero}
              />
            </label>
          </div>
          <div>
            <label>Ano Lançamento:</label>
            <input
              type="text"
              name="ano"
              onChange={handleInput}
              value={music.ano}
            />
          </div>

          <div>
            <label> Imagem (url):</label>
            <input
              type="text"
              name="url"
              onChange={handleInput}
              value={music.url}
            />
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
