import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <img src="/imagens/fb.png" alt="Face"></img>
        <img src="/imagens/tw.png" alt="twiter"></img>
        <img src="/imagens/ig.png" alt="Instagram"></img>
      </div>
      <div className="logo">
        <img src="/imagens/logo.png" alt="logo"></img>
      </div>
      <div className="copy-left">
        <span>Desenvolvido por Rafael</span>
      </div>
    </div>
  );
};

export default Footer;
