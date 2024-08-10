import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const InquiryForm = () => {
    return (
        <form>
            <Stack spacing={2} sx={{ alignItems: "center" }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Your Message...."
                            multiline
                            rows={6}
                            maxRows={6}
                            fullWidth
                        />
                    </Grid>
                </Grid>

                <Button variant="outlined" sx={{
                    backgroundColor: '#20C997',
                    color: 'white',
                    mt: 5,
                    borderColor: '#20C997', '&:hover': { backgroundColor: '#20C997', color: 'white' },
                    padding: "10px",
                    fontFamily: "Poppins",
                    borderRadius: "40px",
                    width: "200px",
                    border: "3px solid ",
                    fontSize: "15px"
                }}>
                    Send Message
                </Button>

            </Stack>

        </form>
    )
}

const CardForOtherData = () => {
    return (
        <>
            {/* email box */}
            <Box sx={{
                padding: "30px",
                borderRadius: "4px",
                border: "1px solid #dee2e6 ",
                marginBottom: "15px",
                backgroundColor: "#fafafa",
                overflowWrap: "anywhere"
            }}>
                <Grid container spacing={2}>
                    <Grid item md={2} >
                        <span sx={{
                            border: "1px solid black",
                            width: "70px",
                            height: "70px"
                        }} >
                            <MailIcon sx={{
                                height: "30px",
                                width: "30px",

                            }} />
                        </span>

                    </Grid>
                    <Grid item md={10}>
                        <Typography variant='h4' >Email</Typography>
                        <Typography sx={{ fontsize: "12px", color: "#20C997" }}>jayagupta752@gmail.com</Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* linekdin box */}
            <Box sx={{
                padding: "30px",
                borderRadius: "4px",
                border: "1px solid #dee2e6 ",
                marginBottom: "15px",
                backgroundColor: "#fafafa",
                overflowWrap:"anywhere"
            }}>
                <Grid container spacing={2}>
                    <Grid item md={2}>

                        <LinkedInIcon sx={{
                            height: "30px",
                            width: "30px",
                        }} />
                    </Grid>
                    <Grid item md={10}>
                        <Typography variant='h4' >LinkedIn</Typography>
                        <Typography sx={{ fontsize: "12px" }} ><a style={{ color: "#20C997" }} href="https://www.linkedin.com/in/jayagupta752/">https://www.linkedin.com/in/jayagupta752/</a></Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* github box */}
            <Box sx={{
                padding: "30px",
                borderRadius: "4px",
                border: "1px solid #dee2e6 ",
                backgroundColor: "#fafafa",
                overflowWrap:"anywhere"
            }}>
                <Grid container spacing={2}>
                    <Grid item md={2}>
                        <span sx={{
                            border: "1px solid black",
                            width: "70px",
                            height: "70px"
                        }} >
                            <GitHubIcon sx={{
                                height: "30px",
                                width: "30px",
                            }} />
                        </span>

                    </Grid>
                    <Grid item md={10} >
                        <Typography variant='h4' >GitHub</Typography>
                        <Typography sx={{ fontsize: "12px" }}><a href="https://github.com/jaya2320" style={{ color: "#20C997" }}> https://github.com/jaya2320</a></Typography>
                    </Grid>
                </Grid>
            </Box>
        </>


    )
}


const Contact = () => {

    return (
        <>
            <Box
                sx={{
                    padding: "4.5rem",
                    position: "relative",
                    display: "block",
                    overflowY: 'auto',
                    marginLeft: '300px',
                    '@media (max-width: 600px)': {
                    width: '100%',
                    height: '100vh', // Full screen height on mobile
                    padding: 1,
                    marginLeft: "-10px",
                    marginTop: "80px",
                    overflowY: 'auto',
                    position: "relative",
                    display: "block",
                },
                }}>
                <Stack spacing={8} sx={{
                    '@media (max-width: 600px)': {

                    marginLeft: "30px",

                },
                }}>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative'
                        }}
                    >
                        <Typography variant='h1' >
                            CONTACT ME
                        </Typography>
                        <Typography variant="h2"
                            sx={{
                                position: "absolute !important"
                            }}
                        >
                            Get In Touch
                        </Typography>
                    </Box>



                    <Box>
                        <Grid container spacing={12}>
                        <Grid item md={7} xs={11}>
                                <Typography variant="h3">
                                    Your Message
                                </Typography>
                                <br />
                                <InquiryForm />
                            </Grid>
                            <Grid item md={5} xs={11}>
                                <Box
                                    backgroundColor="#20C997"
                                    padding="25px"
                                    borderRadius='10px'
                                >
                                    <Typography variant="h3" sx={{ color: "#fff" }}>
                                        Wanna Connect?
                                    </Typography>
                                    <br />
                                    <CardForOtherData />
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>


                </Stack>
            </Box>
        </>
    )
}

export default Contact