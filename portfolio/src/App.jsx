import React from "react";
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeRoutes from './routes/HomeRoutes.jsx'
import InformationRoutes from './routes/InformationRoutes.jsx'
import ProjectsRoutes from './routes/ProjectsRoutes.jsx'
import PlayRoutes from './routes/PlayRoutes.jsx'

function App() {
  return (
    <Router>
      <Navbar />
        <div className="App">
            <Routes>
              <Route path='/*' element={<HomeRoutes />}/>
              <Route path='/information/*' element={<InformationRoutes />}/>
              <Route path='/projects/*' element={<ProjectsRoutes />}/>
              <Route path='/play/*' element={<PlayRoutes />}/>
            </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
