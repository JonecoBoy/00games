import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useStaticQuery,graphql, Link, PageProps } from 'gatsby';
import { Divider } from '@mui/material';

export default function NavBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };

  const data = useStaticQuery(graphql`
  query systemsQuery {
    allJson(sort: {fields: generation}) {
      group(field: generation) {
        nodes {
      type
      name
      generation
    }
    fieldValue
  }
    }
  }
`)

const systemsGroups = data.allJson.group

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/"> 00Games</Link>
          </IconButton>
         
          <Link to="/"> (TODO LOGO)</Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            <div>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                Systems
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                
                {systemsGroups.map((item:any)=>{
                  
                  return(<>
                    
                  <MenuItem onClick={handleClose}>{item.fieldValue}</MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  </>
                  )
                })}
                
              </Menu>
            </div>
            
            <div>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu2}
                color="inherit"
              >
                Top Games
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorE2}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorE2)}
                onClose={handleClose2}
              >
                <MenuItem onClick={handleClose2}>Profile</MenuItem>
                <MenuItem onClick={handleClose2}>My account</MenuItem>
              </Menu>
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            <div>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/about"> About</Link>
          </IconButton>
            </div>

            <div>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Link to="/contact"> Contact Us</Link>
          </IconButton>
            </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
 
}
