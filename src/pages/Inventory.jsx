import React from 'react'
import './main.scss'
import Datatable_Inventory from '../components/tables/Datatable_Inventory';

function Inventory() {
  return (
    <div className='list'>
      <div className="listContainer">
        <Datatable_Inventory/>
      </div>
      </div>
  )
}

export default Inventory