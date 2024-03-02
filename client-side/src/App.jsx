import './App.css'
import ShowTask from './components/ShowTask'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateTask from './components/CreateTask.jsx'
import UpdateTask from './components/UpdateTask.jsx'
function App() {

  return (
    
    <div className='app'>  
    <div className="left-container">
      <ShowTask />
    </div>
    <div className="right-container">
      <CreateTask /> 
    </div>
    </div>
  )
}

export default App
