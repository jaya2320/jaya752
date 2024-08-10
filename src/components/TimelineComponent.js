import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Typography, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const ExperienceDetailsCard = ({ details }) => {
    return (
        <>
            <Box marginBottom="50px">
                <Grid container spacing={4}>
                    <Grid item ms={2} xs={10}>
                        <Box width="100%">
                            <Typography
                                sx={{
                                    fontSize: "1.1rem!important",
                                    fontWeight: "600 !important",
                                    fontFamily: "Poppins",
                                    color: "#20c997",
                                    '@media (max-width: 600px)': {
                                        fontSize: "1.04rem!important",
                                    },
                                }}
                            > {details.date}</Typography>
                        </Box>
                    </Grid>
                    <Grid item ms={10} xs={10}>
                        <Box width="100%">
                            <Typography variant="h4">
                                {details.title}
                            </Typography>
                            <Typography variant="h5">
                                {details.company}
                            </Typography>
                            <Typography variant="body">
                                {details.description}
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </Box>

        </>
    )
}


const TimelineComponent = ({ timelineData }) => {
    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
                width: "fit-content"
            }}
        >
            {timelineData.map((timeline) => {
                return (
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <ExperienceDetailsCard details={timeline} />
                        </TimelineContent>
                    </TimelineItem>
                )

            })}


        </Timeline>
    );
}
export default TimelineComponent;