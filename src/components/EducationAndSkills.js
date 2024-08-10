import React from 'react';
import { Box, Typography, Button, useTheme,useMediaQuery } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { educationDetails, skillDetails } from '../assets/myData';

import { styled } from '@mui/material/styles';


const EducationCard = ({ details }) => {
    return (
        <Grid item md={4} xs={11}>
            <Box
                border="1px solid #dee2e6"
                padding="1.5rem!important"
                borderRadius="0.375rem"
            >
                <Box backgroundColor="#20c997" width="100px" borderRadius="5px">
                    <Typography
                        sx={{
                            fontSize: ".9rem !important",
                            fontWeight: "400 !important",
                            fontFamily: "Poppins",
                            color: "#fff",
                            margin: "10px"
                        }}
                    > {details.date}
                    </Typography>
                </Box>
                <Typography variant="h4">
                    {details.degree}
                </Typography>
                <Typography variant='h5'>
                    {details.university}
                </Typography>
                <Typography variant='body'>
                    <b>CGPA:</b> {details.cgpa}
                </Typography>
            </Box>
        </Grid>
    )
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#ddd !important',
    ...theme.typography.body2,
    padding: theme.spacing(1.5),
    textAlign: 'center',
    color: "black",
}));


const SkillCard = ({ listType, listData }) => {
    return (

        <Grid container spacing={2}>
            <Grid item md={3} xs={3}>
                <Typography variant="h6">{listType} : </Typography>
            </Grid>
            <Grid item md={9} >
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    {listData.map((data) => {
                        return <Item> {data} </Item>
                    })}
                </Stack>
            </Grid>

        </Grid>

    )
}

const SillsComponent = ({ skillDetails }) => {
    return (
        <Box>
            <List >
                {skillDetails.map((details) => {
                    const { listType, listData } = details;
                    return (
                        <>
                            <ListItem>
                                <SkillCard listType={listType} listData={listData} />
                            </ListItem>
                            <Divider component="li" />
                        </>
                    )
                })}

            </List>
        </Box>

    )
}

const EducationAndSkills = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
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
                        marginLeft: "5px",
                        marginTop: "80px",
                        overflowY: 'auto',
                        position: "relative",
                        display: "block",
                    },
                }}>
                <Stack spacing={2}>

                    <Box
                        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
                    >
                        <Typography variant='h1' >
                            Education & Skills
                        </Typography>
                        <Typography variant="h2"
                            sx={{
                                position: "absolute !important"
                            }}
                        >
                            Qualifications
                        </Typography>
                    </Box>


                    {/* Edication section  */}
                    <Box >
                        <Typography variant="h3">
                            My Education
                        </Typography>
                        <br />
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>

                                {educationDetails.map((details) => {
                                    return <EducationCard details={details} />
                                })}

                            </Grid>
                        </Box>
                    </Box>



                    {/* skills section */}
                    <Box>
                        <Typography variant="h3">
                            My Skills
                        </Typography>
                        <br />
                        {isMobile ?
                            <Box sx={{ flexGrow: 1 }}>
                                <Box>
                                    <List >
                                        {skillDetails.map((details) => {
                                            const { listType, listData } = details;
                                            return (
                                                <>
                                                    <ListItem>
                                                        <Grid container spacing={2}>
                                                            <Grid item md={3} xs={4}>
                                                                <Typography variant="h6">{listType} : </Typography>
                                                            </Grid>
                                                            <Grid item md={9} xs={8}>
                                                                
                                                                    {listData.map((data) => {
                                                                        return <Typography variant='body'> {data}, </Typography> 
                                                                    })}
                                                             
                                                            </Grid>

                                                        </Grid>
                                                    </ListItem>
                                                    <Divider component="li" />
                                                </>
                                            )
                                        })}

                                    </List>
                                </Box>
                            </Box>
                            :
                            <Box sx={{ flexGrow: 1 }}>
                                <SillsComponent skillDetails={skillDetails} />
                            </Box>
                        }

                    </Box>


                </Stack>
            </Box>
        </>
    )
}

export default EducationAndSkills;