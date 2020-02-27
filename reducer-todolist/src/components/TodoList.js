import React, { useState, useReducer } from "react";
import { listReducer, initialState } from "../reducers/ListReducer";
import { Button, Input, InputGroup, ListGroupItem, ListGroup } from "reactstrap";
import styled from "styled-components";

const TodoList = () => {
	const [state, dispatch] = useReducer(listReducer, initialState);
	// console.log(state, dispatch);

	const [newListItem, setNewListItem] = useState("");

	const handleChanges = e => {
		setNewListItem(e.target.value);
	};
	
	const handleSubmit = e => {

		e.preventDefault();
		dispatch({ type: "ADD_TODO", payload: newListItem });
		setNewListItem("");
	};

	return (
		<div className = "main-container">
			<form onSubmit={handleSubmit} className ="text-input">
				<InputGroup>
					<Input
						type="text"
						name="newListItem"
						value={newListItem}
						placeholder="Add New Item"
						onChange={handleChanges}
						// required
					/>
				</InputGroup>
			</form>

			{state.todos.map(todo => {
				// console.log(todo);
				return (
					<StyledList
						key={todo.id}
						className={todo.completed === false ? "todo" : "todo completed"}
						onClick={() => {
							todo.completed = !todo.completed;
							dispatch({ type: "MARK_COMPLETE" });
						}}
					>
						<ListGroupItem color="warning">{todo.task}</ListGroupItem>
					</StyledList>
				);
			})}
			{newListItem.length > 0 ? (
                <Button
                    type="submit"
					color="success"
					onClick={handleSubmit}
					// onClick={() => {
					// 	// e.preventDefault();
					// 	dispatch({ type: "ADD_TODO", payload: newListItem });
					// 	setNewListItem("");
					// }}
				>
					+
				</Button>
			) : null}
			<Button
				color="danger"
				onClick={ () => {
					dispatch({ type: "CLEAR_COMPLETED" });
				}}
			>
				-
			</Button>
		</div>
	);
};

export default TodoList;

const StyledList = styled(ListGroup)`
    margin:1%;
`;

