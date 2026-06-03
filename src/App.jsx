import {Header} from './component/Header/Header.jsx'
import { Hero } from './component/Hero/hero.jsx'
import { Proffesion } from './component/Proffesion/Proffesion.jsx';
import { Accordion } from './component/Accordion/Accordion.jsx';
import { Students } from './component/Students/Students.jsx';
import { Trainers } from './component/Trainers/Trainers.jsx';
import style from './App.module.css'

function App({nav ,icon,profession,accordion,TrainersData,image}){  
  return(
    <>
    <Header nav={nav} />
    <div className={style.screen}>
      <Hero icon={icon}/>
    </div>
    <div className={style.grayScreen}>
      <div className={style.screen}>
      <Proffesion profession={profession}/>
      </div>
    </div>
    <div className={style.screen}>
      <Accordion accordion={accordion} />
    </div>
    <div className={style.grayScreen}>
        <div className={style.screen}>
          <Trainers TrainersData={TrainersData}/>
        </div>
    </div>
    <div className={style.screen}>
      <Students image={image}/>
    </div>
    </>
  )

}

export { App }
