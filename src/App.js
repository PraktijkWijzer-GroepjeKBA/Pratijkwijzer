// React Router
import { Route, Routes } from "react-router-dom";

//pages
import Frontpage from './pages/front-page/Frontpage';
import Homepage from "./pages/home-page/Homepage";
import Aboutpage from "./pages/about-page/Aboutpage";
import SupportPage from "./pages/support-page/SupportPage";

import { useState } from "react";
import { auth } from './firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div>
      <Routes>
        <Route path="/" element={<Frontpage user={user} />}></Route>
        <Route path="/Homepage" element={<Homepage user={user} />}></Route>
        <Route path='/Aboutpage' element={<Aboutpage />}></Route>
        <Route path='/Support' element={<SupportPage />}></Route>
      </Routes>
  </div>
  );
}

export default App;
