import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TimelineComponent from './TimelineComponent';
import { timelineData } from '../assets/myData';

const WorkExperience = () => {

    return (
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
                    marginLeft: "0",
                    marginTop: "80px",
                    overflowY: 'auto',
                    position: "relative",
                    display: "block",
                },
            }}>
            <Stack spacing={1}>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    <Typography variant='h1'>
                        WORK EXPERIENCE
                    </Typography>
                    <Typography variant="h2"
                        sx={{
                            position: "absolute !important"
                        }}
                    >
                        Career History
                    </Typography>
                </Box>


                <Box sx={{ maxWidth: "100%" }}>
                    <TimelineComponent timelineData={timelineData} />
                </Box>
            </Stack>
        </Box>
    );
}

export default WorkExperience;
