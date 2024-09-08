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
import fps from "../../assets/fps.jpg"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';



const getImageUrl = (title) => {
  if (title === "Jannat Bharat") {
    return jannatBharat
  } else if (title === "FPS - Frame Per Second") {
    return fps
  }
}

export const ProjectCardFront = ({ about, title, project_link, handleClickOpen }) => {
  return (
    <Box >
      <Card
        sx={{
          display: { xs: 'grid', sm: 'flex' },  // 'xs' for mobile, 'sm' for tablets and above
          gap: 2,
          flexDirection: { sm: 'row', xs: "column" },  // For larger screens
          alignItems: 'center'
        }}
      >
        <CardMedia
          component="img"
          alt={title}
          height="200"
          sx={{ width: { xs: "100%", sm: "50%" } }}
          image={getImageUrl(title)}
        />
        <Box
          sx={{
            display: { xs: 'grid', sm: 'flex' },  // 'xs' for mobile, 'sm' for tablets and above
            gap: 2,
            flexDirection: "column"
          }}
        >
          <CardContent padding="10px" >
            <Box display="flex" justifyContent="space-between">
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              {project_link !== null ?
                <IconButton href={project_link} target="_blank">
                  <LaunchIcon sx={{ color: '#20C997' }} />
                </IconButton>
                : <></>}
            </Box>
            <Typography gutterBottom
            >
              {about}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ color: '#ffff', backgroundColor: "#20C997" }} onClick={handleClickOpen}>Wanna Learn More Aboout this ?</Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
}


export const ProjectCardModalDetails = ({ handleClose, title, description, techStack, keyContributions }) => {
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
        <br />
        <br />
        <Typography gutterBottom>
          <b>Key contributions: </b>
          <ul>{keyContributions.map((contribution) => {
            return <li>{contribution}</li>
          })}
          </ul>
        </Typography>
        <br />
        <br />
        <Typography gutterBottom variant='body'>
          <b>TechStack: </b> {techStack}
        </Typography>
      </DialogContent>
      <DialogActions>
      </DialogActions>
    </>
  )
}