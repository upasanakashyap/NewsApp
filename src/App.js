import './App.css';

import React, { useState } from 'react'
import NavBar from './component/NavBar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
 import{
  BrowserRouter as Router,
  Routes,
  Route,
 }from 'react-router-dom';

  const App = () => {

    const [progress, setProgress1] = useState(0)
  
    const apiKey = process.env.REACT_APP_NEWS_API//06d8c82248854f7cb931b76a78114e95
    const  pageSize = process.env.REACT_APP_PAGE_SIZE
  
    const hanleCountry = () => {
      console.log('Country Selected');
    }

  const setProgress = (progress) => {
   setProgress1({progress: progress})
  }

  
    return (
      <div>
         <Router>
         <NavBar hanleCountry={hanleCountry}/>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        {/* <News pageSize={5} country='in' category="science"/>  */}

        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey }key='general' pageSize={pageSize} category={'general'} country='in'/>} />
          <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey }key='business' pageSize={pageSize} category={'business'} country='in'/>} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey }key='entertainment' pageSize={pageSize} category={'entertainment'} country='in'/> } />
          <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey }key='general' pageSize={pageSize} category={'general'} country='in'/> } />
          <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey }key='health' pageSize={pageSize} category={'health'} country='in'/> } />
          <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey }key='science' pageSize={pageSize} category={'science'} country='in'/> } />
          <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey }key='sports' pageSize={pageSize} category={'sports'} country='in'/> } />
          <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey }key='technology' pageSize={pageSize} category={'technology'} country='in'/> } />
        </Routes>



        </Router>
      </div>
    )
  
}


export default App

