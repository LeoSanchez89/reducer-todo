import React, { useState, useReducer } from "react";
import { listReducer, initialState } from "../reducers/ListReducer";


const TodoList = () => {
	const [state, dispatch] = useReducer(listReducer, initialState);
	// console.log(state, dispatch);

	const [newListItem, setNewListItem] = useState("");

    const handleChanges = e => {
      
		setNewListItem(e.target.value);
	};

	return (
		<div>
			<form>
				<input
					type="text"
					name="newListItem"
					value={newListItem}
					placeholder="Add New Item"
					onChange={handleChanges}
					required
				/>
				<button
                    onClick={e => {
                        e.preventDefault();
                        dispatch({ type: "ADD_TODO", payload: newListItem });
                        setNewListItem("");
					}}
				>
					+
				</button>
			</form>
            {state.todos.map(todo => {
                // console.log(todo);
                return (
                    <div key={todo.id} onClick={e => {
                        e.preventDefault();
                        dispatch({ type: "MARK_COMPLETE", payload: todo.id })
                    }}>
                        <p>{todo.task}</p>    
                    </div>
                )
            })}
		</div>
	);
};

export default TodoList;
