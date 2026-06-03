import { DrawAccordion } from '../DrawAccordion/DrawAccordion.jsx';
import { MenuButton } from '../MenuButton/MenuButton.jsx'
import image from '../../assets/image/per2.png';
import { useState } from 'react';

import style from './Accordion.module.css';

function Accordion({accordion,scrollRef}){
    
    let [active,setActive] = useState(null)
    let check = (arg) =>{
        setActive(active === arg ? null : arg)
    }
    
    return(
        <div ref={scrollRef} className={style.midleBlock}>
            <div className={style.title}>
                <h1>Ինչո՞ւ սովորել <span>մեզ մոտ</span></h1>
                <p>Մեզ մոտ ծրագրավորում սովորելը ձեռնտու է</p>
            </div>
            <div className={style.content}>
                <div className={style.image}>
                    <img src={image} />
                </div>
                <div className={style.acrInfo}>
                    {accordion.map((el,ind) => {
                        return(
                        <div key={el.id} className={style.acr} onClick={() => check(ind)}>
                            <div className={style.block}>
                                <i className={el.icon}></i>
                                <span>{el.boldText}</span>
                                <h1>{el.normalText}</h1>
                                <div className={`${style.arrow} ${active === ind ? style.rotate : ''}`}>
                                <i className="fa-solid fa-angle-down"></i>
                                </div>
                            </div>
                            <div className={`${style.off} ${active === ind ? style.active : ''}`}>
                                <p className={style.iner}>{el.text}</p>
                            </div>
                        </div>
                        )})}
                </div>
            </div>
            <div className={style.butone}>
                <MenuButton />
            </div>
        </div>
    )
}

export { Accordion }