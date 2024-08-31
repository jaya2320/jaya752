import React from 'react';
import { Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import ProjectCard from './ProjectCard';
import Grid from '@mui/material/Grid';

import { projectDataList } from '../../assets/myData';


const Portfolio = () => {


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
                        PORTFOLIO
                    </Typography>
                    <Typography variant="h2"
                        sx={{
                            position: "absolute !important"
                        }}
                    >
                        Projects
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>

                            {projectDataList.map((projectData) => {
                                return <ProjectCard projectData={projectData} />
                            })}

                    </Grid>
                </Box>

            </Stack>
        </Box>
    );
}

export default Portfolio