import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useEffect} from 'react';
import HttpService from './HttpService';

const CustomerDialog = (props) => { 
  const { open, onClose, id, address, department, name } = props;

  var custAddress = address;
  var custDepartment = department;
  var custName = name;


  const handleNameFieldChange = (event) => {
     custName = event.target.value;
}

const handleDepartmentFieldChange = (event) => {
      custDepartment = event.target.value;
}

const handleAddressFieldChange = (event) => {
      custAddress = event.target.value;
}

const onSave = () => {
  HttpService.updateCustomer(id, custName, custDepartment, custAddress);

  onClose();
}
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Customer {name} </DialogTitle>
        <DialogContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
          onChange={(event) => handleNameFieldChange(event)}
            autoFocus
            margin="dense"
            id="name"
            label="Customer Name"
            defaultValue={name}
            type="name"
            variant="standard"
          />
          <TextField
            onChange={(event) => handleDepartmentFieldChange(event)}
            margin="dense"
            id="department"
            label="Department"
            defaultValue={department}
            type="department"
            variant="standard"
          />
          <TextField
          onChange={(event) => handleAddressFieldChange(event)}
            margin="dense"
            id="address"
            label="Address"
            defaultValue={address}
            type="address"
            variant="standard"
          />
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

export default CustomerDialog