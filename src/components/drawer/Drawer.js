import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import AppBar from '@mui/material/AppBar';
import { useLocation } from 'react-router-dom';
import './Drawer.css';
function TemporaryDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
    className={anchor === 'top' || anchor === 'bottom' ? 'drawerFullList' : 'drawerList'}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {[
        { text: 'Home', path: '/home' },
        { text: 'Result', path: '/result' },
        { text: 'Profile', path: '/profile' },
      ].map((item, index) => (
        <ListItem key={item.text}>
          <ListItemButton component={Link} to={item.path} className='drawerLink'>
            {item.text}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </div>
  );
  const location = useLocation();
  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {(location.pathname === '/home' || location.pathname === '/result' || location.pathname === '/profile') && (
            <>
              <AppBar position="static">
                <div className="drawerButtonContainer">
                  <IconButton onClick={toggleDrawer(anchor, true)} >
                    <MenuIcon style={{ fontSize: 40 }}/>
                  </IconButton>
                </div>
              </AppBar>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;