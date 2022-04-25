import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Project from './pages/Project/Project';
import Footer from './components/Footer/Footer';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  FAQS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROJECT_ROUTE,
  SIGN_UP_ROUTE,
} from './routes';
import AddNewProjectModal from './components/AddNewProjectModal';
import FAQ from './pages/FAQ';

function App() {
  return (
    <div className="font-sans">
      <Router>
        <Navbar />
        <AddNewProjectModal />
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={PROJECT_ROUTE} element={<Project />} />
          <Route path={SIGN_UP_ROUTE} element={<SignUp />} />
          <Route path={FAQS_ROUTE} element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
