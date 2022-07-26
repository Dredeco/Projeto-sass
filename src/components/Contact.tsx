import '../styles/components/Contact.sass'

const Contact = () => {
  return (
    <div className='contact'>

      <h1>Entre em contato!</h1>

      <div className='contact-form'>
        <input type='text' placeholder='Insira seu nome...'/>
        <input type='email' placeholder='Insira seu email...'/>
        <textarea placeholder='Insira sua mensagem' />
        <a href='/'>Enviar</a>
      </div>
    </div>
  )
}

export default Contact