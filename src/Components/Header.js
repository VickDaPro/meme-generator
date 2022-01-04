import Logo from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={Logo} className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Project - 4</h4>
    </header>
  );
}
