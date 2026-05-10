import {MenuButton} from '../MenuButton/MenuButton.jsx'
import {Nav} from '../nav/Nav.jsx';
import logo from '../../assets/image/logo.png'
import style from './Header.module.css'

function Header({nav}){
    return(
        <header>
            <div className={style.headerContainer}>
                <div className={style.logo}>
                    <img src={logo} alt="logo" />
                </div>
                <div className={style.nav}>
                    <ul>
                        {nav.map((el,ind) => <Nav key={ind} text={el}/>)}
                    </ul>
                </div>
                    <MenuButton />
            </div>
        </header>
    )
}

export { Header }