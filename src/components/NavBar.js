import React from 'react';
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import { connect } from 'react-redux'


const mapStateToProps = state => {
  return {
           addedItems: state.addedItems
          };
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  },
}));


const StyledBadge1 = withStyles(theme => ({
    badge: {
      right: -3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
  
 const Navbar = ({addedItems})=>{
  const classes = useStyles();
    return(
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="nav-style">
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Angara Jewels</Link>
          </Typography>
          <ul className="ul-list">
                        <li>
                          <Link to="/cart">
                            <i>
                            <StyledBadge1 badgeContent={addedItems.length}>
                                <ShoppingCartIcon />
                            </StyledBadge1>
                            </i>
                          </Link></li>
         </ul>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default connect(mapStateToProps)(Navbar);