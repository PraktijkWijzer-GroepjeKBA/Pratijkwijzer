import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Frontpage from './pages/front-page/Frontpage'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
      </Routes>
  <Header />
  <Frontpage />
  </div>
  );
}

export default App;
