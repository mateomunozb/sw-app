import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NameList from './components/Namelist'
import NavBar from './components/Navbar'
import Movies from './components/Movies'

function App() {
  return (
    <Router>
      <NavBar />
      <div className='container p-5'>
        <Route exact path='/' component={NameList} />
        <Route exact path='/:id' component={Movies} />
      </div>
    </Router>
  )
}

export default App
