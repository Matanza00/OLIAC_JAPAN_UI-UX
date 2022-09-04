import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Form_View({inputs,title}) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        
        {inputs.map((input)=> (
        <TextField
          id={input.id}
          label={input.label}
          defaultValue="Will Fetch From DB"
          type={input.type}
          placeholder={input.placeholder}
          InputProps={{
            
            readOnly: true,
          }}
        
        />
        ))}
        
      </div>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </Box>
    
  );
}