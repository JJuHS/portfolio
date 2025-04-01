import React, { Suspense, lazy } from "react";
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from "./components/common/LoadingPage.jsx";

function App() {
  const HomeRoutes = lazy(() => import('./routes/HomeRoutes.jsx'));
  const InformationRoutes = lazy(() => import('./routes/InformationRoutes.jsx'));
  const ProjectsRoutes = lazy(() => import('./routes/ProjectsRoutes.jsx'));
  const PlayRoutes = lazy(() => import('./routes/PlayRoutes.jsx'));
  const Loadingpage = lazy(() => import('./components/common/LoadingPage.jsx'));

  return (
    <Router>
      <Navbar />
        <div className="App">
          <Suspense fallback={<LoadingPage />}>
            <Routes>
              <Route path='/*' element={<HomeRoutes />}/>
              <Route path='/information/*' element={<InformationRoutes />}/>
              <Route path='/projects/*' element={<ProjectsRoutes />}/>
              <Route path='/play/*' element={<PlayRoutes />}/>
              <Route path='/loading/*' element={<Loadingpage />}/>
            </Routes>
          </Suspense>
        </div>
        <div className="h-16"></div>
      <Footer />
    </Router>
  );
}

export default App;
