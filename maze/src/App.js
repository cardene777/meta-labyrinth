import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { ListPage } from './components/ListPage';
import { PageDetail } from './components/PageDetail';
import Head from "./components/Head";

function App() {
  return (
    <Router>
      <Head title="Meta Labyrinth" />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meta-labyrinth/" element={<ListPage />} />
          <Route path="/meta-labyrinth/:id" element={<PageDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
