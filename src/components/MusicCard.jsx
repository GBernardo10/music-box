import editIcon from "../assets/img/edit-icon.png";
import deleteIcon from "../assets/img/delete-icon.png";
import starIcon from "../assets/img/star-solid.png";
import { Link } from "react-router-dom";
/* DESESTRUTURAÇÃO DAS PROPRIEDADES DENTRO DO OBJETO PROPS */
export default function MusicCard({ id, nome, genero, lancamento }) {
  //export default function MusicCard(props) {  // Forma convencional
  return (
    <div className="music-box">
      <div className="img-music"></div>
      <div className="music-data">
        <div className="icons">
          <Link to={`/editar-musica/${id}`}>
            <img src={editIcon} alt="icone editar" className="edit" />
          </Link>
          <img src={deleteIcon} alt="icone deletar" className="delete" />
          <img src={starIcon} alt="icone estrela" className="stars" />
        </div>

        <div className="name">
          <label>
            Nome:
            <input className="input-music" type="text" value={nome} />
          </label>
        </div>

        <div className="genre">
          <label>
            Genêro:
            <input className="input-music" type="text" value={genero} />
          </label>
        </div>

        <div className="release">
          <label>
            Lançamento:
            <input className="input-music" type="text" value={lancamento} />
          </label>
        </div>
      </div>
    </div>
  );
}
