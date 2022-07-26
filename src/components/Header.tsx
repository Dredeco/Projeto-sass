import '../styles/components/Header.sass'

const Header = () => {
  return (
    <div className="header">

      <div className="logo">
        <a href='/'><p>&lt;</p> André Fernandes <p>/&gt;</p></a>
      </div>

      <nav className="desktop">
        
      <div id="icons-social">
        <a href="https://facebook.com"><i className="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="https://instagram.com"><i className="fa fa-instagram" aria-hidden="true"></i></a>
      </div>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="#products">Sobre</a></li>
        <li><a href="#team">Contato</a></li>
      </ul>
      </nav>

      <nav className="mobile">
      <i className="fa fa-bars"></i>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Sobre</a></li>
        <li><a href="">Contato</a></li>
      </ul>	
      </nav>
      <div className="clear"></div>

    </div>
  )
}

export default Header