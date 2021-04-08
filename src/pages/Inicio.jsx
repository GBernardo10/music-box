import NavBar from "../components/Nav"

export default function Inicio(){
  return (
    <NavBar />
    <div class="container index">
    <div class="index-content">
        <div class="box-text-index">
            <div class="info-index">
                <h1>Faça parte do nosso dicionário de música </h1>
                <h3>Contribua e fique por dentro das novidades  </h3>
            </div>
            <div class="img-index"></div>
            <button class="btn-green">Conhecer agora</button>
        </div>     
        <img src="../images/index-img.png" alt="" class="index-img">
    </div>  
</div>
  )
}