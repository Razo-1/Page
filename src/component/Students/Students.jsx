import { Gallery } from '../Gallery/Gallery.jsx'
import lastImage from '../../assets/image/per3.svg'
import style from './Students.module.css'

function Students({image,scrollRef}){
    return(
        <div ref={scrollRef}>
            <h1 className={style.title}>Մեր <span>շրջանավարտները</span></h1>
            <div className={style.phost}>
                {image.map((el,ind) => <div key={ind} className={style.photo}><Gallery element={el}/><i className="fa-solid fa-magnifying-glass-plus"></i></div>)}
            </div>
            <h1 className={style.infoBar}>Մեր <span>մասին</span></h1>
            <p className={style.text}>Ընկերության գործունեության մասին</p>
            <div className={style.content}>
                <div className={style.textInfo}>
                    <p>SmartCode ակադեմիան կազմակերպում
                         և իրականացնում է ծրագրավորման, դիզայնի և արհեստական բանականության ուղղվածությամբ դասընթացներ՝ նպատակ 
                         ունենալով աշխատաշուկային ներկայացնել բարձր որակավորում ունեցող մասնագետներ։</p>
                    <p>Հետևելով համաշխարհային IT թրենդներին՝ դասավանդման ծրագրերը մշտապես թարմացվում և կատարելագործվում են։ Հատուկ մշակված կրթական 
                        մոտեցման շնորհիվ մեր ուսանողները հասնում են նշանակալի հաջողությունների։ Փորձառու մասնագետների աշխատանքի արդյունքում մենք վայելում
                         ենք մեր ուսանողների վստահությունն ու բարձր գնահատական</p>
                    <p>Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ մասնագետ ՏՏ ոլորտում SmartCode-ի օգնությամբ:</p>
                </div>
                <div className={style.work}>
                    <img src={lastImage}/>
                </div>
            </div>
        </div>
    )
}

export { Students }