import React, { useState, useReducer } from "react";
import { listReducer, initialState } from "../reducers/ListReducer";
import { Button, Input, InputGroup } from "reactstrap";

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
				<InputGroup>
					<Input
						type="text"
						name="newListItem"
						value={newListItem}
						placeholder="Add New Item"
						onChange={handleChanges}
						required
					/>
					{/* {newListItem.length > 0 ? (
						<Button
							onClick={() => {
								// e.preventDefault();
								dispatch({ type: "ADD_TODO", payload: newListItem });
								setNewListItem("");
							}}
						>
							+
						</Button>
					) : null} */}
				</InputGroup>
			</form>

			{state.todos.map(todo => {
				// console.log(todo);
				return (
					<div
						key={todo.id}
						className={todo.completed === false ? "todo" : "todo completed"}
						onClick={() => {
							todo.completed = !todo.completed;
							dispatch({ type: "MARK_COMPLETE" });
						}}
					>
						<p>{todo.task}</p>
					</div>
				);
			})}
			{newListItem.length > 0 ? (
				<Button
					onClick={() => {
						// e.preventDefault();
						dispatch({ type: "ADD_TODO", payload: newListItem });
						setNewListItem("");
					}}
				>
					+
				</Button>
			) : null}
			<Button
				onClick={() => {
					dispatch({ type: "CLEAR_COMPLETED" });
				}}
			>
				-
			</Button>
		</div>
	);
};

export default TodoList;
