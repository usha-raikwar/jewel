import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const images = require.context('../../public/images', true);


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Product = (props) => {
    const classes = useStyles();

    return (
        <div>
           <Grid container spacing={3}>
           <Grid item md={4} justify-content="center">
               <img src={images(`./${props.item.image}`)} alt="Ring" height="50%" width="50%"/>       
           </Grid>
           <Grid item md={4}>
                <Paper className={classes.paper}><span><b>Price: </b></span>${props.item.price}</Paper>    
           </Grid>
           </Grid>
       </div>
       );
}

export default Product;
