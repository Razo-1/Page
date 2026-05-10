import {nav} from './data/data.js';
import {Header} from './component/Header/Header.jsx'
import { useState } from 'react';
import style from './App.module.css'

function App(){
  return(
    <Header nav={nav} />

  )

}

export { App }
