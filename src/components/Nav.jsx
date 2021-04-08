import logo from "../assets/img/logo.png";
import avatar from "../assets/img/avatar.png";
// import  "./nav.css"

export default function Nav() {
  return (
    <nav>
      <div class="container">
        <img class="logo" src={logo} alt="Logo" />
        <img src={avatar} alt="Avatar" class="avatar" />
      </div>
    </nav>    
  );
}

// export default Nav;
