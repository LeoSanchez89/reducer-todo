import React from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
		<div className="App">
			<header>
				<h1>To-Do</h1>
			</header>
			<section>
				<TodoList />
			</section>
		</div>
	);
}

export default App;
