import React from 'react';
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';

const StyledBadge1 = withStyles(theme => ({
    badge: {
      right: -3,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);
  
  const StyledBadge2 = withStyles(theme => ({
    badge: {
      backgroundColor: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid #44b700',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Angara Jewels</Link>
                    
                    <ul className="right">
                        <li><Link to="/cart">My Cart</Link></li>
                        <li><Link to="/cart">
                            <i>
                            <StyledBadge1 badgeContent={4}>
                                <ShoppingCartIcon />
                            </StyledBadge1>
                            </i>
                            </Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;