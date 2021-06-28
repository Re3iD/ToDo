import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/addTodos'

function App() {
  let [todos, setTodos] = React.useState([])
  function toggleTodo(id){
    setTodos(todos = todos.map(todo=> {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    }))
  }
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit')
  .then(response => response.json())
  .then(todos =>{ setTimeout(
    ()=>setTodos(todos),3000
    )})
  
}, [])

  function removeTodo(id){
    setTodos(todos.filter(todo=> todo.id !== id))
  }

  function addTodo(title){
    setTodos(todos.concat([{title,
       id:Date.now(),
       completed: false
    }]))
  }
  return (
    <Context.Provider value={{  removeTodo }}>
    <div className = "wrapper">
    <h1>React Tutorital</h1>
    <AddTodo onCreate = {addTodo}/>
    {todos.length? (
      <TodoList todos = {todos} onToggle = {toggleTodo}/>
    ):(
      <div>
      <p>No todos!</p>
      <div className="lds-dual-ring"></div>
      </div>
    ) }
    </div>
    </Context.Provider>
  );
}

export default App;
