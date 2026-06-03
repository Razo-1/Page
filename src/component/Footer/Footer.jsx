import { Logo } from '../Logo/Logo.jsx'
import { Nav } from '../nav/Nav.jsx'
import style from './Footer.module.css'

function Footer({icon,nav,bank}){
    return(
        <footer>
            <div className={style.logoPart}>
                <Logo />
                <p>Որակյալ ուսուցում, Անվճար պրակտիկա, Երաշխավորված աշխատանք</p>
                <div className={style.iconContainer}>
                    {icon.map(el => <div key={el.id} className={style.icon}><i className={el.dt}></i></div>)}
                </div>
            </div>
            <div className={style.midlePart}>
                <p className={style.title}>Ընկերություն</p>
                <div className={style.nav}>
                    <ul>
                        {nav.map((el,ind) => <Nav key={ind} text={el}/>)}
                        <li>Աշխատանք</li>
                    </ul>
                    <div className={style.bank}>
                        {bank.map((el,ind) => <img key={ind} src={el}/>)}
                    </div>
                </div>
            </div>
            <div className={style.lastPart}>
                <p className={style.title}>Կապ մեզ հետ</p>
                <div className={style.nav}>
                    <ul>
                        <li><i class="fa-solid fa-phone"></i> +374 41 435344</li>
                        <li><i class="fa-solid fa-phone"></i> +374 98 435341</li>
                        <li><i class="fa-solid fa-envelope"></i> support@smartcode.am</li>
                        <li><i class="fa-solid fa-envelope"></i> hr@smartcode.am</li>
                        <li><i class="fa-solid fa-location-pin"></i> Հակոբ Հակոբյան 3/17</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export { Footer }