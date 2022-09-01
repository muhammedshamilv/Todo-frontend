import Register from './pages/Register';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<Register />} path='/register' />
          <Route element={<Login />} path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
