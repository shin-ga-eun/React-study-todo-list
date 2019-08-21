//일정 입력 기능

import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind'; // style에서 사용하는 class들을 편하게 쓰는 방법

const cx = classNames.bind(styles);

/* input기능과 버튼 기능 컴포넌트 */
/*  <props>
    value: input 값
    onChange: input 변경 이벤트
    onInsert: 버튼 클릭 이벤트 (input값 추가), enter 키 실행시
*/
const TodoInput = ({value, onChange, onInsert}) => {

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onInsert();
        }
    }

   

    return (
        <div className = {cx ('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/> 
            <div className = {cx ('add-button')} onClick={onInsert}>추가</div>
        </div>
            );
};


export default TodoInput;