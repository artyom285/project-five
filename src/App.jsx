import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import Navbar from './components/Navbar';
import About from './components/About';
import Add from './components/Add';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/details/:id' element={<Details />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/add' element={<Add />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
