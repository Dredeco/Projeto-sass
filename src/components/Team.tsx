import '../styles/components/Team.sass'
import avatarImg from '../assets/images/avatar.png'

const Team = () => {
  return (
    <div id='team' className='team'>
        <h1 className=''>Conheça nosso time!</h1>

        <div className='team-wrapper'>

            <div className='team-banner'>
                <img src={avatarImg} alt="" />
                <div className="team-info">
                    <h4>André Fernandes</h4>
                    <p>CEO / Developer</p>
                </div>
                <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                </span>
            </div>

            <div className='team-banner'>
                <img src={avatarImg} alt="" />
                <div className="team-info">
                    <h4>André Fernandes</h4>
                    <p>CEO / Developer</p>
                </div>
                <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                </span>
            </div>

            <div className='team-banner'>
                <img src={avatarImg} alt="" />
                <div className="team-info">
                    <h4>André Fernandes</h4>
                    <p>CEO / Developer</p>
                </div>
                <span>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                </span>
            </div>

        </div>
    </div>
  )
}

export default Team