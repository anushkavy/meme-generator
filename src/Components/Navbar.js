import Logo from "./Images/Troll Face.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logotitle">
        <img src={Logo} alt="Troll Face Logo" className="nav-logo" />
        <h1 className="nav-title">Meme Generator</h1>
      </div>
      <h3 className="nav-subtitle">React Course - Project 3</h3>
    </div>
  );
}
export default Navbar;
