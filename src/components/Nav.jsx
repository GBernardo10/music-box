import logo from "../assets/img/logo.png";
import avatar from "../assets/img/avatar.png";
// import  "./nav.css"

export default function Nav() {
  return (
    <nav>
      <div className="container">
        <img className="logo" src={logo} alt="Logo" />
        <img src={avatar} alt="Avatar" className="avatar" />
      </div>
    </nav>    
  );
}

// export default Nav;
