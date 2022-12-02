import './App.css';
// import Header from './components/header';
import SideNavbar from './components/side-navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Feeding from './pages/Feeding';
import Walks from './pages/Walks';
import Medical from './pages/Medical';
import Away from './pages/Away';

function App() {
  return (
    <>
      {/* <Header/> */}
      <Router>
        <SideNavbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/feeding' element={<Feeding />} />
          <Route path='/walks' element={<Walks />} />
          <Route path='/medical' element={<Medical />} />
          <Route path='/away' element={<Away />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
