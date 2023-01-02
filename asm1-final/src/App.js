import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './HotelDetail/HomPage'
import LogInForm from './AuthPage/LogInForm'
import './App.css'
import BookingPage from './BookingPage/BookingPage';
import wall from "./assets/wall.jpg";
import {AuthContext} from './contexts/AuthContext';
import EditPage from './EditPage/EditPage'

const backgroundImage = {
  backgroundImage: `url(${wall})`, // Here due to variable
} ;

const App = () => {
  const { hasAccount} = useContext(AuthContext);
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element=
        {hasAccount ? <Navigate to="/"/> :
        (<div className="background-image" style={backgroundImage}>
          <div className="background-gradient-light">
            <div style={styles.formContainerStyle}>
              <LogInForm/>
            </div>
          </div>
        </div>)
      }/>
      <Route path='/booking' element={<BookingPage/>} />
      <Route path='/edit' element={<EditPage/>} />
    </Routes>
  )
}

const styles = {
  formContainerStyle: {
    width: "100%",
    maxWidth: "650px",
    padding: "36px 72px",
  },
  titleStyle: {
    fontSize: "24px",
    fontFamily: "VisbyRoundCF-Heavy",
    letterSpacing: "0.5px",
    color: "white",
    paddingBottom: "11vw",
  },
};

export default App
