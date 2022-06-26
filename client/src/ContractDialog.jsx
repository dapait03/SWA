import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MenuItem from '@mui/material/MenuItem';

// npm i date-fns // npm install @mui/x-date-pickers // npm install @mui/x-data-grid

export default function ContractDialog() {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date('2022-08-18T21:11:54'));
  const [version, setVersion] = React.useState('');
  const [responsible, setResponsible] = React.useState('');
  const contract ="test"; //Name aus props oder Datenbank
  const responsibles = [       //Generation über Datenbank
  {
    value: 'Name 1',
    label: 'Name 1',
  },
  {
    value: 'Name 2',
    label: 'Name 2',
  },
];
const versions = [       //Generation über Datenbank
{
  value: '1.0.1',
  label: '1.0.1',
},
{
  value: '2.0.3',
  label: '2.0.3',
},
];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange1 = (event) => {
    setVersion(event.target.value);
  };

  const handleChange2 = (event) => {
    setResponsible(event.target.value);
  };



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contract Details {contract}</DialogTitle>
        <DialogContent>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >

        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
        label="Start"
        id="contractStartDate"
        value={date}
        onChange={(newDate) => {
          setDate(newDate);
        }}
        renderInput={(params) => <TextField {...params} />}
        />

        <DatePicker
        label="End"
        value={date}
        id="contractEndDate"
        onChange={(newDate) => {
          setDate(newDate);
        }}
        renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        <TextField
          select
          label="Version"
          id="contractVersion"
          value={version}
          onChange={handleChange1}
        >
          {versions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Responsible"
          value={responsible}
          onChange={handleChange2}
        >
          {responsibles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
            margin="dense"
            id="contractIPs1"
            label="IP Number"
            type="IPs"
            variant="standard"
          />

          <TextField
            margin="dense"
            id="contractNumFeature1"
            label="Feature A"
            type="numFeature"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractIPs2"
            label="IP Number"
            type="IPs"
            variant="standard"
          />
         <TextField
            margin="dense"
            id="contractNumFeature2"
            label="Feature B"
            type="numFeature"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractIPs3"
            label="IP Number"
            type="IPs"
            variant="standard"
          />
          <TextField
            margin="dense"
            id="contractNumFeature3"
            label="Feature C"
            type="numFeature"
            variant="standard"
          />
          </Box>

          <Box
            sx={{
              width: "100%",
              maxWidth: '76%',
          }}
          >
          <TextField
          sx={{border: '1px solid #ADADAD', borderRadius: 1, marginTop : "20px" }}
            fullWidth
            multiline
            rows={4}
            id="contractLicenseKey"
            label=" License Key"
            type="licenseKey"
            variant="standard"
          />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}