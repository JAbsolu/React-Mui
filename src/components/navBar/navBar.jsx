import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useTheme, Theme } from '@mui/material';
import { mainNavbarItems } from '../constants/navbarItems';
import { useParams, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const drawerWidth = 230;
    const theme = useTheme();
    const navigate = useNavigate();
    const params = useParams();

    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
          },
          
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavbarItems.map((item) => (
            <ListItem 
                button
                key={item.id} 
                onClick={() => Navigate(item.route)}
            >
               <ListItemIcon
                    button
                    sx={{
                        color: theme.palette.primary.contrastText,
                    }}
               >
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>       
      </Drawer>
    )
}

export default Navbar;