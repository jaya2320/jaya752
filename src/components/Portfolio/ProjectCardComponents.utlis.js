import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { Box, Button, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';
import jannatBharat from "../../assets/jannatBharat.png"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';



const getImageUrl = (title) => {
  if (title === "Jannat Bharat") {
    return jannatBharat
  }
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  width: "min-content",
  textAlign: 'center',
  color: "black",
  padding: "8px",
  margin: "5px",
  backgroundColor: "#ddd"
}));

export const ProjectCardFront = ({ techStack, title, project_link, handleClickOpen }) => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        component="img"
        alt={title}
        height="200"
        image={getImageUrl(title)}
      />
      <CardContent padding="10px" >
        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <IconButton href={project_link} target="_blank">
            <LaunchIcon sx={{color: '#20C997'}} />
          </IconButton>
        </Box>
        <Box display="flex" flexWrap="wrap">
          {techStack.map((tech) => {
            return <Item> {tech} </Item>
          })}
        </Box>
      </CardContent>
      <CardActions >
        <Button size="small" sx={{ color: '#ffff', backgroundColor: "#20C997" }} onClick={handleClickOpen}>Learn More</Button>
      </CardActions>
    </Card>
  );
}


export const ProjectCardModalDetails = ({ handleClose, title, description, techStack }) => {
  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        <Typography variant='h5'>
          {title}
        </Typography>
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Typography gutterBottom>
          {description}
        </Typography>
        <Typography gutterBottom variant='body'>
          <b>TechStack: </b> {techStack}
        </Typography>
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </>
  )
}