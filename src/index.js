import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Contact from './components/Contact';
import Works from './components/Works'

ReactDOM.render(

  <Router>
    <Routes>
      {/* changed the path from / to my repo end path */}
      <Route path='/brandon-profile' element={<App/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/works' element={<Works/>}/>
    </Routes>
  </Router>,

  document.getElementById('root')
);
