import React from "react";
import axios from 'axios'
const TodoCard = (props) => {
  const API_URL = "http://localhost:5000/todos"
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(API_URL + `/${id}`);
      props.getData();
    //   return response.data;

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="boxed">
        <h3>{props.title}</h3>
        <p>{props.desc.length<60?props.desc:props.desc.slice(0, 60) + '...'}</p>
        {/* {imgae} */}
        <div
          onClick={() => {
            handleDelete(props.id);
          }}
          className="btn btn-sm btn-danger"
        >
          Delete
        </div>
      </div>
    </>
  );
};

export default TodoCard;
