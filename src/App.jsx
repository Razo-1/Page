import { Header,Hero,Proffesion,Accordion,Students,Footer,Trainers } from './component'
import { useEffect, useRef } from 'react'
import style from './App.module.css'

function App({nav ,icon,profession,accordion,TrainersData,image,bank,upOrDown}){  

  let scrollRef = {
    profession: useRef(null),
    accordion: useRef(null),
    trainers: useRef(null),
    students: useRef(null),
  }
  
  let scrol = (positon) => {
    scrollRef[positon].current.scrollIntoView({ behavior : 'smooth'})
   }
   
  return(
    <>
    <Header nav={nav} scrol={scrol} upOrDown={upOrDown}/>
    <div className={style.screen}>
      <Hero icon={icon}/>
    </div>
    <div className={style.grayScreen}>
      <div className={style.screen}>
      <Proffesion profession={profession} scrollRef={scrollRef.profession}/>
      </div>
    </div>
    <div className={style.screen}>
      <Accordion accordion={accordion} scrollRef={scrollRef.accordion} />
    </div>
    <div className={style.grayScreen}>
        <div className={style.screen}>
          <Trainers TrainersData={TrainersData} scrollRef={scrollRef.trainers}/>
        </div>
    </div>
    <div className={style.screen}>
      <Students image={image} scrollRef={scrollRef.students}/>
    </div>
    <div className={style.grayScreen}>
        <div className={style.screen}>
          <Footer icon={icon} nav={nav} bank={bank} scrol={scrol} upOrDown={upOrDown}/>
        </div>
    </div>
    </>
  )

}

export { App }
