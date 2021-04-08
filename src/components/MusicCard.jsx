import editIcon from "../assets/img/edit-icon.png";
import deleteIcon from "../assets/img/delete-icon.png";
import starIcon from "../assets/img/star-solid.png";
/* DESESTRUTURAÇÃO DAS PROPRIEDADES DENTRO DO OBJETO PROPS */
export default function MusicCard({ nome, genero, lancamento }) {
//export default function MusicCard(props) {  // Forma convencional
  return (
    <div class="music-box">
      <div class="img-music"></div>
      <div class="music-data">
        <div class="icons">
          <img src={editIcon} alt="icone editar" class="edit" />
          <img src={deleteIcon} alt="icone deletar" class="delete" />
          <img src={starIcon} alt="icone estrela" class="stars" />
        </div>

        <div class="name">
          <label>
            {" "}
            Nome:
            <input class="input-music" type="text" value={nome} />
          </label>
        </div>

        <div class="genre">
          <label>
            {" "}
            Genêro:
            <input class="input-music" type="text" value={genero} />
          </label>
        </div>

        <div class="release">
          <label>
            {" "}
            Lançamento:
            <input class="input-music" type="text" value={lancamento} />
          </label>
        </div>
      </div>
    </div>
  );
}
