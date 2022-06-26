import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const SideMenu = () => {
    const [color1, setColor1] = React.useState("#1976D2");
    const [color2, setColor2] = React.useState("white");
    const [color3, setColor3] = React.useState("white");

    const [bgColor1, setBgColor1] = React.useState("white");
    const [bgColor2, setBgColor2] = React.useState("#1976D2");
    const [bgColor3, setBgColor3] = React.useState("#1976D2");

    const highlightButton = (path) => {  // highlight the button that is currently selected
        setColor1("white"); setColor2("white"); setColor3("white");
        setBgColor1("#1976D2"); setBgColor2("#1976D2"); setBgColor3("#1976D2");
        if(path == "/"){
            setColor1("#1976D2"); setBgColor1("white");
        }
        else if(path == "/contracts"){
            setColor2("#1976D2"); setBgColor2("white");
        }
        else if(path == "/users"){
            setColor3("#1976D2"); setBgColor3("white");
        }
      };
  return (
    <div>
        <Box
        sx={{
          width: "12vw",
          height: '90vh',
          marginTop : "10px",
          backgroundColor: 'primary.main',
         }}
        >
            <Button component={Link} to="/" variant="outlined" size="large" sx={{color : color1, bgcolor: bgColor1, borderColor : "white", marginTop: "10vh", width:"80%", marginLeft: "10%",  '&:hover': {
                backgroundColor: "#0b365e",
            },}}
                        onClick={() => highlightButton("/")}
            >
                Customers
            </Button>
            <Button component={Link} to="/contracts" variant="outlined" size="large" sx={{color : color2, bgcolor: bgColor2,  borderColor : "white", marginTop: "5vh", width:"80%" , marginLeft: "10%", '&:hover': {
                backgroundColor: "#0b365e"
            },}} 
                        onClick={() => highlightButton("/contracts")}
            >
                Contracts
            </Button>
            <Button component={Link} to="/users" variant="outlined" size="large" sx={{color : color3, bgcolor: bgColor3, borderColor : "white", marginTop: "5vh", width:"80%" , marginLeft: "10%", '&:hover': {
                backgroundColor: "#0b365e"
            },}}
                        onClick={() => highlightButton("/users")}
            >
                Users
            </Button>
        </Box>
    </div>
  )
}

export default SideMenu;
