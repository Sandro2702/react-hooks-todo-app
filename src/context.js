// Inner Data for App ( Array of Todos Objects)

import React from 'react';

const TodosContext = React.createContext({
	todos       : [
		{ id: 1, text: 'Do work', complete: true },
		{ id: 1, text: 'Have a rest', complete: false }
	],

	currentTodo : {}
});

export default TodosContext;
