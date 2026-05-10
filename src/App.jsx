import {nav ,icon} from './data/data.js';
import {Header} from './component/Header/Header.jsx'
import { Hero } from './component/Hero/hero.jsx'
import { useState } from 'react';
import style from './App.module.css'

function App(){
  return(
    <>
    <Header nav={nav} />
    <div className={style.screen}>
      <Hero icon={icon}/>
    </div>
    </>
  )

}

export { App }
