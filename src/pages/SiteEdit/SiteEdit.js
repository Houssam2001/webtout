import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {createTheme, ThemeProvider} from '@mui/material/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://WebTout.com">
                WebTout
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [
    {
        image: "https://source.unsplash.com/random/1",
        heading:'Website 1'
    }, {
        image: "https://source.unsplash.com/random/2",
        heading:'Website 2'
    }, {
        image: "https://source.unsplash.com/random/3",
        heading:'Website 3'
    }, {
        image: "https://source.unsplash.com/random/4",
        heading:'Website 4'
    }, {
        image: "https://source.unsplash.com/random/5",
        heading:'Website 5'
    }, {
        image: "https://source.unsplash.com/random/6",
        heading:'Website 6'
    }, {
        image: "https://source.unsplash.com/random/7",
        heading:'Website 7'
    }, {
        image: "https://source.unsplash.com/random/8",
        heading:'Website 8'
    }, {
        image: "https://source.unsplash.com/random/9",
        heading:'Website 9'
    }, ];

const theme = createTheme();

export default function SiteEdit() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <WebAssetIcon sx={{mr: 2}}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        Websites
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                           Websites Album
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Make Your Websites with simple click and easy steps .
                            Make Money or publish your Websites for free.
                        </Typography>
                        <Stack
                            sx={{pt: 4}}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Make with blank Websites</Button>
                            <Button variant="outlined">Make with existing Websites</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{py: 8}} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image={card.image}
                                        alt="random"
                                    />
                                    <CardContent sx={{flexGrow: 1}}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.heading}
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{bgcolor: 'background.paper', p: 6}} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Make your Future with our website!
                </Typography>
                <Copyright/>
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}