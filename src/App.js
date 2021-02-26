import React, {useEffect, useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import './App.css';
import {db} from "./firebase/firebase";
import firebase from "firebase";
import TodoListItem from "./Todo-List/todoList";

function App() {
  const [TodoInput, setTodoInput] = useState('');
    const [Todos, setTodos] = useState([]);

  useEffect(
      ()=>{
          getTodo();
      },
      []
  ) //run only on first launch

  function getTodo(){
        db.collection("Todo").onSnapshot(function(querySnapshot){
           setTodos(
               querySnapshot.docs.map((doc)=>({
                   id: doc.id,
                   Todo: doc.data().Todo,
                   Progress: doc.data().progress,
               }))

           );
        })
  }

  function Todo(e){
        e.preventDefault();
      db.collection("Todo").add({
         Todo:TodoInput,
         progress: true,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      setTodoInput('');
  }
  return (
    <div className="Container">
        <div >
            <h1> Abhay ToDo List App</h1>
            <form>
                <TextField
                    value={TodoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                    id="standard-basic"
                    label="Write a ToDo"
                />
                <Button variant="contained"
                        onClick={Todo}
                        style={{marginLeft:20}}
                        color="primary">

                    + add new Todo
                </Button>
            </form>

            {Todos.map((todo)=>(
                <TodoListItem
                    todo={todo.Todo}
                    progress={todo.Progress}
                    id={todo.id}
                />
            )

                )}


        </div>


    </div>
  );
}

export default App;
