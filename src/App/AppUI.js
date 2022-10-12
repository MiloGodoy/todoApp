import React from 'react';
// Importamos nuestro contexto
import { TodoContext } from '../TodoContext/Index';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm} from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);


  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
            
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };

/*import React from 'react';
import { TodoContext } from '../TodoContext/Index';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({}){
    return (
      <React.Fragment>
        <TodoCounter  />
        <TodoSearch />
  
        <TodoContext.Consumer>
          {({ 
            error, 
            loading, 
            searchedTodos,
            completeTodo,
            deleteTodo 
          }) => (
              <TodoList>
                {error && <p>Hubo un error..</p>}
                {loading && <p>Cargando...</p>}
                {!loading && !searchedTodos.lenght && <p>Crea tu primer Tarea</p>}

                
                /*{searchedTodos.map(todo => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
            </TodoList>
          )}
        </TodoContext.Consumer>

        <CreateTodoButton />
      </React.Fragment>
    );
}

export { AppUI }; */