import React from 'react'
import './datatable.scss'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import {orderColumns, orderRows} from "../../Datatable_Order";
import { Link } from 'react-router-dom';

const Datatable = () => {
  const actionColumn = [{ 
    field:"action", 
    headerName: "Action",
    width: 200,
    renderCell:()=>{
      return(
      <div className='cellAction'>
        <Link to='/order/form' style={{textDecoration:'none'}}> 
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
        </div>
        <DataGrid
        className='datagrid'
            rows={orderRows}
            columns={orderColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
      />
    </div>
  );
};

export default Datatable;