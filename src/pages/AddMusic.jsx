import addMusic from "../assets/img/add-music-img.png";

export default function AddMusic() {
  return (
    <div className="container">
      <div className="add-music">
        <form>
          <h1>Adicionar</h1>
          <div>
            <label>
              Nome: <input type="text" />
            </label>
          </div>
          <div>
            <label>
              Genêro: <input type="text" />
            </label>
          </div>
          <div>
            <label>Ano Lançamento:</label>
            <input type="text" />
          </div>

          <div>
            <label> Imagem (url):</label>
            <input type="text" />
          </div>
          <div>
            <button className="btn-green">Enviar</button>
          </div>
        </form>
        <img src={addMusic} alt="addMusic" />
      </div>
    </div>
  );
}
