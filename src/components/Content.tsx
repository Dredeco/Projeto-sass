import '../styles/components/Content.sass'

const Content = () => {
  return (
    <div className='content'>
        <div className="layer"></div>
        <div className='content-box'>

            <h1>Bem-vindo(a) ao nosso <p>website!</p></h1>

            <span>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit i
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit i
            </span>

            <button className='btn'>Saiba mais!</button>

        </div>
    </div>
  )
}

export default Content