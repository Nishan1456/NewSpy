
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
        <Route exact path="/" element={ <News key="general" pageSize={6} country="us" category="general"/>}></Route>
          <Route exact path="/General" element={ <News key="general" pageSize={6} country="us" category="general"/>}></Route>
          <Route exact path="/Business" element={ <News key="business" pageSize={6} country="us" category="business"/>}></Route>
          <Route exact path="/Entertainment" element={<News key="entertainment" pageSize={6} country="us" category="entertainment"/>}> </Route>
          <Route exact path="/Health" element={<News key="health" pageSize={6} country="us" category="health"/>}></Route>
          <Route exact path="/Science" element={ <News key="science" pageSize={6} country="us" category="science"/>}></Route>
          <Route exact path="/Sports" element={ <News key="sports" pageSize={6} country="us" category="sports"/>}></Route>
          <Route exact path="/Technology" element={<News key="technology" pageSize={6} country="us" category="technology"/>}></Route>
         
        </Routes>
        
        </Router>
      </div>
    )
  }
}
