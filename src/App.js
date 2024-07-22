import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Form from './Components/Form';
import Sifaris from './Components/Sifaris'
import Home from './Components/HomePage/Home';
import SifarisForm from './Components/Sifarisform';



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/kasa' element={<Sifaris/>}/>
      <Route path='/kasaform' element={<Form/>}/>
      <Route path='/sifarisform' element={<SifarisForm/>}/>
      
    {/* <div>    
    
      <div className="App" >
      <Form/>
      <Sifaris/>

    </div>
  
    </div> */}

    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
