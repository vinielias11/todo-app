import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCheckFill, RiDeleteBin6Line, RiArrowGoBackFill, RiEdit2Line } from 'react-icons/ri';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);

        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

  return todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row' } key={index}>
        <div key={todo.id}>
            { todo.text }
        </div>
        <div className="icons">
            {todo.isComplete ? <RiArrowGoBackFill onClick={() => completeTodo(todo.id)} className="complete-icon" /> : <RiCheckFill onClick={() => completeTodo(todo.id)} className="complete-icon" />}
            <RiEdit2Line onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
            <RiDeleteBin6Line onClick={() => removeTodo(todo.id)} className="delete-icon" />
        </div>
    </div>
  ));
}

export default Todo