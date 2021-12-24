import Nav from './components/Nav'
import HomeContent from './components/HomeContent' 
import Personal from './components/Personal'
import {Route,Routes} from 'react-router-dom'
import './App.css'
import Qualification from './components/Qualification'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomeContent/>} />
        <Route path='/personal-info' element={<Personal/>}/>
        <Route path='/qualification' element={<Qualification/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </>
  );
}

export default App;
