import style from './Gallery.module.css'

function Gallery({element}){
    return(
        <>
            <img className={style.gallery} src={element}/>
        </>
    )
}

export { Gallery }