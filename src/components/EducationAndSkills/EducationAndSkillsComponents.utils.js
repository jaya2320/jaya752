import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';


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

export const SillsComponent = ({ skillDetails }) => {
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

export const EducationCard = ({ details }) => {
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
