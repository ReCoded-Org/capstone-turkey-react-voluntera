import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import { HOME_ROUTE } from './routes';

function App() {
  return (
    <div>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
