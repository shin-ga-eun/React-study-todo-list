import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    
    shoudComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const {todos, onToggle, onRemove} = this.props; //비구조화 할당
        //todos 배열을 TodoItem 컴포넌트로 변화하는 map() todoList
        const todoList = todos.map(
            todo => (
                <TodoItem key={todo.id} done={todo.done} onToggle={() => onToggle(todo.id)} onRemove={() => onRemove(todo.id)}>
                    {todo.text}
                </TodoItem>
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;