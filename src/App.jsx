import {nav ,icon,profession} from './data/data.js';
import {Header} from './component/Header/Header.jsx'
import { Hero } from './component/Hero/hero.jsx'
import { Proffesion } from './component/Proffesion/Proffesion.jsx';
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
    </>
  )

}

export { App }
