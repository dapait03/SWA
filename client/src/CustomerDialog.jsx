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
            autoFocus
            margin="dense"
            id="name"
            label="Customer Name"
            defaultValue={name}
            type="name"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="department"
            label="Department"
            defaultValue={department}
            type="department"
            variant="standard"
          />
          <TextField
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
          <Button onClick={onClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomerDialog