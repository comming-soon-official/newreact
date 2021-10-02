// import { Dialog, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";

import React, {useState} from 'react'


const Demojs = () => {
     const [open, setOpen] = useState(false);
  const [maindata, setMaindata] = useState("");

  const handleClickOpen = (e) => {
    setOpen(true);
    setMaindata(e);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <div>
            <button onClick={handleClickOpen}> open</button>
            <Dialog
        open={open}
        className="mainbox"
        onClose={handleClose}
        maxWidth="700px"
      >
        <DialogTitle>
          <div className="head">
            <label>Assets Edit</label>
            <button className="head" onClick={handleClose}>
              X
            </button>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
        
          </DialogContentText>
          </DialogContent>
      </Dialog>

        </div>
    )
}

export default Demojs


