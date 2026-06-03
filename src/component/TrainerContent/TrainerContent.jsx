import style from './TrainerContent.module.css'

function TrainerContent({element}){
    return(
        <>
            <img className={style.img} src={element.image}/>
            <h1 className={style.name}>{element.name}</h1>
            <h3 className={style.pro}>{element.profession}</h3>
            <p className={style.train}>{element.trainer}</p>
        </>
    )
}

export { TrainerContent }