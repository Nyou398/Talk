import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Sidebar from './components/Sidebar.js'
import Chat from './components/Chat.js'
import Login from './components/Login.js'
import { useEffect } from 'react'
import { auth } from './firebase';
import { selectUser } from './features/userSlice'
import { login, logout } from './features/userSlice'



function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      console.log(authUser)

      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>

      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
