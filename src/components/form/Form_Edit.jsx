import React, { useState } from 'react'
import './form.scss'
import Sidebar from '../sidebar/Sidebar'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';
import { display } from '@mui/system';
//import {useState} from "react";

function Form_Edit({inputs,title}) {
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

                {inputs.map((input)=> (
                  <TextField
                            required
                            id={input.id}
                            label={input.label}
                            defaultValue={input.placeholder}
                            type={input.type}
                          />
                  ))}
                <button>Send</button>
              </form>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Form_Edit


  