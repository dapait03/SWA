import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

const SideMenu = (props) => {
    const { highlight } = props;

    const highlightButton = (event) => {  //Wechsel der RadioButtons
        console.log("clicked");
      };
  return (
    <div>
        <Box
        sx={{
          width: 300,
          height: '90vh',
          marginTop : "10px",
          backgroundColor: 'primary.main',
         }}
        >
            <Button component={Link} to="/" variant="contained" size="large" sx={{color : "#1976D2", bgcolor: "white", borderColor : "white", marginTop: "10vh", width:"80%", marginLeft: "10%"}}
                        onClick={highlightButton}
            >
                Customers
            </Button>
            <Button component={Link} to="/contracts" variant="outlined" size="large" sx={{color : "white",  borderColor : "white", marginTop: "5vh", width:"80%" , marginLeft: "10%"}} 
                        onClick={highlightButton}
            >
                Contracts
            </Button>
            <Button component={Link} to="/users" variant="outlined" size="large" sx={{color : "white", borderColor : "white", marginTop: "5vh", width:"80%" , marginLeft: "10%"}}
                        onClick={highlightButton}
            >
                Users
            </Button>
        </Box>
    </div>
  )
}

export default SideMenu;
