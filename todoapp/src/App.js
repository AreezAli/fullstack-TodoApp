// import React, { useState, useEffect } from 'react';
// import { postTodosAPI, getTodosAPI } from './api/todos'
// import CreateToDo from './CreateToDo';
// import TodoTable from './TodoTable'
// function App() {
//   const data=[
//     {
//       title:"Areez Ali",
//       "description":"MY desc",
//       done:false
//     },
//     {
//       title:"Areez Ali",
//       "description":"MY desc",
//       done:false
//     }
//   ]
//   const [todos, setTodos] = useState([])
//   useEffect(() => {
//     // getTodosAPI().then(todos => setTodos(todos))
//     setTodos(data);
//   }, []);
//   const addTodo = (todo) => {
//     postTodosAPI(todo).then(data => {
//       setTodos([...todos, data])
//     })
//   }
//     return (
//       <main role="main" className="container">
//         <CreateToDo onCreate={addTodo} />
//         <TodoTable todos={todos}/>
//       </main>  
//     )
// }
// export default App;


// import React, { useState, useEffect } from 'react';
// import { postTodosAPI, getTodosAPI, patchTodosAPI, deleteTodosAPI } from './api/todos'
// import CreateToDo from './CreateToDo';
// import TodoTable from './TodoTable'
// function App() {
//   const [todos, setTodos] = useState([])
//   useEffect(() => {
//     getTodosAPI().then(todos => setTodos(todos))
//   }, []);
//   const addTodo = (todo) => {
//     postTodosAPI(todo).then(data => {
//       setTodos([...todos, data])
//     })
//   }
//   const updateTodo = (id, done) => {
//     patchTodosAPI(id, (done) ? false : true).then(data => {
//       if(data){
//         getTodosAPI().then(todos => setTodos(todos))
//       }
//     })
//   }
//   const deleteTodo = (id) => {
//     deleteTodosAPI(id).then(data => {
//       if (data.deletedCount === 1) {
//         setTodos(todos.filter(todo => todo._id !== id))
//       }
//     })
//   }
//     return (
//       <main role="main" className="container">
//         <CreateToDo onCreate={addTodo} />
//         <TodoTable 
//           todos={todos} 
//           onUpdate={updateTodo}
//           onDelete={deleteTodo}
//         />
//       </main>  
//     )
// }
// export default App;


import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import Display from './Display';

const App = () => {
  const [data,setData] =useState([]);
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/todos/');
      setData(response.data);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { 
    getData();
  }, []);
  return (
    <>
      <Display data={data} getData={getData} />
    </>
  )
}

export default App
