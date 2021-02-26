import React from "react";
import {Button, ListItem, ListItemText} from "@material-ui/core";
import './todo-List.css';
import {db} from "../firebase/firebase";

function TodoListItem({todo, progress, id}){
    function toggle(){
        db.collection("Todo").doc(id).update({
            progress: !progress
        })
    }
    function deletetodo(){
        db.collection("Todo").doc(id).delete();
    }

        return(
            <div className="styleList">
                <ListItem>
                    <ListItemText primary={todo} secondary={progress ? "In progress..." : "Completed"} />
                </ListItem>

                <Button  color="primary" size="small" onClick={toggle}>
                    {progress?"Done":"Undone"}
                </Button>
                <Button  color="secondary" size="small" onClick={deletetodo}>
                  x
                </Button>

            </div>
        )
}

export default TodoListItem;