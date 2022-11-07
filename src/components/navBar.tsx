import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useStaticQuery,graphql, Link } from 'gatsby';
import { Collapse, Divider} from '@mui/material';

import {ExpandMore,ExpandLess} from '@mui/icons-material';

export default function NavBar() {

  let newOpen =[];
  const data = useStaticQuery(graphql`
  query systemsQuery {
    allJson(sort: {fields: generation}) {
      group(field: generation) {
        nodes {
      type
      name
      developer
      generation
      fields {
              slug
            }
    }
    fieldValue
    totalCount
  }
    }
  }
`)

const systemsGroups = data.allJson.group;

const [open, setOpen] = React.useState(
  // criar um array todo com false para a quantidade de grupos da query de puxar os sistemas
  Array.from({length: systemsGroups.length},()=>false)
);

  const handleClick = (index:number) => {
    
    setOpen(Array.from(open,(element,eIndex)=>{
      if(eIndex == index)
        return !element
        else 
        return element
      
    }));
  };

  
  
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [anchorE2, setAnchorE2] = React.useState<null | HTMLElement>(null);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorE2(event.currentTarget);
  };
  

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => {
    setAnchorE2(null);
  };



  return (
    <Box sx={{ flexGrow: 1}}>
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
                
                {systemsGroups.map((item:any,index:number)=>{
                  
                  return(<div key={index}>
                    
                  
                  <MenuItem onClick={()=>handleClick(index)}>{item.fieldValue} {open[index]?<ExpandLess/>:<ExpandMore/>}</MenuItem>
                <Collapse key={`colapse-${index}`} in={open[index]}>
                  {item.nodes.map(
                    (system:any)=>{
                    return (
                      <MenuItem key={index} onClick={handleClose}><Link className='menuItem' to = {`/systems/${system.fields.slug}`}>{`${system.developer} ${system.name} `}</Link></MenuItem>
                    )
                  })}
                  
                  </Collapse>
                  {/* nao colocar a divisao se for o ultimo item */}
                  {index == (systemsGroups.length-1) ? null :<Divider key={`divider-${index}`} sx={{ my: 0.5 }} />}
                  
                  </div>
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
