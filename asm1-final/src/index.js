import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import App from './App';
import AuthContextProvider from './contexts/AuthContext'
import HotelContextProvider from './contexts/HotelContext'
import RoomContextProvider from './contexts/RoomContext'
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'

// const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root')
ReactDOM.render(
    <BrowserRouter>
        <AuthContextProvider>
          <HotelContextProvider>
            <RoomContextProvider>
              <App />
            </RoomContextProvider>
          </HotelContextProvider>
      </AuthContextProvider>
    </BrowserRouter>,
    rootElement
  )
// root.render(
//     <App />
// );



// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
