import React from 'react';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
		<section className="App">
			<div className="main-div">
				<header>
          <h1>My <span className="todo">To-Do</span> List</h1>
          <hr className="two"/>
				</header>
				<section>
					<TodoList />
				</section>
			</div>
		</section>
	);
}

export default App;
