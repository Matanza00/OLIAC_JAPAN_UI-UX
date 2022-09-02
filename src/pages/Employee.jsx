import React from 'react'
import './main.scss'
import Datatable_Client from '../components/tables/Datatable_Client';

function Employee() {
  return (
    <div className='list'>
      <div className="listContainer">
        <Datatable_Client/>
      </div>
      </div>
  )
}

export default Employee