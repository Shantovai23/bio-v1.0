import Nav from './components/Nav'
import HomeContent from './components/HomeContent' 
import Personal from './components/Personal'
import {Route,Routes} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomeContent/>} />
        <Route path='/personal-info' element={<Personal/>}/>
      </Routes>
    </>
  );
}

export default App;
