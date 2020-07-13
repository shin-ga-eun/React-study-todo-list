# React 기초 개념정리

## 목차
> React의 특징
> Component의 특징
> Container 란?
> Component 실제 사용방법
> 이벤트 핸들링
> 스프레드 연산자

## * React의 특징

1. Virtual DOM (추상적개념)
 -> 데이터를 업데이트하면 전체 UI 를 Virtual DOM에 리렌더링한다.
 -> 이전 Virtual DOM 에 있던 내용과 현재 내용을 비교한다.
 -> 바뀐 부분만 실제 DOM 에 적용한다.
 : DOM 업데이트를 추상화함으로써 DOM 처리 함수를 최소화하고 효율적으로 진행한다.

  ( DOM: 문서 객체 모델- HTML, XML 문서를 처리하는 API 
          ->문서의 구조적 형태를 제공해서 자바스크립트와 같은 스크립트 언어를 사용해서 문서 내용과 시각적 표현을 수정할 수 있다.)

2. Component-Based
 컴포넌트 기반으로 작업하면 UI를 독립적으로 재사용할 수 있다.
 -> 프로젝트 내에서 어디든지 사용할 수 있고, 수정이 용이하다.

3. JSX (Javascriptxml)(Js 확장문법)
-> babel-loader을 이용하여 Js로 변환.
-> 컴포넌트를 트리 구조의 객체로 정의. 
(1) 꼭 닫혀있어야하는 태그
 <div></div>
(2) 감싸져 있는 엘리먼트
 -> 두개 이상의 엘리멘트는 무조건 하나의 엘리먼트로 감싸져야 한다. (<div>나 <fragment>로 감싼다!)
(3) JSX 안에 자바스크립트 값 사용
(4) 조건부 렌더링
 -> if 문을 사용할 수 없다. (IIFE사용하면 가능) (if문은 JSX밖에서 사용하는 것을 권장)
 -> 삼항 연산자, AND연산자 사용
(5) style 과 className
 style -> React에서는 객체 형태로 작성 ex) const style = { ... };
 className -> class 대신, className을 사용한다.
(6) 주석
 방법 -> {/* ... */} 
       -> 태그사이에 //

