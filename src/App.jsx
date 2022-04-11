import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Footer from './components/Footer/Footer';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
} from './routes';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={NOT_FOUND_ROUTE} element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
