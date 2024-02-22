import './App.css'
import ShowTask from './components/ShowTask'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreateTask from './components/CreateTask.jsx'
function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path="/" element={<ShowTask />} />
          <Route exact path="/create-task" element={<CreateTask />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
