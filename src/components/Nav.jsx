import logo from "../assets/img/logo.png";
import avatar from "../assets/img/avatar.png";
import { Link } from "react-router-dom";
// import  "./nav.css"

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
    </nav>
  );
}

// export default Nav;
