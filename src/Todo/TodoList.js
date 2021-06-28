import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList(props){
    let styles = {
        listStyle: 'none',
        color: 'black',
        fontSize: '14px'
    }
    return(
        <ul style = {styles}>
            {props.todos.map((todo,indx)=>{
        return <TodoItem onChange ={props.onToggle} todo = {todo} key = {todo.id} index = {indx} />})}
        </ul>
    )
}
TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default TodoList;