import '../styles/components/Footer.sass'

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className="footer-wrap">
            <p>Todos os direitos reservados a André Fernandes® 2022</p>

            <ul className='footer-menu'>
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Sobre</a></li>
                <li><a href="#footer">Contato</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer