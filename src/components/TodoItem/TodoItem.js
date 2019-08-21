import React, { Component } from 'react';
import styles from 'C:\\Users\\sge\\react\\Todo-list\\todo-list\\src\\components\\TodoItem\\TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

//class 형식사용 -> 왜? 성능최적화 시, shouldComponentUpdate 라이프사이클메서드를 이용하기 위해
/* <props>
    done: 해당일정 완료여부
    onToggle: 일정완료 상태 onOff
    onRemove: 해당일정 제거
    children: 일정정보 내용
*/
class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return this.props.done !== nextProps.done;
    }
    
    render() {
        const {done, children, onToggle, onRemove} = this.props; //(비구조화 할당 문법) props값들의 레퍼런스생성 -> 매번 this.props.생략가능

        return (
            <div className = {cx('todo-item')} onClick={onToggle}>
                <input className = {cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className = {cx('text',{done})}>{children}</div>
                <div className = {cx('delete')} onClick={(e) => {
                        onRemove();
                        e.stopPropagation();
                        }
                    }>[지우기]</div>
            </div>
        );
    }
}

export default TodoItem;