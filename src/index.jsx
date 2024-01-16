import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/survey/:questionNumber' element={<Survey />}/>
        {/* To redirect to an error page, 
        if the specified url does not exist  */}
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  </React.StrictMode>
)
