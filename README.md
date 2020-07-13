# React 기초 개념정리

## 목차

1. React의 특징
2. Component의 특징
3. Container 란?
4. 데이터 관리
5. 이벤트 핸들링
6. 스프레드 연산자
7. 리덕스 개념 

## * React의 특징

#### 1. Virtual DOM (추상적개념)

(1) 데이터를 업데이트하면 전체 UI 를 Virtual DOM에 리렌더링한다. 
 
(2) 이전 Virtual DOM 에 있던 내용과 현재 내용을 비교한다.

(3) 바뀐 부분만 실제 DOM 에 적용한다.=> DOM 업데이트를 추상화함으로써 DOM 처리 함수를 최소화하고 효율적으로 진행한다.
 
 ( DOM: 문서 객체 모델- HTML, XML 문서를 처리하는 API 
          ->문서의 구조적 형태를 제공해서 자바스크립트와 같은 스크립트 언어를 사용해서 문서 내용과 시각적 표현을 수정할 수 있다.)

#### 2. Component-Based

 컴포넌트 기반으로 작업하면 UI를 독립적으로 재사용할 수 있다.
 -> 프로젝트 내에서 어디든지 사용할 수 있고, 수정이 용이하다.

#### 3. JSX (Javascriptxml)(Js 확장문법)
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
       
       
## * Component의 특징

#### 1. 캡슐화
 Component는 메인 어플리케이션과 완전히 분리되어 작성되어져야 한다.
 -> 재사용, 테스트 가용성, 신뢰성 (Component 수정시, 어플리케이션의 나머지 부분에 영향을 미치는 것을 신경쓰지 않아도 된다.)

#### 2. 확장성 + 재사용성
 Component는 확장이 가능해야 한다. (DOM객체처럼)
 -> 이미 있는 기능 다시 사용 용이

#### 3. 결합성
 컴포넌트의 조합으로 하나의 어플리케이션을 만들 수 있다는 점이 있다.
 
 #### < Component의 기본유형 >
 ##### * 클래스형컴포넌트와 함수형 컴포넌트
 
 (1) 클래스형 컴포넌트
  -> state를 넣을 수 있다.
  -> props 를 입력으로 받는 생성자(constructor) 를 사용하는것이 좋다. ( super() 호출, 생성자 안에서 props호출: super(props) )

 (2) 함수형 컴포넌트
  -> state, LifeCycle 이 없는 자바스크립트 함수.
  -> props로 부르는 입력을 선택적으로 취한다.

 ##### * stateful컴포넌트와 stateless컴포넌트
 (1) stateful 컴포넌트
  -> 항상 클래스컴포넌트로 사용된다 (생성자에서 초기화되는 state가 있기 때문이다.)

(2) stateless 컴포넌트
  -> 함수형이나 클래스로 사용된다. 하지만 컴포넌트에서 lifecycle을 적용해야 stateless컴포넌트로써의 가치가 있다. (함수형컴포와의 차이)

##### Component 실제 사용방법
import: (ES6문법), 모듈을 불러오는 키워드
	  import MyComponent from ‘./MyComponent’;
export: 모듈 내보내기
	  export default MyComponent;

## * Container 란?

Container도 react 패키지의 Component를 물려받는 컴포넌트의 일종. 
> Container는 앱의 상태를 관리하기 때문에 앱의 상태가 자주 바뀔수록 그에 따라 빈번하게 업데이트가 일어난다.
> Redux와 소통하면서 앱의 상태를 제어하는 컴포넌트.
 
 (예시)
리덕스를 사용할 때에는 특히 Container와 Component를 구분해주는 게 좋다. 
Container는 앱의 상태를 관리하기 때문에 앱의 상태가 자주 바뀔수록 그에 따라 빈번하게 업데이트가 일어난다. 
그래서 필요없는 부분에 업데이트가 일어나지 않게 하려면 Container과 Component를 구분해주어야 한다. 
리액트는 컴포넌트 단위로 업데이트를 하기 때문이다.
Container가 업데이트되어도 그 아래 Component와 상관이 없다면 업데이트가 일어나지 않는다.

## * 데이터 관리

#### state

컴포넌트 내부에서 선언하며, 내부에서만 사용하는 데이터로, 값을 변경할 수 있다.
동적인 데이터를 다룬다.
부모의 state는 자식의 props가 된다.

> 컴포넌트의 생성자 메소드: constructor()를 이용하여 state초기값을 설정할 수 있지만,
   transfrom-class-properties문법으로 constructor 바깥에서 정의 가능하다.

> state 값 업데이트: setState()

## * 이벤트 핸들링

이벤트 -> 유저가 웹 브라우저에서 DOM 요소들과 상호작용하는 것

> onChange(): Form 요소는 값이 바뀔 때 실행
> onMouseover(): 버튼에 마우스 커서 올렸을 때
> onClick(): 클릭


(1) 이벤트에 실행할 Js코드가 아닌, 함수 형태의 값 전달
	> 화살표 함수 문법으로 함수를 만들어 바로 전달
	> render() 렌더링 외부에 미리 만들어서 전달
 
(2) DOM 요소에만 이벤트 설정가능
	> DOM 요소: div, button, input, form, span...
	> 직접 만든 컴포넌트에 전달X = 이름이 onClick인 props를 전달하는 것
 
 ~~~
 class EventPractice extends Component {
   state = {
       message: "",
   }
   
   handleChange = (e) => {
       this.setState({
           message: e.target.value
       });
   }
   
   render() {
       return (
           <div>
             <h1> 이벤트 연습 </h1>
             <input type="text" name="message" value={this.state.value} onChange=this.handleChange}></input>
           </div>
        );
    }
}
~~~

* input요소 여러개 이벤트 핸들링
> 메소드를 여러 개 만듬
> event 객체 활용 = e.target.name값 사용

~~~
handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value, //[]를 key값으로 이용하여, input 여러개 핸들링 가능
    });
 }
 ~~~

## * 스프레드 연산자

ES6의 객제 리터럴에 스프레드 속성을 추가함.
제공된 객체의 자체 열거 가능 속성을 새 객체에 복사함.

~~~
var obj1 = {foo: 'bar', x: 42};
var obj2 = {foo: 'baz', y: 13};

var cloneObj = { ...obj1 };
// Object {foo: 'bar', x: 42}

var mergedObj = { ...obj1, ...obj2 };
// Object {foo: 'baz', x: 42, y: 13}
~~~

## * 리덕스 개념 이해

리덕스는 리액트에서 사용하기위해 만든 상태 관리 라이브러리이다.
상태 관리에 있어서 불필요한 리렌더링 부분을 없애기 위해서 컴포넌트 외부에서 상태관리 로직을 처리한다.

##### 용어
> 스토어: 앱의 상태 값들을 저장하고 있다.
> 액션: 상태 변화를 일으킬 때 참조하는 객체이다.
> 디스패치: 액션을 스토어에 전달하는 것을 의미한다.
> 리듀서: 상태를 변화시키는 로직이 있는 함수이다.
> 구독: 스토어 값이 필요한 컴포넌트는 스토어를 구독한다.

리덕스를 사용하면 스토어에서 모든 상태 관리가 일어나는데,
상태에 어떤 변화를 일으킬 때 액션을 스토어에 전달하고, 그 과정을 디스패치라고 한다.
스토어가 액션을 받으면 리듀서가 액션을 기반으로 상태를 어떻게 변경할지 정하고, 
액션을 처리하면 새 상태를 스토어에 저장한다.
스토어 안에 있는 상태가 바뀌면 스토어를 구독하고 있는 컴포넌트에게 바로 전달하고,
이때 부모 컴포넌트로 props를 전달하는 작업은 하지 않고, 리덕스에 연결하는 함수를 사용해서 컴포넌트를 스토어에 구독시킨다.

##### 액션과 액션생성함수
액션=객체, 반드시 type값을 가지고 있어야한다.
액션생성함수는 액션을 만들 때마다 직접 객체를 만드는데 있어서 불편하므로, 함수를 만든다.

##### 리듀서
리듀서=상태에 변화를 일으키는 함수,
파라미터를 2개 받는다. 첫 번째 파라미터는 현재상태, 두 번째 파라미터는 액션 객체이다.
리듀서가 초기에 사용할 초기 상태 initialState값을 먼저 설정해야한다.
리덕스에서 상태를 업데이트할때는 새로운 객체를 만든 후, 그 안에 상태를 정의해야한다.
이때 Object.assign을 사용한다. 
(객체를 왼쪽으로 덮어쓰면서 우리가 원하는 상태를 지닌 새 객체를 만들어 준다.)
(전개연산자(...)를 사용하면 더 깔끔하다.)



          





