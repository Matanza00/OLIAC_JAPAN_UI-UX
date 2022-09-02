import React from 'react'
import './datatable.scss'
import NoCrashIcon from '@mui/icons-material/NoCrash';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import {productColumns, productRows} from "../../Datatable_Inventory";
import { Link } from 'react-router-dom';

const Datatable = () => {
  const actionColumn = [{ 
    field:"action", 
    headerName: "Action",
    width: 200,
    renderCell:()=>{
      return(
      <div className='cellAction'>
        <Link to='/inventory/form' style={{textDecoration:'none'}}> 
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
        <Link to='/inventory/form' style={{textDecoration:'none'}} className="link"> 
          <i><NoCrashIcon/></i>Add New Inventory
        </Link> 
          
        </div>
        <DataGrid
        className='datagrid'
            rows={productRows}
            columns={productColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
      />
    </div>
  );
};

export default Datatable;