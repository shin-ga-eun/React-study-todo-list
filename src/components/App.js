import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';


const initialTodos = new Array(500).fill(0).map((foo, index) => ({id: index, text: `일정 ${index}`, done: false}));


class App extends Component {
    state = {
        input: '', //state 초기값
        todos: initialTodos,
    }

    //내부메소드 getId() -> map()의 key값으로 쓰기 위한 id값 업데이트
    id=1
    getId =() => {
        return ++this.id;
    }

    handleChange = (e) => {
        const {value} = e.target;
        this.setState(
            {input: value}
        );
    }

    //todolist에 새 todoitem 추가
    handleInsert = () => {
        const {todos,input} = this.state;

        //새 todoinput을 객체로 만들기
        const newTodo = {
            text: input,
            id: this.getId(),
            done: false
        };

        //todos 배열에 newTodo 삽입
        this.setState(
            {todos: [...todos, newTodo], input:' '}
        );

    }

    //TodoItem Toggle (switch와 같은 기능)
    handleToggle = (id) => {
        const {todos} = this.state; //비구조

        const index = todos.findIndex(todo => todo.id === id); //id가 같은 인덱스를 찾아 index값 저장
        
        //index값에 대한 todo객체 변경
        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        //slice연산자를 이용하여 찾은 index값 전후 데이터 복사후, 그 사이 변경된 todo객체 삽입
        this.setState({
            todos: [
                ...todos.slice(0, index),
                toggled,
                ...todos.slice(index+1, todos.length)
            ]
        });
    }

    handleRemove = (id) => {
        const {todos} = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        this.setState({
            todos: [
                ...todos.slice(0, index),
                ...todos.slice(index+1, todos.length)
            ]
        });
    }


    render() {
        const { input, todos } = this.state; //비구조화 할당 -> this.state 생략가능
        const { handleChange, handleInsert, handleToggle, handleRemove } =this; //비구조화 할당 -> this. 생략가능



        return (
            <div>
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}></TodoInput>
                <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}></TodoList>
            </PageTemplate>
            </div>
        );
    }
}

export default App;