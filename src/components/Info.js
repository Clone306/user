import React from 'react'
// import CloseIcon from '@mui/icons-material/Close';
// import {CloseButton} from 'react-bootstrap';
export default function Info(props) {
    const {av,uname,para,fname,lname,job,email}=props
  return (
    <div className='info-div'>
      <h1>User Details</h1>
      {/* <CloseIcon  className='close' /> */}
      <span className="material-symbols-outlined close">
close
</span>
      <img src={av} alt="" />
      <h1>@{uname}</h1>
      <p>{para}</p>
      <div className='about'>
        <div>
          <label htmlFor="">Full Name</label>
          <li>{fname}{lname}</li> 
        </div>
        <div>

            <label htmlFor="">Job Title</label>
            <li>{job}</li>
        </div>
        <div>
             <label htmlFor="">Email</label>
             <li>{email}</li>

        </div>
      </div>
    </div>
  )
}
