import {nav ,icon,profession,accordion} from './data/data.js';
import {Header} from './component/Header/Header.jsx'
import { Hero } from './component/Hero/hero.jsx'
import { Proffesion } from './component/Proffesion/Proffesion.jsx';
import { Accordion } from './component/Accordion/Accordion.jsx';
import style from './App.module.css'

function App(){
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
    </>
  )

}

export { App }
