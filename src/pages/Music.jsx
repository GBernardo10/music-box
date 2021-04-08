// import { Fragment } from "react"; // Desestruturação
// import React from "react"; // Importando o React
import NavBar from "../components/Nav";
import Button from "../components/Button";
import MusicCard from "../components/MusicCard";

export default function Music() {
  return (
    <>
      {/* CONTAINER */}

      <NavBar />
      <div class="container">
        <div class="filter">
          <Button>Adicionar</Button>
        </div>
      </div>

      {/* CARDS */}

      <div class="container">
        <div class="music-boxes">
          <MusicCard nome ="Sinfonias de Bethoven" genero="classica" lancamento="1800"/>
          <MusicCard nome ="PayPal" genero="trap" lancamento="2021"/>
          <MusicCard nome ="Batom de cereja" genero=""/>
          <MusicCard nome ="Até que durou" genero="Péricles" lancamento="2018"/>
          
          <MusicCard nome ="Stay With me City" genero="Pop" lancamento="1980" />
          <MusicCard nome ="Riot" genero="Rock" lancamento="2018"/>
          <MusicCard nome ="A lua me traiu" genero="Axê" lancamento="2004"/>
          <MusicCard nome ="Gatinha comunista" genero="rock" lancamento="2015"/>
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
