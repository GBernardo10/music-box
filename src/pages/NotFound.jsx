import { Link } from 'react-router-dom'
import notFound from '../assets/img/not-found.png'

export default function NotFound() {
  return (
    <div className="container index">
      <div className="index-content">
        <div className="box-text-index">          
          <div className="info-index not-found">
            <h1>Oops!</h1>
            <h3>A página que você procura não foi encontrada.</h3>
          </div>
          <div className="img-index"></div>          
          <Link to="/">
            <button className="btn-green">Voltar</button>          
          </Link>
        </div>
        <img src={notFound} alt="" className="index-img" />
      </div>
    </div>
  );
}
