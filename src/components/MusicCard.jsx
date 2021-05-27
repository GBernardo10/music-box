import editIcon from "../assets/img/edit-icon.png";
import deleteIcon from "../assets/img/delete-icon.png";
import starIcon from "../assets/img/star-solid.png";
import { Link } from "react-router-dom";
// import api from "../services/api";
/* DESESTRUTURAÇÃO DAS PROPRIEDADES DENTRO DO OBJETO PROPS */
export default function MusicCard({ id, nome, genero, lancamento, ...props }) {
  /* O metodo abaixo deleta uma musica passando o 'id' */

  /* async function deletarMusica() {
     
    //  1 - importar a api
    //  2 - executar o metodo delete         
     
     const resposta = await api.delete(`/${id}`);
     if (resposta.status === 200) {
       alert("SUCESSO");
     } else {
       alert("XIIIIIIIII");
     }
   } */

  //export default function MusicCard(props) {  // Forma convencional
  return (
    <div className="music-box">
      <div className="img-music"></div>
      <div className="music-data">
        <div className="icons">
          <Link to={`/editar-musica/${id}`}>
            <img src={editIcon} alt="icone editar" className="edit" />
          </Link>
          <img
            src={deleteIcon}
            onClick={props.onClick}
            alt="icone deletar"
            className="delete"
          />
          <img src={starIcon} alt="icone estrela" className="stars" />
        </div>

        <div className="name">
          <label>
            Nome:
            <input className="input-music" type="text" readOnly value={nome} />
          </label>
        </div>

        <div className="genre">
          <label>
            Genêro:
            <input
              className="input-music"
              type="text"
              readOnly
              value={genero}
            />
          </label>
        </div>

        <div className="release">
          <label>
            Lançamento:
            <input
              className="input-music"
              type="text"
              readOnly
              value={lancamento}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
