import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import Project from './pages/Project';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  PROJECT_ROUTE,
  SIGN_UP_ROUTE,
} from './routes';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={HOME_ROUTE} element={<Project />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={PROJECT_ROUTE} element={<Project />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={SIGN_UP_ROUTE} element={<SignUp />} />
          <Route path={NOT_FOUND_ROUTE} element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
