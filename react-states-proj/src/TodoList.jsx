import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [newTodoInput, setNewTodoInput] = useState("");//input ke liye h yeh
    let [todosList, setTodosList] = useState([]);// todo list ke liye h yeh


    let addnewTask = () => {
        if (newTodoInput.trim() !== "") {
            setTodosList((prevTodosList) => {
                return [...prevTodosList, { task: newTodoInput, id: uuidv4(), done:false }];
            });
            setNewTodoInput("")
        }
    }

    let updateTodoInput = (event) => {
        // console.log(event.target)
        setNewTodoInput(event.target.value)
    }

    let handleKeyPress = (event) => {
        if (event.key === "Enter") {
            addnewTask();
        }
    }

    let deleteTodo = (id) => {
        console.log(id);
        setTodosList((prevTodosList) => {
            return prevTodosList.filter(todo => todo.id !== id);
        });
    }

    let upperCaseAll = () => {
        setTodosList((todosList) => {
            return todosList.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            })
        });
    }
    let upperCaseOne=(id)=>{
        setTodosList((todosList)=>{
            return todosList.map((todo)=>{
                return todo.id==id ? {...todo,task:todo.task.toUpperCase()}:todo
            })
        })
    }

    let markasdone=(id)=>{
        // console.log("mark as done");
        setTodosList((todosList)=>{
            return todosList.map((todo)=>{
                return todo.id==id ? {...todo, done:!todo.done}:todo
            })
        })
    }

    let markAllAsDone=()=>{
        console.log("mark all as done");
        setTodosList((todosList)=>{
            return todosList.map((todo)=>{
                return  {...todo, done:!todo.done}
            })
        })
    }

    return (
        <>
            <hr />
            <input type="text" value={newTodoInput} onChange={updateTodoInput} onKeyPress={handleKeyPress} />

            <button onClick={addnewTask}>Add</button>

            <hr />

            <h4>Todo List</h4>
            <ul>
                {
                    todosList.map((todo) => (
                        <li key={todo.id}  >
                            <span style={{ textDecoration: todo.done ? "line-through" : "none" }} >{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>delete</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>upperCaseOne(todo.id)}>upperCase One</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>markasdone(todo.id)}> {todo.done ? "Mark as Undone" : "Mark as Done"}</button>
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>upperCase All</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={markAllAsDone}>{todosList.every(todo => todo.done) ? "Mark all as Undone" : "Mark all as Done"}</button>
        </>
    )
}