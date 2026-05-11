import style from './DrawAccordion.module.css'

function DrawAccordion({ accordion }){
        
    return(
        <>
        <div className={style.block}>
            <i className={accordion.icon}></i>
            <span>{accordion.boldText}</span>
            <h1>{accordion.normalText}</h1>
            
        </div>
        <p className={style.text}>{accordion.text}</p>
        </>
    )
}

export { DrawAccordion }