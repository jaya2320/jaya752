import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { educationDetails, skillDetails } from '../../assets/myData';
import {EducationCard, SillsComponent} from "../EducationAndSkills/EducationAndSkillsComponents.utils"



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