import editIcon from "../assets/img/edit-icon.png";
import deleteIcon from "../assets/img/delete-icon.png";
import starIcon from "../assets/img/star-solid.png";
/* DESESTRUTURAÇÃO DAS PROPRIEDADES DENTRO DO OBJETO PROPS */
export default function MusicCard({ nome, genero, lancamento }) {
//export default function MusicCard(props) {  // Forma convencional
  return (
    <div className="music-box">
      <div className="img-music"></div>
      <div className="music-data">
        <div className="icons">
          <img src={editIcon} alt="icone editar" className="edit" />
          <img src={deleteIcon} alt="icone deletar" className="delete" />
          <img src={starIcon} alt="icone estrela" className="stars" />
        </div>

        <div className="name">
          <label>
            {" "}
            Nome:
            <input className="input-music" type="text" value={nome} />
          </label>
        </div>

        <div className="genre">
          <label>
            {" "}
            Genêro:
            <input className="input-music" type="text" value={genero} />
          </label>
        </div>

        <div className="release">
          <label>
            {" "}
            Lançamento:
            <input className="input-music" type="text" value={lancamento} />
          </label>
        </div>
      </div>
    </div>
  );
}
