
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App=()=> {
  const pageSize=5;
 const [progress, setProgresss] = useState(0);
 const setProgress=(progress)=>
  {
   setProgresss(progress);
  }

    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
       
      />
        <Routes>
        <Route exact path="/" element={ <News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
          <Route exact path="/General" element={ <News setProgress={setProgress} key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
          <Route exact path="/Business" element={ <News setProgress={setProgress}  key="business" pageSize={pageSize} country="us" category="business"/>}></Route>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}> </Route>
          <Route exact path="/Health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="us" category="health"/>}></Route>
          <Route exact path="/Science" element={ <News setProgress={setProgress} key="science" pageSize={pageSize} country="us" category="science"/>}></Route>
          <Route exact path="/Sports" element={ <News setProgress={setProgress} key="sports" pageSize={pageSize} country="us" category="sports"/>}></Route>
          <Route exact path="/Technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="us" category="technology"/>}></Route>
         
        </Routes>
        
        </Router>
      </div>
    )

}
 export default App;
