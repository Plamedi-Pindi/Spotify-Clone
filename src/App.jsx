
import './index.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import NoPage from './pages/NoPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
