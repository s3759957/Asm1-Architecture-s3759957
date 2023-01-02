import * as React from 'react';
import {useContext} from 'react';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowCircleRight from '@mui/icons-material/ArrowRight';
import ArrowCircleLeft from '@mui/icons-material/ArrowLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {AuthContext} from '../../contexts/AuthContext';
import { HotelContext } from '../../contexts/HotelContext';
import {RoomContext} from '../../contexts/RoomContext';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard(props) {
  const onClickNext = props.onClickNext
  const onClickPrev = props.onClickPrev
  const {slides, setSlide,activeSlide, setActiveSlide} = useContext(RoomContext);
  const { auth,setAuth } = useContext(AuthContext);
  const {hotelInfo} = useContext(HotelContext);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{zIndex: 10, marginLeft: '2%', marginBottom: '2%', float: 'left', width: 350 }}>
      <CardHeader
        action={
          <Link to={auth ? "/edit" : "/booking"}>
              <Button color="inherit">{auth ? "Edit" : "Book"}</Button>
          </Link>
        }
        title={props.cardProps.name}
        subheader={`${props.cardProps.description} | ${props.cardProps.rate} per night`}
      />
      <CardMedia
        component="img"
        height="130"
        image={props.cardProps.photo[0]}
        alt="Failed to load image"
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <ArrowCircleLeft onClick={onClickPrev}/>
        </IconButton>
        <IconButton aria-label="share">
          <ArrowCircleRight onClick={onClickNext}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography varient="h1">Detail</Typography>
          <Typography varient="subtitle1">Size: {props.cardProps.size} m2</Typography>
          <Typography varient="subtitle1">Vacancy: {props.cardProps.quantity} rooms</Typography>
          <Typography varient="subtitle1">Check-in: {hotelInfo.checkIn}</Typography>
          <Typography varient="subtitle1">Check-out: {hotelInfo.checkOut}</Typography>
          <Typography varient="subtitle1">Children: {hotelInfo.children}</Typography>
          <Typography varient="subtitle1">Pets: {hotelInfo.pets}</Typography>
          <Typography varient="subtitle1">Smoking: {hotelInfo.smoking}</Typography>
          <Typography varient="subtitle1">Parties: {hotelInfo.parties}</Typography>
          <Typography varient="subtitle1">Payment: {hotelInfo.payment}</Typography>
          <Typography varient="subtitle1">Hotel Detail: {hotelInfo.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
