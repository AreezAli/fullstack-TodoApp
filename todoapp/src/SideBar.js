import React, { useState } from 'react'
import "./App.css"
import axios from 'axios';
const SideBar = (props) => {
  const API_URL = "http://localhost:5000/todos"
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [show,setShow]=useState(false);
  const flag=false;

  const saveTod= async(e)=>{
    e.preventDefault();
    try {
      const response = await axios.post(API_URL, 
        {
          title:title,
          description:desc,
          done:flag
        }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      // return response.data;
      setTitle("");
      setDesc("");
      props.getData();
      return ;
    } catch (error) {
      console.log(error);
    }
  }
  const validate=(e)=>{
    e.preventDefault();
    if(title.length<20 && desc.length<100)
    {
      saveTod(e);
    }
    else
    {
      setShow(true);
      setTimeout(()=>{
        setShow(false);
      },10000)
    }

  }

  return (
    <>
     <div className="box d-flex justify-content-center flex-column" style={{width:"300px",position:"fixed",top:0,left:0,zIndex:1}}>
      <div className="user-details" style={{
        height:"20vh",
        margin: "14px 7px 5px",
        display:"flex",
        padding:"20px",
        gap:"10px",
        justifyContent:"center",
        alignItems:'center',
      }}>
        <img style={{borderRadius:"40%"}} src="img1.jpg" width={60} height={60} alt="" />
        <div className="name" style={{fontWeight:600,fontSize:'1.2rem',color:" #6E54A3"}}>Hey User Welcom to TodosApp</div>
      </div>
      <div className="todo-form" style={{
        padding:"20px 20px",
        color:" #6E54A3"
      }}>
        <form>
          {show?
        (
          <span className='text-danger'>Title && Description must be small accordingly <br />
          </span>
        ):"" 
        }
        <label className='form-label' htmlFor="title">Enter Title:</label>
        <input onChange={(e)=>{setTitle(e.target.value)}} value={title}
        className='form-control inputStyle mb-3' id='title' type="text" name='title' />
        <label className='form-label'  htmlFor="desc">Enter Description:</label>
        <textarea rows="5" onChange={(e)=>{setDesc(e.target.value)}} value={desc}
        className='form-control inputStyle .no-scroll' id='desc' type="text" name='desc' />

        <input onClick={validate} type="submit" className='btn1 btn mt-3 btn-sm' value="Add a Todo" name="" id="" />
        </form>
      </div>
      </div>      
    </>
  )
}

export default SideBar
