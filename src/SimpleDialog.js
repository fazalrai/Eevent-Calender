import React from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import TextField from '@material-ui/core/TextField';

import {
  KeyboardDatePicker,
} from '@material-ui/pickers';
function SimpleDialog(props) {
  const [eventDetails,setEventDetails]= React.useState({
    title:"",
    startDate:"",
    endDate:"",

  });
const handleSubmit=()=>{
  props.setEventList([...props.eventsList,eventDetails])
}
  return (
    <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Event Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            value={eventDetails.title}
            onChange={(e)=>setEventDetails({...eventDetails,title:e.target.value})}
            fullWidth
          />
          <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Start date"
          value={eventDetails.startDate}
          onChange={(e)=>setEventDetails({...eventDetails,startDate:e.target.value})}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
          <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="End Date "
          value={eventDetails.endDate}
          onChange={(e)=>setEventDetails({...eventDetails,endDate:e.target.value})}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    
  )
}

export default SimpleDialog
