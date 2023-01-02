import React, { useEffect, createContext, useState } from 'react'
import axios from 'axios';
export const HotelContext = createContext()

const HotelContextProvider = ({ children }) => {
  // State
  const [book, setBook] = useState(false)
  const [editing, setEditing] = useState(false)
  const [booking, setBooking] = useState(false)
  const [hotelInfo, setHotelInfo] = useState({
      address: "loading",
      name: "loading",
      phone: "loading",
      description: "loading",
      lat: 0,
      long: 0,
      ownerName: "loading",
      ownerPhone: "loading",
      checkIn: "14:00 - 22:00",
      checkOut: "08:00 - 12:00",
      children: "Children 12 and above are considered adults at this property.",
      pets: "Pets are not allowed.",
      smoking: "Smoking is not allowed.",
      parties: "Parties/events are not allowed.",
      payment: "This property only accepts cash payments."
    });

  useEffect(() => {
    const getHotel = () => {
      axios.get(`http://localhost:3001/hotel`)
      .then(res => {
        setHotelInfo(res.data);
      })
    };
    getHotel()
  }, [])

  // context data
  const hotelContextData = {
    hotelInfo,
    setHotelInfo,
    booking,
    book,
    editing,
    setBooking,
    setBook,
    setEditing
  }

  // return
  return (
    <HotelContext.Provider value={hotelContextData}>
      {children}
    </HotelContext.Provider>
  )
}

export default HotelContextProvider







