import style from './Card.module.css';

function Card({profession}){
    return(
        <>
            <div className={style.imagProfesson}>
                <img src={profession.image} />
            </div>
            <h1>{profession.name}</h1>
            <p>Դասընթաց</p>
            <button>Դիտել</button>
            <div className={style.price}>
                <span>{profession.duration}</span>
                <span>{profession.price}</span>
            </div>
        </>
    )
}

export { Card }