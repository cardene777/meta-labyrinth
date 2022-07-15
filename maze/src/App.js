import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { ListPage } from './components/ListPage';
import { PageDetail } from './components/PageDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meta-labyrinth/" element={<ListPage />} />
          <Route path="/meta-labyrinth/:id" element={<PageDetail />} />
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
