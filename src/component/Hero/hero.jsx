import {MenuButton} from '../MenuButton/MenuButton.jsx'
import infoImg from '../../assets/image/header.png'
import style from './hero.module.css'

function Hero({icon}){
    return(
        <div className={style.main}>
            <div className={style.info}>
                <div className={style.mediaPage}>
                <h1 className={style.title}><span className={style.bold}>Սովորի՛ր</span> ծրագրավորում<br />
                    <span className={style.bold}>Դարձի՛ր</span> պահանջված մասնագետ</h1>
                    <p>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
                    <div className={style.mediaContainer}>
                        <MenuButton />
                        <div className={style.media}>
                            <div className={style.player}>
                                <i className="bi bi-play-fill"></i>
                            </div>
                            <span>Տեսանյութ</span>
                        </div>
                    </div>
                    </div>
                    <div className={style.iconContainer}>
                        {icon.map(el => <div key={el.id} className={style.icon}><i className={el.dt}></i></div>)}
                    </div>
            </div>
            <div className={style.infoImg}>
                <img src={infoImg} />
            </div>
        </div>
    )
}

export { Hero }