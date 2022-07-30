import { useState } from 'react';
import '../styles/components/Header.sass'

const Header = () => {

  let [open,setOpen]=useState(false);

  return (
    
    <div className="header">

      <div className="logo">
        <a href='#home'><p>&lt;</p> André Fernandes <p>/&gt;</p></a>
      </div>

      <nav className="desktop">
        
        <div id="icons-social">
          <a href="https://www.facebook.com/dredeco/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="https://instagram.com/dredeco"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Sobre</a></li>
          <li><a href="#footer">Contato</a></li>
        </ul>

      </nav>

      <nav className="mobile">

      <i onClick={()=>setOpen(!open)} className={open ? "fa-solid fa fa-close" : "fa-solid fa fa-bars"}></i>

        <ul className={`${open ? 'menu-open' : 'menu-closed' }`}>
        <li><a href="#home">Home</a></li>
          <li><a href="#products">Sobre</a></li>
          <li><a href="#team">Contato</a></li>
        </ul>	

      </nav>
      <div className="clear"></div>

    </div>
  )
}

export default Header