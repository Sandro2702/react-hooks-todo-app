import uuidv4 from 'uuid/v4';

export default function reducer (state, action){
	switch (action.type) {
		//----------------------------- ADD TODO--------------------------
		case 'ADD_TODO':
			const newTodo = {
				id       : uuidv4(),
				text     : action.payload,
				complete : false
			};
			const addedTodos = [ ...state.todos, newTodo ];
			return {
				...state,
				todos : addedTodos
			};

		// -----------------------------SET CURRENT TODO------------------------
		case 'SET_CURRENT_TODO':
			return {
				...state,
				currentTodo : action.payload
			};

		//----------------------------- TOGGLE TODO------------------------
		case 'TOGGLE_TODO':
			const toggleTodos = state.todos.map(
				(todo) =>
					todo.id === action.payload.id
						? {
								...action.payload,
								complete : !action.payload.complete
							}
						: todo
			);
			return {
				...state,
				todos : toggleTodos
			};

		// -------------------------------UPDATE TODO-----------------------
		case 'UPDATE_TODO':
			const updatedTodo = {
				...state.currentTodo,
				text : action.payload
			};
			const updatedTodoIndex = state.todos.findIndex(
				(todo) => todo.id === state.currentTodo.id
			);

			const updatedTodos = [
				...state.todos.slice(0, updatedTodoIndex),
				updatedTodo,
				...state.todos.slice(updatedTodoIndex + 1)
			];

			return {
				...state,
				currentTodo : {},
				todos       : updatedTodos
			};

		// -------------------------------REMOVE TODO-----------------------
		case 'REMOVE_TODO':
			const filteredTodos = state.todos.filter(
				(todo) => todo.id !== action.payload.id
			);
			return {
				...state,
				todos : filteredTodos
			};
		default:
			return state;
	}
}
