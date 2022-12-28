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
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';



export default function NavBar({ showSidebar }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
      {/* <SignupModal />
      <SigninModal /> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <div className='align-vertical'>
          <Settings />
          <Button>Settings</Button>
        </div>
      </MenuItem>
    </Menu>
  );

  return (
    <Box >
      <AppBar position="static" sx={{ backgroundColor: 'hsl(154deg 100% 1%)' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { md: 'flex', lg: 'none' },
              }}
            >
              {
                NavBarLinks.map((v) => {
                  return (
                    <Typography
                      noWrap
                      component="div"
                      className='navlinksMobile-icons'
                      sx={{ display: { sm: 'flex', lg: 'none' } }}
                    >
                      <span>{v.icon}</span>
                      <span>{v.name}</span>
                    </Typography>

                  )
                })

              }
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            {
              NavBarLinks.map((v) => {
                return (
                  <Typography
                    noWrap
                    component="div"
                    className='navlinks-icons'
                    sx={{ display: { xs: 'none', lg: 'flex' } }}
                  >
                    <span>{v.icon}</span>
                    <span>{v.name}</span>
                  </Typography>

                )
              })

            }
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            aria-label="Notifications"
            color="inherit"
          >
            <NotificationAddSharp />
          </IconButton>


          <Box sx={{ display: { xs: 'flex', lg: 'flex' },alignItems:'center' }}>

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
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <Divider orientation="vertical" flexItem className='divider' />
              <Typography>
                <p><span>John Doe</span><br /><span className='textColor'>Super admin</span></p>
              </Typography>
            </Box>
            <div style={{}}>
              <Button onClick={() => { showSidebar() }}><ViewSidebarOutlinedIcon sx={{ color: 'white' }} /></Button>
            </div>
          </Box>

        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {renderMenu}
    </Box>
  );
}
