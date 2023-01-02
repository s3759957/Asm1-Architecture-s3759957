import React, { useContext, useState } from "react";
import {RoomContext} from '../contexts/RoomContext';
import TextInput from "../AuthPage/components/TextInput";
import Button from "../AuthPage/components/Button";
import wall from "../assets/wall.jpg";
import MyAppBar from "../HotelDetail/components/MyAppBar"
import {HotelContext} from '../contexts/HotelContext';
import axios from 'axios';

const EditPage = () => {
const {hotelInfo} = useContext(HotelContext);
const {slides, activeSlide} = useContext(RoomContext);

const {room} = 
useState({
    "id": slides[activeSlide].id,
    "name": slides[activeSlide].name,
    "rate": slides[activeSlide].rate+1000,
    "description": slides[activeSlide].description,
    "size": slides[activeSlide].size,
    "quantity": slides[activeSlide].quantity,
    "photo": slides[activeSlide].photo,
    "utilities": slides[activeSlide].utilities,
    "isAvailable": slides[activeSlide].isAvailable
  })

const editRoom =  () => {
  axios.delete(`http://localhost:3001/rooms/${slides[activeSlide].id}`)
        .then(() => {
            axios.post('http://localhost:3001/rooms', room)
            .then(() => console.log("success"));
        });
}

const handleSubmit = event => {
  event.preventDefault()
  editRoom()
}


const backgroundImage = {
    backgroundImage: `url(${wall})`, // Here due to variable
  } ;

  return (
    <div className="background-image" style={backgroundImage}>
    <div className="background-gradient-light">
    <MyAppBar hotelProps = {hotelInfo} />
      <div style={styles.formContainerStyle}>
      <div className="form-title">Edit room</div>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="name"
          name="email"
          placeholder="Suite"
          style={{
            paddingRight: "12px", width: "calc(50% - 6px)"}}
        //   onChange={(e) => {
        //     setEmail(e.target.value)
        //   }}
        />

        <TextInput
          label="rate"
          name="rate"
          placeholder="100$"
          style={{ width: "calc(50% - 6px)"}}
        //   onChange={(e) => {
        //     setEmail(e.target.value)
        //   }}
        />

        <TextInput
          label="size"
          name="size"
          placeholder="10m2"
          style={{paddingRight: "12px", width: "calc(50% - 6px)"}}
        //   onChange={(e) => {
        //     setEmail(e.target.value)
        //   }}
        />

        <TextInput
          label="quantity"
          name="quantity"
          placeholder="10"
          style={{ width: "calc(50% - 6px)"}}
        //   onChange={(e) => {
        //     setEmail(e.target.value)
        //   }}
        />
        <Button
          type="submit"
          style={{
            width: "calc(50% - 18px)"
          }}
        >
          Submit Change
        </Button>
      </form>
      </div>
    </div>
    </div>
  );
};

const styles = {
    formContainerStyle: {
      width: "100%",
      maxWidth: "650px",
      padding: "36px 72px",
    },
    titleStyle: {
      fontSize: "12px",
      fontFamily: "VisbyRoundCF-Heavy",
      letterSpacing: "0.5px",
      color: "black",
      paddingTop: "2vw",
      paddingBottom: "2vw",
    },
  };

export default EditPage;
