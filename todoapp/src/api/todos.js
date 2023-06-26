const API_URL = "http://localhost:5000/todos"
// export async function getTodosAPI(){
//     return fetch(API_URL)
//     .then(resp => resp.json())
//     .then(data => data)
//     .catch(e => console.log(e))
// }
// export async function postTodosAPI(todo){
//     return fetch(API_URL,{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(todo)
//     })
//     .then(resp => {
//         return resp.json()
//     })
//     .then(data => data)
//     .catch(e => console.log(e))
// }
// export async function patchTodosAPI(id, done){
//     let todo = {
//         _id: id,
//         done: done
//     }
//     return fetch(API_URL+`/${id}`,{
//         method: "PATCH",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(todo)
//     })
//     .then(resp => resp.json())
//     .then(data => data)
//     .catch(e => console.log(e))
// }
// export async function deleteTodosAPI(id){
//     return fetch(API_URL+`/${id}`,{
//         method: "DELETE"
//     })
//     .then(resp => resp.json())
//     .then(data => data)
//     .catch(e => console.log(e))
// }

import axios from 'axios';

export async function getTodosAPI() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postTodosAPI(todo) {
  try {
    const response = await axios.post(API_URL, todo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function patchTodosAPI(id, done) {
  const todo = {
    _id: id,
    done: done
  };
  try {
    const response = await axios.patch(API_URL + `/${id}`, todo, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodosAPI(id) {
  try {
    const response = await axios.delete(API_URL + `/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
