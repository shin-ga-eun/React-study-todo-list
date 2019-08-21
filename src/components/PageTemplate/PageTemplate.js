//UI의 전체적인 틀 설정

import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind'; // style에서 사용하는 class들을 편하게 쓰는 방법

const cx = classNames.bind(styles);

/* 페이지의 틀, 타이틀/컨텐츠 속성 설정*/
const PageTemplate = ({children}) => {
    return (
        <div className = {(cx('page-template'))}>
            <h1>일정관리</h1>
            <div className={cx('content')}>
                {children}
            </div>            
        </div>
            );
};




export default PageTemplate;