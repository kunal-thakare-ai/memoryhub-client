import React, {useState, useEffect} from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from "react-redux";

import memories from "./images/memories.png"
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form";
import {getPosts} from "./actions/posts"


import useStyles from "./styles";

const App = () => {
    const classes = useStyles();
    const dispatch =  useDispatch();
    const [currentId, setCurrentId] = useState(null);
    const [d, setD] = useState(true);


    useEffect(()=>{
        dispatch(getPosts());
        dispatch(getPosts());
    }, [currentId, dispatch, d])
    return(
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading}  variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="Memories" height="60"/>
            </AppBar>
                <Grow in>
                    <Container>
                        <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts setCurrentId={setCurrentId} d={d} setD={setD} currentId={currentId}></Posts>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId}></Form>
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
        </Container>
    )
}

export default App;