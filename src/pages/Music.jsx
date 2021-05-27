// import { Fragment } from "react"; // Desestruturação
// import React from "react"; // Importando o React
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import MusicCard from "../components/MusicCard";
import api from "../services/api";

export default function Music() {
  const [listaMusica, addMusicaNaLista] = useState([]);

  // meu_id = 5;
  // listaAntiga = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // novaLista = [1, 2, 3, 4, 6, 7, 8, 9];

  useEffect(() => {
    // async/await
    async function getMusics() {
      const resposta = await api.get("/");
      addMusicaNaLista(resposta.data);
    }
    getMusics();
  }, []);

  async function deleteMusicById(id) {
    console.log("DELETEI O ID", id);
    const resposta = await api.delete(`/${id}`);
    if (resposta.status === 200) {
      const novaLista = listaMusica.filter((musica) => musica.id != id);
      
      // const novaLista = [];
      
      // for (let i = 0; i < listaMusica.length; i++) {
      //   if (id != listaMusica[i].id) {
      //     novaLista.push(listaMusica[i]);
      //   }
      // }
      
      addMusicaNaLista(novaLista);
      alert("DELETOU COM SUCESSO")
    } else {
      alert("XIIIIIIIII");
    }
  }

  return (
    <>
      {/* CONTAINER */}

      <div className="container">
        <div className="filter">
          <Link to="/add-music">
            <Button posicao="right">Adicionar</Button>
          </Link>
        </div>
      </div>

      {/* CARDS */}

      <div className="container">
        <div className="music-boxes">
          {listaMusica.map((musica) => (
            <MusicCard
              id={musica.id}
              nome={musica.nome}
              genero={musica.genero}
              lancamento={musica.ano}
              onClick={() => deleteMusicById(musica.id)}
            />
          ))}
          {/* <MusicCard
            nome="Sinfonias de Bethoven"
            genero="classica"
            lancamento="1800"
          />
          <MusicCard nome="PayPal" genero="trap" lancamento="2021" />
          <MusicCard nome="Batom de cereja" genero="" />
          <MusicCard nome="Até que durou" genero="Péricles" lancamento="2018" />

          <MusicCard nome="Stay With me City" genero="Pop" lancamento="1980" />
          <MusicCard nome="Riot" genero="Rock" lancamento="2018" />
          <MusicCard nome="A lua me traiu" genero="Axê" lancamento="2004" />
          <MusicCard nome="Gatinha comunista" genero="rock" lancamento="2015" /> */}
        </div>
      </div>
    </>
    // <React.Fragment>
    //    <NavBar />
    //   <h1>Ola mundo</h1>
    // </React.Fragment>
    // <Fragment>
    //   <NavBar />
    //   <h1>Ola mundo</h1>
    // </Fragment>
  );
}

// export default Music;
