import {nav ,icon,profession,accordion,TrainersData} from './data/data.js';
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App nav={nav} icon={icon} profession={profession} accordion={accordion} TrainersData={TrainersData}/>
)
