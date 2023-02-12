import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { Avatar, Button, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import "../AdminDashboard/AdminDashboard.css"
import React from 'react'

const Accounts = () => {
  return (
    <div>
        <h3>Accounts</h3>
        
    <Stack direction="column" alignItems="center" spacing={2}>
    <Avatar
        alt="Abc"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 60, height: 60 }}
        />
      <TextField id="standard-basic" label="Update Full Name" variant="standard" />
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
      <Stack display={"inline-flex"}>
      <TextField id="standard-basic" label="Add Category" variant="standard" /> 
      <Button>ADD</Button>
      </Stack>
    </Stack>

    </div>
  )
}

export default Accounts