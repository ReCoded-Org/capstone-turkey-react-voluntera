import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Posts from './pages/Post';
import Footer from './components/Footer/Footer';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  POSTS_ROUTE,
  // PROJECT_ROUTE,
  SIGN_UP_ROUTE,
} from './routes';
// import ProjectContent from './components/ProjectContent';
import AddNewProjectModal from './components/AddNewProjectModal';

function App() {
  return (
    <div className="font-sans bg-gray-100">
      <Router>
        <Navbar />
        <AddNewProjectModal />
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={SIGN_UP_ROUTE} element={<SignUp />} />
          <Route path={POSTS_ROUTE} element={<Posts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
