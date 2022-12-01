import './App.css';
// import Header from './components/header';
import SideNavbar from './components/side-navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Walk from './pages/Walk';
import Medical from './pages/Medical';

function App() {
  return (
    <>
      {/* <Header/> */}
      <Router>
        <SideNavbar />
        <Routes>
        <Route path='/' exact component={Home} />
          <Route path='/feeding' component={Feed} />
          <Route path='/walks' component={Walk} />
          <Route path='/medical' component={Medical} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
