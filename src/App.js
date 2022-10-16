// React Router
import { Route, Routes } from "react-router-dom";


//components
import Headerfrontpage from './components/header-front-page/Headerfrontpage';
import Headerhomepage from './components/header-home-page/Headerhomepage';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';

//pages
import Frontpage from './pages/front-page/Frontpage'
import Homepage from "./pages/home-page/Homepage";

import { useEffect, useState } from "react";
import { auth, db } from './firebase/firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore";

function App() {

  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const getProfileData = async () => {
    if (user && user.length !== 0) {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setProfile(userSnap.data());
      } else {
        setProfile({});
      }
    }
  };

  useEffect(() => {
    if (user?.uid) {
      getProfileData();
    }
  }, [user]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Frontpage />}></Route>
        <Route path="/Homepage" element={<Homepage />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
      </Routes>
  </div>
  );
}

export default App;
