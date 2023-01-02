import React, {useContext} from "react";
import MyAppBar from "./components/MyAppBar"
import MyImageList from "./components/MyImageList"
import MyCard from "./components/MyCard"
import wall from "../assets/wall.jpg";
import MyMap from "./components/MyMap"


import {HotelContext} from '../contexts/HotelContext';
import {RoomContext} from '../contexts/RoomContext';

const HomePage = () => {
  const {hotelInfo, setBook} = useContext(HotelContext);
  const {slides, activeSlide, setActiveSlide} = useContext(RoomContext);
  // State
 
 

  const nextSlide = () => {
    setActiveSlide(activeSlide === slides.length-1 ? 0 : activeSlide + 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? slides.length-1 : activeSlide - 1);
  };

  const backgroundImage = {
    backgroundImage: `url(${wall})`, // Here due to variable
  } ;

  return (
    <div className="background-image" style={backgroundImage}>
        <div className="background-gradient-light">
        <MyAppBar hotelProps = {hotelInfo} />
        <MyCard cardProps = {slides[activeSlide]} onClickBook={setBook(true)} onClickNext={nextSlide} onClickPrev={prevSlide}/>        
        <MyImageList cardProps = {slides[activeSlide]}/>
        <MyMap/>
        </div>
  </div>
  );
};

export default HomePage;

