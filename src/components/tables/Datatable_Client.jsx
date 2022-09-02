import React from 'react'
import './datatable.scss'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { DataGrid } from '@mui/x-data-grid';
import {userColumns, userRows} from "../../Datatable_User";
import { Link } from 'react-router-dom';

const Datatable = () => {
  const actionColumn = [{ 
    field:"action", 
    headerName: "Action",
    width: 200,
    renderCell:()=>{
      return(
      <div className='cellAction'>
        <Link to='/client/view' style={{textDecoration:'none'}}> 
        <div className="viewButton"><CreateOutlinedIcon/></div></Link>
        <IconButton aria-label="delete" className='deleteButton'>
        <DeleteIcon />
      </IconButton>
      </div>
      )
  }
}]
  return (
    <div className='datatable'>
        <div className="datatableTitle">
        <Link to='/client/form' style={{textDecoration:'none'}} className="link"> 
          <i><PersonAddAltIcon/></i>Add New Client
        </Link> 
        <Link to='/client/payment' style={{textDecoration:'none'}} className="link">  
          <i><CurrencyYenIcon/></i>Add Client Payment
        </Link> 
          
        </div>
        <DataGrid
        className='datagrid'
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
      />
    </div>
  );
};

export default Datatable;