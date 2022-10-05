import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/header/Header';
import Frontpage from './pages/front-page/Frontpage'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
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
        <Route path='/Frontpage' element={<Frontpage user={ user }/>}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Signup' element={<Signup />}></Route>
      </Routes>
  <Header />
  <Frontpage />
  </div>
  );
}

export default App;
