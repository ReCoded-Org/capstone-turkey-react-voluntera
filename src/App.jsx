import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Project from './pages/Project';
import { HOME_ROUTE } from './routes';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path={HOME_ROUTE} element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
