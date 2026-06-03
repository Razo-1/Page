import { Card } from '../Card/Card';
import style from './Proffesion.module.css';
import image from '../../assets/image/per4.png'
import { useState } from 'react';

function Proffesion({profession,scrollRef}){
    let [active,setActive] = useState(1)
    let [chang,setChang] = useState()

    chang = [
        {
            id : 1,
            data : profession[0]
        },
        {
            id : 2,
            data : profession[1]
        },
        {
            id : 3,
            data : profession[2]
        },
        {
            id : 4,
            data : profession[3]
        },
        {
            id : 5,
            data : profession[4]
        }
    ]

    let draw = (a) => {
        setActive(a)
        
    }

    return(
        <div ref={scrollRef} className={style.content}>
            <div className={style.profes}>
                <div className={style.getAcquainted}>
                    <h1>Ծրագրավորման <span>դասընթացներ</span></h1>
                    <p>Ծրագրավորման դասընթացներ նախատեսված սկսնակների համար</p>
                </div>
                <div className={style.choseProffeson}>
                    {chang.filter(el => el.id === active).map(el => el.data.map(item => <div className={style.card} key={item.id}><Card profession={item}/></div>))}
                    <div className={style.control}>
                    {chang.map(el => <button key={el.id} className={active === el.id ? style.active : ''} onClick={() => {draw(el.id)}}></button>)}
                </div>
                </div>
                
            </div>
            <div className={style.image}>
                <img src={image} />
            </div>
        </div>
    )
}

export { Proffesion }
