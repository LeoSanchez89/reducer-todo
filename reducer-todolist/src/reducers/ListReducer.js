export const initialState = {
	todos: [
		{
			task: "Complete Assignment",
			id: 1,
			completed: false
		},
		{
			task: "Wash Dishes",
			id: 2,
			completed: false
		},
		{
			task: "Take Out Garbage",
			id: 3,
			completed: false
		}
	]
};

export const listReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const newTodo = {
				task: action.payload,
				id: Date.now(),
				completed: false
			};
			return {
				...state,
				todos: [...state.todos, newTodo]
			};
		case "MARK_COMPLETE":
			// if (todos.id === action.payload) {
			// 	return { ...todos, completed: !todos.completed };
			// } else return { ...todos };
			return { ...state };
		case "CLEAR_COMPLETED":
			return {
				// ...state,
				todos: [...state.todos.filter(todo => !todo.completed)]
			};
		default:
			return state;
	}
};
