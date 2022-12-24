
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import SingleCar from './Component/SingleCar';
import Navbar from './Component/Navbar';
import ResearchPage from './Pages/ResearchPage'
import Testing from './Pages/Testing';
function App() {

  return (

    <div className="App">

       <div className="content">
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route index element={<LandingPage/>} />
           <Route path="/SignInPage" element={<SignInPage/>}/>
           <Route path="/SignUpPage" element={<SignUpPage/>}/>
           <Route path="/Research" element={<ResearchPage/>}/>
           <Route path="/Testing" element={<Testing/>}/>
           <Route path="/Research/:id" element={<SingleCar/>}/>
          </Routes>
        </Router>
      </div>

    </div>
  );

}

export default App; 
