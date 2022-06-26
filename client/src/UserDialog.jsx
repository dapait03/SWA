import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';

export default function UserDialog(props) {
  const { open, onClose} = props;
 
  const [customer, setCustomer] = React.useState('');
  const username = "Klaus"; //Name aus props oder Datenbank

  const customers = [       //Generation über Datenbank
    {
      value: 'Customer 1',
      label: 'Customer 1',
    },
    {
      value: 'Customer 2',
      label: 'Customer 2',
    },
    {
      value: 'Customer 3',
      label: 'Customer 3',
    },
    {
      value: 'Customer 4',
      label: 'Customer 4',
    },
  ];


  const handleChange = (event) => {
    setCustomer(event.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit User {username}</DialogTitle>
        <DialogContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <Box sx={{width: "100%"}}>
        <TextField
          select
          label="Customer"
          value={customer}
          onChange={handleChange}
        >
          {customers.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>
          <TextField
            autoFocus
            margin="dense"
            id="userFirstName"
            label="First Name"
            type="firstName"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="userLastName"
            label="Last Name"
            type="lastName"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="userMail"
            label="E-Mail"
            type="email"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="userPhoneNr1"
            label="Phone"
            type="phoneNr1"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="userPhoneNr2"
            label="Mobile"
            type="phoneNr2"
            variant="standard"
          />
          <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Is Administrator" />
          </FormGroup>
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}