import { TrainerContent } from '../TrainerContent/TrainerContent'
import { MenuButton } from '../MenuButton/MenuButton'
import style from './Trainers.module.css'

function Trainers({ TrainersData }){
    return(
        <div className={style.trainer}>
            <h1 className={style.title}>Դասընթաց<span>ավարներ</span></h1>
            <p className={style.text}>Մեր փորձառու մասնագետները կմատուցեն Ձեզ բարդ թվացող ինֆորմացիան բավականին պարզեցված տեսքով:</p>

            <div className={style.trainerInfo}>
                {TrainersData.map(el => <div className={style.card} key={el.id}><TrainerContent element={el}/></div>)}
            </div>
            <div className={style.butone}>
                <MenuButton />
            </div>
        </div>

    )
}

export { Trainers }