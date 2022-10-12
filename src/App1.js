import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from './TodoSearch';
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

//import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Hacer curso de React', completed: false},
  { text: 'Hacer entregables de 100+ labs', completed: true},
  { test: 'Ganar mucho dinero hoy', completed: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  //El estado de nuestra búsqueda
  const [searchValue, setSearchValue]= React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  //Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda

  let searchedTodos = [];

  //logica para filtar
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
       <TodoList>
        {/* Regresamos solamente los TODOs buscados */}
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
