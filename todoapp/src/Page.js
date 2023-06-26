import React from 'react'
import Todocard from './TodoCard';

const Page = (props) => {
  const data=props.data;
  const getData=props.getData;
  return (
    <>
    <div className='d-flex flex-column justify-content-flex-start w-full' style={{flex:1,marginLeft:"300px", color:"#FFFFFF",border:"10px solid #FFFFFF",borderRadius:"12px",backgroundColor:"#6E54A3"}}>
     <h1 style={{height:"15vh", padding:"30px 100px"}}>Todos List</h1> 
     <div className="todoslist" style={{padding:"5px 10px",minHeight:"80vh"}}>
      <div className="todoslist d-flex gap-4 justify-content-center align-items-center flex-wrap">
      {
  data.map((item) => (
    <Todocard key={item._id} id={item._id} title={item.title} desc={item.description} getData={getData} />
  ))
    }
      </div>
     </div>
    </div>
    </>
  )
}

export default Page
