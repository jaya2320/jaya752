import React from 'react';

import Typing from 'react-typing-effect';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BackgroundImage from "../assets/backgroundImage.png"
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const HomePage = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        background: `url(${BackgroundImage}) no-repeat center center/cover` ,
        color: 'white',
        textAlign: 'center',
        padding: "50px",
        height: '100vh',
        overflowY: 'auto',
        marginLeft: '280px',
        minHeight: '100vh',
        '@media (max-width: 600px)': {
          width: '100%',
          height: '100vh', // Full screen height on mobile
          padding: 1,
          marginLeft: "0"
        },
      }}
    >
      <Stack spacing={1}>

        {/* first box starts================== */}

        <Box>
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontSize: "30px",
              fontWeight: 'bolder'
            }}
          >
            Hi, I'm
            <span style={{ color: "#20C997" }}> Jaya Gupta </span>
          </Typography>
          <br />
          <Typography sx={{
            fontSize: { xs: '1.5rem', md: '4rem' },
            display: 'inline-block',
            whiteSpace: 'nowrap',
            fontFamily: 'Poppins'
          }}>
            I'm <Typing text={['a Software Developer.']} speed={100} eraseSpeed={50} eraseDelay={2000} typingDelay={500} />
          </Typography>
        </Box>

        {/* second box starts================== */}
        <Stack spacing={1}>

          <Grid container spacing={2}  >
            <Grid item xs={10} md={8}>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: { xs: '0.8rem', md: '1rem' },
                  color: "#fffff",

                }}
              >
                I am a Experienced Software Developer with over 2 years of hands-on experience in developing scalable web applications and microservices.
                Proficient in programming languages such as Python, Java, and Kotlin, with expertise in frameworks like SpringBoot, React, and Django.
                Demonstrated ability to manage deployments using Docker, Kafka, and Kubernetes.
                <br />
                <br />
                Adept at implementing Test-Driven Development (TDD)
                methodologies, conducting performance and integration testing, and resolving critical production issues through advanced debugging
                techniques.
              </Typography>
            </Grid>


            <Grid item xs={10} md={4} >
              <Box sx={{
                borderBottom: "1px solid #eaeaea ",
                paddingTop: "12px",
                paddingBottom: "12px",
                // width: "80%"
              }}>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontSize: "1rem",
                    color: "#fffff",
                  }}
                ><span style={{ fontWeight: "600" }}>Email: </span> jayagupta752@gmail.com</Typography>
              </Box>
              <Box sx={{
                borderBottom: "1px solid #eaeaea ",
                paddingTop: "12px",
                paddingBottom: "12px",
                // width: "80%"
              }}>
                <Typography
                  sx={{
                    fontFamily: 'Poppins',
                    fontSize: { xs: '0.8rem', md: '1rem' },
                    color: "#fffff",
                  }}
                ><span style={{ fontWeight: "600" }}>Location: </span> Delhi, India</Typography>
              </Box>
              <Box
                sx={{
                  // width: "80%"
                }}
              >
                <Button variant="outlined" sx={{
                  mt: 5, 
                  borderColor: '#20C997', 
                  color: '#20C997', 
                  '&:hover': { backgroundColor: '#20C997', color: '#fff' },
                  padding: "10px",
                  fontFamily: "Poppins",
                  borderRadius: "40px",
                  width: "150px",
                  border: "3px solid ",
                  fontSize: "15px"
                }}
                  component={Link} to="/contact"
                >
                  Hire Me
                </Button>
              </Box>

            </Grid>

          </Grid>

        </Stack>



      </Stack>
    </Box>
  );
}

export default HomePage;
