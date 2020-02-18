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
            }
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };
        case "MARK_COMPLETE":
            return state.todos.map(item => {
                if (item.id === action.payload) {
                    return { ...item, completed: !item.completed }
                }
                else return { ...item }
            });
            

        
        
        
        default:
			return state;
	}
};
