import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Country from './pages/Country';
import Home from './pages/Home';
import {Route,Routes} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  

  return (
    <>
      
    <div>
    <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="df">Countries</Navbar.Brand>
        </Container>
      </Navbar>
    </div>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cnt/:name' element={<Country/>}/>
      </Routes>

    
    </>
  )
}

export default App
