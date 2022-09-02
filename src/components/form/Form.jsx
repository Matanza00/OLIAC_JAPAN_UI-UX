import React, { useState } from 'react'
import './form.scss'
import Sidebar from '../sidebar/Sidebar'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { display } from '@mui/system';
//import {useState} from "react";

function Form({inputs,title}) {
  const [file , setFile] = useState("");
  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="right">
              <form>
              <div className="formInput">
                  <label htmlFor='file'>
                    Image:<CloudUploadIcon className='icon'/>
                  </label>
                  <input type="file" id="file" multiple onChange={e=>setFile(e.target.files[0])}
                   style={{display: "none"}}/>
                </div>

                {inputs.map((input)=>(
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input type={input.type} placeholder={input.placeholder}/>
                  </div>
                ))}
                <button>Send</button>
              </form>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Form