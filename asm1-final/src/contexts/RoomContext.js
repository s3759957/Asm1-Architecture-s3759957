import React, {createContext,useState, useEffect} from "react";
import axios from 'axios';

export const RoomContext = createContext()

const RoomContextProvider = ({ children }) => {
  // State
  const [slides, setSlide] = useState([{
    name: "loading",
    description: "loading",
    photo: ["https://www.vuescript.com/wp-content/uploads/2018/11/Show-Loader-During-Image-Loading-vue-load-image.png"] 
  }]);
  const [activeSlide, setActiveSlide] = useState(0);

  // context data
  const roomContextData = {
    slides, 
    setSlide,
    activeSlide, 
    setActiveSlide
  }

  useEffect(() => {
    const getRooms = () => {
      axios.get(`http://localhost:3001/rooms`)
      .then(res => {
        setSlide(res.data);
      })
    };
    getRooms()
  }, [])

  // return
  return (
    <RoomContext.Provider value={roomContextData}>
      {children}
    </RoomContext.Provider>
  )
}

export default RoomContextProvider







