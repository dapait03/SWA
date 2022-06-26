import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomerDialog(props) {
  const { open, onClose} = props;

  const customer = "Klaus"; //Name aus props oder Datenbank

  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Customer {customer}</DialogTitle>
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
            type="name"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="department"
            label="Department"
            type="department"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
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