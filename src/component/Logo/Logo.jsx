import logo from '../../assets/image/logo.png'
import style from './Logo.module.css'

function Logo(){
    return(
        <div className={style.logo}>
            <img src={logo} alt="logo" />
        </div>
    )
}

export { Logo }