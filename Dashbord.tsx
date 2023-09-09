
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Person2Icon from '@mui/icons-material/Person2';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import ProfileData from './profile';
import PostData from './PostData';
import OrderList from './OderList';
import Custumer from './Custumer';
import Review from './reviews';
import ListIcon from '@mui/icons-material/List';
import DescriptionIcon from '@mui/icons-material/Description';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ReviewsIcon from '@mui/icons-material/Reviews';
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function DashbordData(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [para, serpara] = useState([

    {
      name: "profile",
      Router: "profile",
      icon: <Person2Icon />

    },

    {
      name: "Data",
      Router: "PostData",
      icon: <Person2Icon />

    },

    {
      name:"OderList",
      Router:"OderList",
      icon:<ListIcon/>
    },

   {
    name:"Custumer",
    Router:"custumer",
    icon:<EmojiPeopleIcon/>
   },
   {
    name:"Reviews",
    Router:"reviews",
    icon:<ReviewsIcon/>
   },

  ])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let navigator = useNavigate()
  const openpage = (Router: any) => {
    navigator(`/${Router}`)
  }

  const drawer = (
    <div>
      <h1>Sepdap</h1>
      <Toolbar />
      <Divider />
      <List>
        {para.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => openpage(text.Router)}>
              <ListItemIcon>
                {text.icon ? text.icon : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" textAlign={"center"}>
            Wasif Ahmed khan
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
          <Route path='profile' element={<ProfileData />} />
          <Route path='PostData' element={<PostData />} />
          <Route path='oderlist' element={<OrderList/>}/>
          <Route path='custumer' element={<Custumer/>}/>
          <Route path='reviews' element={<Review/>}/>


        </Routes>

      </Box>
    </Box>




  );
}
