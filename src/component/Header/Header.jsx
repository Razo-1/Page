import {MenuButton} from '../MenuButton/MenuButton.jsx'
import { Logo } from '../Logo/Logo'
import {Nav} from '../nav/Nav.jsx';
import style from './Header.module.css'

function Header({nav,scrol,upOrDown}){
    return(
        <header>
            <div className={style.headerContainer}>
                <Logo />
                <div className={style.nav}>
                    <ul>
                        {nav.map((el,ind) => <Nav key={ind} text={el} scrol={scrol} upOrDown={upOrDown[ind]}/>)}
                    </ul>
                </div>
                    <MenuButton />
            </div>
        </header>
    )
}

export { Header }