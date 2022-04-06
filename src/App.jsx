import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import { HOME_ROUTE } from './routes';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
