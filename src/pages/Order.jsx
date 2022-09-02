import React from 'react'
import './main.scss'
import Datatable_Order from '../components/tables/Datatable_Order';

function Order() {
  return (
    <div className='list'>
      <div className="listContainer">
        <Datatable_Order/>
      </div>
      </div>
  )
}

export default Order