import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/Signups';
import Posts from './pages/Post';
import User from './pages/User';
import Project from './pages/Project/Project';
import Footer from './components/Footer/Footer';
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  FAQS_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  POSTS_ROUTE,
  PROJECT_ROUTE,
  SIGN_UP_ROUTE,
  USER_ROUTE,
} from './routes';
// import AddNewProjectModal from './components/AddNewProjectModal';
import FAQ from './pages/FAQ';
import ProjectContent from './components/ProjectContent';

function App() {
  const user = useSelector((state) => state.user.user);
  const [term, setTerm] = useState('');
  const sentTerm = (word) => {
    setTerm(word);
  };
  return (
    <div className="font-sans bg-gray-50">
      <Router>
        <Navbar sendTerm={sentTerm} />

        <Routes>
          <Route path={HOME_ROUTE} element={<Home word={term} />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={PROJECT_ROUTE} element={<Project />}>
            <Route path=":pId" element={<ProjectContent />} />
          </Route>
          <Route
            path={USER_ROUTE}
            element={user ? <User /> : <Home word={term} />}
          />
          <Route path={SIGN_UP_ROUTE} element={<SignUp />} />
          <Route path={POSTS_ROUTE} element={<Posts />} />
          <Route path={FAQS_ROUTE} element={<FAQ />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
