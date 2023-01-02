import React, { useContext, useState } from "react";
import TextInput from "../AuthPage/components/TextInput";
import Button from "../AuthPage/components/Button";
import wall from "../assets/wall.jpg";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MyAppBar from "../HotelDetail/components/MyAppBar"
import {RoomContext} from '../contexts/RoomContext';
import {HotelContext} from '../contexts/HotelContext';
import axios from 'axios';

const BookingPage = () => {
  const {slides,activeSlide} = useContext(RoomContext);
  const {hotelInfo} = useContext(HotelContext);
  // State
  const [valueIn, setValueIn] = React.useState(new Date('2022-12-02T21:11:54'));
  const [valueOut, setValueOut] = React.useState(new Date('2022-12-02T21:11:54'));
  const rate = 10;
  const [price, setPrice] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");


  const postBooking =  () => {
    const newBook = 
    {
        "email": email,
        "name": name,
        "phone": phone,
        "nId": id,
        "checkIn": valueIn,
        "checkOut": valueOut,
        "price": price
    }
    
    axios.post(`http://localhost:3001/bookings`, newBook)
          .then(() => {console.log("Booking success")});
    }

  const calPrice = () => {
    setPrice(rate * parseInt((Date.parse(valueOut) - Date.parse(valueIn)) / (1000 * 3600 * 24)));
  }

  const handleChangeIn = (checkIn) => {
    setValueIn(checkIn.$d)
  };  

  const handleChangeOut = (checkOut) => {
    setValueOut(checkOut.$d)
  }; 
  const handleSubmit = (event) => {
    event.preventDefault()
    postBooking()
  }


const backgroundImage = {
    backgroundImage: `url(${wall})`, // Here due to variable
  } ;

  return (
    <div className="background-image" style={backgroundImage}>
    <div className="background-gradient-light">
    <MyAppBar hotelProps = {hotelInfo} />
      <div style={styles.formContainerStyle}>
      <div className="form-title">Booking for room: {slides[activeSlide].name}</div>
      <form onSubmit= {handleSubmit}>
        <TextInput
          label="Email"
          name="email"
          placeholder="s3759957@rmit.edu.vn"
          style={{
            paddingRight: "12px", width: "calc(50% - 6px)"}}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />

        <TextInput
          label="Name"
          name="name"
          placeholder="Nguyen Dinh Dang Nguyen"
          style={{ width: "calc(50% - 6px)"}}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />

        <TextInput
          label="Phone number"
          name="phone"
          placeholder="123456789"
          style={{paddingRight: "12px", width: "calc(50% - 6px)"}}
          onChange={(e) => {
            setPhone(e.target.value)
          }}
        />

        <TextInput
          label="National ID"
          name="id"
          placeholder="123456789"
          style={{ width: "calc(50% - 6px)"}}
          onChange={(e) => {
            setId(e.target.value)
          }}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          label="Check-in date"
          inputFormat="DD/MM/YYYY"
          value={valueIn}
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            paddingBottom: "12px",
            marginRight: "12px", width: "calc(50% - 6px)"}}
          onChange={handleChangeIn}
          renderInput={(params) => <TextField {...params} />}
        />

        <DesktopDatePicker
          label="Check-out date"
          inputFormat="DD/MM/YYYY"
          value={valueOut}
          onChange={handleChangeOut}
          style={{
            position: "relative",
            display: "inline-block",
            width: "100%",
            paddingBottom: "12px",
            marginLeft: "12px",
            width: "calc(50% - 6px)"}}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        <div style={styles.titleStyle} className="form-subtitle" >
        PRICE: {price} $
      </div>
        <Button
          type="submit"
          style={{
            width: "calc(50% - 18px)"
          }}
        >
          Book Now
        </Button>
      </form>
      <div style={{marginTop: "12px"}}>
      <Button 
        onClick={calPrice}
        style={{
          marginRight: "12px",
          width: "calc(50% - 18px)"
        }}
      >
        View Price
      </Button>
      </div>
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

export default BookingPage;
