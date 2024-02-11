// Importing necessary libraries and components
import RubiksCube from "../sketches/RubiksCube";
import myHead from '../../public/myhead.png';
import { nanoid } from "nanoid";
import { useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// The Home component
export default function Home({jsonData}){

    // State for managing the expanded state of the accordion
    const [expanded, setExpanded] = useState(false);

    // Function to handle the change of the accordion's expanded state
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Mapping over the jsonData to create a list of articles
    // Filtering out articles without an image
    const articles = jsonData
        .filter( article => 
            article.urlToImage 
        )
        .sort( (articleA, articleB) => 
            new Date(articleB.publishedAt) - new Date(articleA.publishedAt)
        )
        .map( article =>
            <Grid item key={nanoid()} xs={12} s={4} md={6}>
                <Card 
                    sx={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        overflow: 'hidden',
                        borderRadius: 2, // rounded corners
                        boxShadow: 1, // shadow effect
                        background: '#160a00ee',
                        paddingTop: 0
                    }}
                >
                    <CardMedia 
                        component="img" 
                        height="140" 
                        image={article.urlToImage} 
                        alt={article.title}
                        sx={{
                            objectFit: 'cover', // to ensure the image covers the area
                        }}
                    />
                    <CardContent 
                        sx={{ 
                            flexGrow: 1,
                            paddingTop: 0 
                        }}
                    >
                        <Typography 
                            variant="caption" 
                            color="text.secondary" 
                            sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between' 
                            }}
                        >
                            <CardActions>
                                <Button 
                                    size="small" 
                                    href={article.url}
                                    sx={{
                                        position: 'relative',
                                        right: '1em',
                                        fontSize: '.75rem'
                                    }}
                                >
                                    {article.source.name}
                                </Button> 
                            </CardActions>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                {new Date(article.publishedAt).toLocaleDateString()} 
                            </Box>
                        </Typography>
                        <Typography 
                            variant="h6" 
                            component="div"
                            sx={{
                                marginBottom: '1em'
                            }}
                        >
                            {article.title}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            sx={{
                                fontStyle: 'italic'
                            }}
                        >
                            {article.description} 
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        )
    
    // The return statement of the Home component
    return(

        // Outermost Box component acting as a container for the entire component
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' }, // stacks on small screens, aligns horizontally on larger screens
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '100%',
                maxWidth: '1100px',
                height: '80dvh',
                border: '3px solid blueviolet',
            }}
        >
            {/* Box component for the left side of the page, containing the Rubik's Cube, the tagline and the head image */}
            <Box 
                sx={{ 
                    display: {xs: (expanded ? 'none' : 'flex'), sm:'flex'},
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: { xs: '100%', sm: '40%' }, // takes up full width on small screens, 40% on larger screens
                    userSelect: 'none',
                    position: 'relative',
                    bottom: {xs: '-1.5em', sm: '0'},
                    transition: '3s ease-in-out',
                    order: {xs: '2', sm: '2' } 
                }}
            >

                {/* Box component for the Rubik's Cube */}
                <Box 
                    sx={{
                        position: 'relative',
                        top: {xs:'10em', sm: '3em'},
                        zIndex: 9,
                        transition: '1s ease-in-out'
                    }}
                >
                    <RubiksCube />
                </Box>

                {/* Box component for the head image */}
                <Box 
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        top: {xs:'7.8em', sm: '.7em'},
                        right: '.2em',
                        width: '200px',
                        transition: '1s ease-in-out'
                    }}    
                >
                    <img src={myHead} alt="head" className="head" />
                </Box>

                {/* Box component for the text left side's tagline */}
               <Box
                    sx={{
                        position: 'relative',
                        bottom: {xs:'3em', sm: '10em'},
                        transition: '1s ease-in-out'
                    }}
                >
                    <Typography 
                        variant="subtitle1" 
                        component="span" 
                        sx={{ 
                            fontFamily: 'Miltonian', 
                            fontSize: '1.75rem', 
                            marginLeft: '2rem',
                            textTransform: 'lowercase' 
                        }}
                    >
                        A
                    </Typography>
                    <Typography 
                        variant="h5" 
                        component="p" 
                        sx={{ 
                            marginLeft: '.5rem', 
                            textTransform: 'lowercase',
                            fontFamily: 'Leckerli One',
                            fontSize: '2rem'
                        }}
                    >
                        Different Approach
                    </Typography>
                    <Typography 
                        variant="subtitle1" 
                        component="span" 
                        sx={{ 
                            fontFamily: 'Miltonian', 
                            fontSize: '1.75rem',
                            textTransform: 'lowercase',
                            paddingLeft: '0.25em'  
                        }}
                    >
                        To Solving Problems
                    </Typography>
                </Box>
            </Box>

            {/* Box component for the right side of the page, containing the accordion */}
            <Box 
                sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    height: '100%',
                    width: { xs: '100%', sm: '50%' }, // takes up full width on small screens, 50% on larger screens
                    justifyContent: { xs:'flex-start', sm: 'center' },
                    order: {xs: '1', sm: '1' },
                    transition: '1s ease-in-out'
                }}
            >

                {/* Accordion component for the articles */}
                <Accordion 
                    expanded={expanded === 'panel1'} 
                    onChange={handleChange('panel1')}
                >

                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography 
                            variant="h5"
                            sx={{
                                margin: 'auto'
                            }}
                        >
                            Today in Tech
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails 
                        sx={{ 
                            overflow: 'auto', 
                            maxHeight: "70dvh",
                            ':-webkit-scrollbar': {
                                display: 'none'
                            },
                            scrollbarWidth: 'none'  /* Firefox */
                        }}
                    >
                        {/* Box component for the grid of articles */}
                        <Box sx={{ overflow: 'auto', flexGrow: 1, width: '100%' }}>

                            <Grid container spacing={2}>
                                {articles}
                            </Grid>

                        </Box>
                    </AccordionDetails>
                    
                </Accordion>

            </Box>

        </Box>
    )
}



// import RubiksCube from "../sketches/RubiksCube";
// import head from '../../public/head.png';
// import { nanoid } from "nanoid";

// export default function Home({jsonData}){

//     console.log(jsonData);

//     const articles = jsonData.filter( article => article.urlToImage ).map( article =>
//         <div key={nanoid()} className="article-container">
//             <div className="article-card">
//                 <img className="article-image" src={article.urlToImage}/>
//                 <span className="article-title">{article.title}</span>
//                 <span className="article-description">{article.description}</span>
//             </div>
//         </div>
//     )

//     return(
//         <div className="home-container">
//             <div className="home-container left">
//                 <div className="sketch"><RubiksCube /></div>
//                 <img src={head} className="head"></img>
//                 <span className="tagline">
//                     <span className="subtitle top">
//                         A
//                     </span>
//                     <p className="title"> Different Approach</p>
//                     <span className="subtitle">To Solving Problems</span>
//                 </span>
//             </div>
//             <div className="home-container right">
//                 <span className="title">Today in Technology</span>
//                 <div className="article-grid">
//                     {articles}
//                 </div>
//             </div>
//         </div>
//     )
// }