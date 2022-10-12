import React from 'react';
import { TodoProvider } from '../TodoContext/Index';
import { AppUI } from './AppUI';
import { Modal } from '../Modal';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

/*import React from 'react';
import { TodoProvider } from '../TodoContext/Index';
import { AppUI } from './AppUI';


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
   );
}

export default App;*/



/*import React from 'react';
import { AppUI } from './AppUI';


function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  });

  
    

    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };

    return[
      item,
      saveItem,
      loading,
      error,
    ];
}


function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];

  // Lógica para filtrar
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  
  

  const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);

      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);

    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
};

  return (
      <AppUI
         loading={loading} 
         error={error}
         totalTodos={totalTodos}
         completedTodos={completeTodo}
         searchValue={searchValue}
         setSearchValue={setSearchValue}
         searchedTodos={searchedTodos}
         completeTodo={completeTodo}
         deleteTodo={deleteTodo}
      />
     );
  }



export default App; */