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
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import UserDialog from './UserDialog';
import ContractDialog from './ContractDialog';
import CustomerDialog from './CustomerDialog';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const TopAppBar = (props) => {
  const {onLogout} = props;

	const [anchorEl, setAnchorEl] = React.useState(null);
	const [headertext, setHeadertext] = React.useState('Customers');
  const [dialogOpenCust, setdialogOpenCust] = React.useState(false);
  const [dialogOpenCon, setdialogOpenCon] = React.useState(false);
  const [dialogOpenUsr, setdialogOpenUsr] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    headerChange();
  });

  const openDialog = () => {
    if(location.pathname === '/'){
      setdialogOpenCust(true);
    }
    else if(location.pathname === '/contracts'){
      setdialogOpenCon(true);
    }
    else if(location.pathname === '/users'){
      setdialogOpenUsr(true);
    }
  };

  const closeDialog = () => {
    setdialogOpenUsr( false );
    setdialogOpenCon( false );
    setdialogOpenCust( false );
  };

  const headerChange = () => {
    if(location.pathname === '/'){
      setHeadertext('Customers');
    }
    else if(location.pathname === '/contracts'){
      setHeadertext('Contracts');
    }
    else if(location.pathname === '/users'){
      setHeadertext('Users');
    }
  }

  const openDialogAcc = () => {
    setdialogOpenUsr(true);
  };

	const isMenuOpen = Boolean(anchorEl);
  
	const handleProfileMenuOpen = (event) => {
	  setAnchorEl(event.currentTarget);
	};
  
	const handleMenuClose = () => {
	  setAnchorEl(null);
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
	  </Menu>
	);

  return (
	<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block', width : "6vw" } }}
          > {headertext}
          </Typography>

		  <Button
      variant="contained" sx={{color : "#1976D2", bgcolor : "white", marginLeft : "6vw"}}
      onClick={openDialog}
      >Add</Button>

      <UserDialog open={dialogOpenUsr} onClose={closeDialog}/>
      <ContractDialog open={dialogOpenCon} onClose={closeDialog}/>
      <CustomerDialog open={dialogOpenCust} onClose={closeDialog}/>

		  <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Filter…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={openDialogAcc}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>

			<IconButton
              size="large"
              color="inherit"
              onClick={onLogout}
            >
              <Badge>
                <LogoutIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  )
}

export default TopAppBar

