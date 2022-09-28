// pages
import Home from './pages/Home';
// react-router-dom
import { Routes, Route } from 'react-router-dom';
// css
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
