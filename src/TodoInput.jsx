import { useState } from "react";

export default function TodoInput({addTodo}){

    const [todo, setTodo] = useState("");
   
        
        
    

    function listings(){
        addTodo(todo);
        setTodo("");
    }
    return(
        <div className="input-wrapper">

        <input
            type="text"
            name="todo"
            value={todo}
            placeholder="Create To DO"
            onChange={(e) => {
            setTodo(e.target.value);
            }}
        />
        <button type="button" className="add-button" onClick={listings}>
            Add
        </button>

        </div>
    )

}