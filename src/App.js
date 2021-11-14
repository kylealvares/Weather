import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
