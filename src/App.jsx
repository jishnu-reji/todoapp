import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addTodo, removeTodo } from "./REDUX/todoSlice";
import {  useState } from "react";



function App() {

  const dispatch = useDispatch()
  const [todoName,setTodoName] = useState("")
  const allTodo = useSelector(state=>state.todoReducer)

  const handleChange=(e)=>{
    setTodoName(e)
  }

  const addNewTodo=()=>{
    dispatch(addTodo({ toDoDetails: todoName }))
    setTodoName("")
  }


  console.log(allTodo);


  return (
    <>
      <div
        style={{
          backgroundColor: "#a3d2e2",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        <div className="p-4 container" style={{ backgroundColor: "white", width: "90%" }}>
          <h1 className="mb-4">My Todo list</h1>
          <div className="d-flex w-50">
            <input
              type="text"
              className="form-control"
              placeholder="Add todo"
              value={todoName}
              onChange={(e)=>handleChange(e.target.value)}
            />
            <button onClick={addNewTodo} className="btn btn-info ms-2">Submit</button>
          </div>

          <div className="mt-3">
            {allTodo.length>0?allTodo.map((item,index)=>(
              <div
              style={{ height: "80px" }}
              className="d-flex justify-content-between align-items-center border p-3"
            >
              <div class="form-check d-flex align-items-center">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label style={{fontSize:"20px"}} class="form-check-label ps-2" htmlFor="flexCheckDefault">
                  {item.toDoDetails}
                </label>
              </div>
              <button onClick={()=>dispatch(removeTodo(index))} className="btn btn-danger">Delete</button>
            </div>
            ))
          :
          <div></div>
          }
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
