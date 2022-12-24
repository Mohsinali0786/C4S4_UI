import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { SignupModal, SigninModal } from '../index';
import HomeIcon from '@mui/icons-material/Home';
import IronIcon from '@mui/icons-material/Iron';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { NotificationAddSharp, Settings } from '@mui/icons-material';
import { Divider, Button } from '@mui/material';


export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const NavBarLinks = [{ name: 'Home', icon: <HomeIcon />, link: '' },
  { name: 'Wardrobe', icon: <IronIcon />, link: '' },
  { name: 'Shopnow', icon: <StorefrontIcon />, link: '' },
  { name: 'Whitelist', icon: <FormatListBulletedIcon />, link: '' },
  { name: 'Place Order', icon: <BorderColorIcon />, link: '' }]

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <SignupModal />
      <SigninModal />
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Typography>
        <p className='align-vertical'><span ><AccountCircle /></span><span>John Doe</span></p>
      </Typography>
      <SignupModal />
      <SigninModal />
      <MenuItem onClick={handleProfileMenuOpen}>
        <div className='align-vertical'>
          <Settings />
          <Button>Settings</Button>
        </div>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'hsl(154deg 100% 1%)' }}>
        <Toolbar>
          {
            NavBarLinks.map((v) => {
              return (
                <Typography
                  noWrap
                  component="div"
                  className='ml-10px  navlinks-icons'
                  sx={{ display: { xs: 'none', sm: 'flex' } }}
                >
                  <span>{v.icon}</span>
                  <span>{v.name}</span>
                </Typography>

              )
            })

          }
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { sm: 'none', lg: 'flex' } }}>

            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className='Navbar-account-circle'
            >
              <AccountCircle />
            </IconButton>
            <Divider orientation="vertical" flexItem className='divider' />
            <Typography>
              <p><span>John Doe</span><br /><span className='textColor'>Super admin</span></p>
            </Typography>
          </Box>
          <Box sx={{ display: { md: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <IconButton
            size="large"
            aria-label="Notifications"
            // aria-controls={menuId}
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <NotificationAddSharp />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
