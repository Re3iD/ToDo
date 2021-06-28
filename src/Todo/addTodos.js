import React, {useState} from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = ''){
    const [value, setValue] = useState(defaultValue)

    return {
        value,
        onChange: event => setValue(event.targer.value)
    }
}

function AddTodo({onCreate}){
    const [value, setValue] = useState('')

    function submitHandler(e){
        e.preventDefault();
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form onSubmit = {submitHandler} style = {{marginBottom: '1rem'}}>
            <input value = {value} onChange={
                event=> setValue(event.target.value)
            }/>
            <button type='submit'>Add todo</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddTodo