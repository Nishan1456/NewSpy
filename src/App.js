
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=5;

  state={
    progress:0
  }
  setProgress=(progress)=>
  {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
       
      />
        <Routes>
        <Route exact path="/" element={ <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
          <Route exact path="/General" element={ <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
          <Route exact path="/Business" element={ <News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="us" category="business"/>}></Route>
          <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}> </Route>
          <Route exact path="/Health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category="health"/>}></Route>
          <Route exact path="/Science" element={ <News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category="science"/>}></Route>
          <Route exact path="/Sports" element={ <News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category="sports"/>}></Route>
          <Route exact path="/Technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category="technology"/>}></Route>
         
        </Routes>
        
        </Router>
      </div>
    )
  }
}
