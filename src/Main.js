import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Users from './components/Users';
import Info from './components/Info'
// import { CircularProgress } from '@material-ui/core'; 
// import { CircularProgress } from '@mui/material';
export default function Main() {

  const [data,setData] = useState([]);
  const [load,setLoad] = useState(false)
  const [log,setLog] = useState(false)
  const api ="https://602e7c2c4410730017c50b9d.mockapi.io/users"
  let close = document.querySelector(".close")
  const fetchData = async()=>
  {
    try {
      setLoad(true)
      setLog(false)
      let user = await axios.get(api);
      setData(user.data.slice(10,user.data.length));
      setLoad(false)  
    } catch (error) 
    {
      setLoad(false)  
      setLog(true)
       
    }
    }

    useEffect(()=>
    {
        fetchData();
    },[api])

    // const [dis ,setDis] = useState("none")
    const [val,setVal] = useState("")
    console.log(data)
    let prof = document.querySelectorAll(".profile")

    prof.forEach(e =>  
     { 
        e&&e.addEventListener("click",(el)=>
        {
            setVal(e.children[0].src)
            // console.log(e.children[0].src)
        },false)  
    }
    )
    console.log(val)
    close&&close.addEventListener("click",()=>
    {
           setVal("")
    },false)
  return (
    <div className='main'>
       {/* <CircularProgress  /> */}
      <div className='card'>
      <div>
      <h1 className='h'>Users List</h1>
     {log&&<h1 className="msg"  >NO DATA TO SHOW</h1>}
      <div className='box'>
        {
         data.map((e)=>
            {
            return <Users  key={e.profile.username} img={e.avatar} fname={e.profile.firstName} lname={e.profile.lastName} />
            })
         }

      </div>
      </div>
      <div className='info'>
        {
            data.map((e)=>{

                return e.avatar===val?<Info job={e.jobTitle} email={e.profile.email}  av={e.avatar} fname={e.profile.firstName} lname={e.profile.lastName} uname={e.profile.username} para={e.Bio} />:null
            })

        }
      </div>
      </div>
     {load&&<div className='spin'>
      <span className="loader "></span>

      </div>}

    </div>
  )
}
