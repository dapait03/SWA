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
import HttpService from './HttpService';

export default function UserDialog(props) {
  const { open, onClose, editRow, firstName, lastName, mail, phoneNumber1, phoneNumber2, password, isAdmin, username} = props;

  //var userCustName = user.customerName;
  var userFirstName= firstName;
  var userLastName= lastName;
  var userEmail= mail;
  var userPhoneNr = phoneNumber1;
  var userPhoneNr2 = phoneNumber2;
  var Admin = isAdmin;
 
  const [customer, setCustomer] = React.useState('');

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

 // const handleCustNameFieldChange = (event) => {
 //   userCustName = event.target.value;
 // }

  const handleFirstNameFieldChange = (event) => {
    userFirstName = event.target.value;
  }

  const handleLastNameFieldChange = (event) => {
    userLastName = event.target.value;
  }

  const handleEmailFieldChange = (event) => {
    userEmail = event.target.value;
  }

  const handlePhoneNr1FieldChange = (event) => {
    userPhoneNr = event.target.value;
  }

  const handlePhoneNr2FieldChange = (event) => {
    userPhoneNr2 = event.target.value;
  }

  const handleAdminCheckboxChange = (event) => {
    Admin = event.target.checked;
  }

  const onSave = () => {

    HttpService.updateUser(editRow, userFirstName, userLastName, username, password, userEmail, userPhoneNr, userPhoneNr2, Admin);

    onClose();
  }


  const handleChange = (event) => {
    setCustomer(event.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit User {firstName}</DialogTitle>
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
            onChange={(event) => handleFirstNameFieldChange(event)}
            margin="dense"
            id="userFirstName"
            label="First Name"
            defaultValue={firstName}
            type="firstName"
            variant="standard"
          />
          <TextField
            onChange={(event) => handleLastNameFieldChange(event)}
            margin="dense"
            id="userLastName"
            label="Last Name"
            defaultValue={lastName}
            type="lastName"
            variant="standard"
          />
          <TextField
            onChange={(event) => handleEmailFieldChange(event)}
            margin="dense"
            id="userMail"
            label="E-Mail"
            defaultValue={mail}
            type="email"
            variant="standard"
          />
          <TextField
            onChange={(event) => handlePhoneNr1FieldChange(event)}
            margin="dense"
            id="userPhoneNr1"
            label="Phone"
            defaultValue={phoneNumber1}
            type="phoneNr1"
            variant="standard"
          />
          <TextField
          onChange={(event) => handlePhoneNr2FieldChange(event)}
            margin="dense"
            id="userPhoneNr2"
            label="Mobile"
            defaultValue={phoneNumber2}
            type="phoneNr2"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            defaultValue={password}
            type="password"
            variant="standard"
          />
          <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked={isAdmin} onChange={(event) => handleAdminCheckboxChange(event)} />} label="Is Administrator" />
          </FormGroup>
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}