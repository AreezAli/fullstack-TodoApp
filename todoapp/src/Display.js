import React from 'react';
import  Page from "./Page";
import SideBar from './SideBar';

const Display = (props) => {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center">
      <SideBar getData={props.getData}/>
      <Page data={props.data}  getData={props.getData} />
    </div>
    </>
  )
}

export default Display
