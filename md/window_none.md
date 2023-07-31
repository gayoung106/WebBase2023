# alert() 그리고 confirm() 뭔데, window를 안써? 한번도 고민해 본적 없는 문제 !

## alert()는 왜 window.alert()가 아니지?!!!

### 1. 일단, <span style='background-color: #d3d3d3; color:#000'>alert()/confirm() 메서드</span>는 간단한 대화 상자를 만드는 임무를 가지고 있음

#### 1-1. <span style='background-color: #dccbed; color:#000'>alert()</span> 예시

![](https://velog.velcdn.com/images/gazero_/post/fb37226f-f827-4f5e-932a-2cfd7e08e24a/image.png)

#### 1-2. <span style='background-color: #dccbed; color:#000'>confirm()</span> 예시

![](https://velog.velcdn.com/images/gazero_/post/24be96a0-1888-4a58-9a7b-704da1469f87/image.png)

### 2. 왜 ! <span style='background-color: #d3d3d3; color: #000 '>window</span> 붙이지 않는가?

#### 근거 1. <span style='background-color: #ffcac9; color:#000'>window 객체에 의해 제공</span>

- alert()와 confirm() 메소드는 JavaScript 언어에 해당
- 이러한 메소드들은 window 객체에 의해 제공
- window 객체는 웹 브라우저 환경에서의 전역 객체(global object)
- 따라서 이 메소드들은 JavaScript 언어의 핵심 기능으로 브라우저가 자동으로 제공

#### 근거 2. <span style='background-color: #ffcac9; color:#000'>전역 객체(global object)</span>

- window 객체가 전역 객체이기 때문에, alert()와 confirm()과 같은 메소드들은 window나 document와 같은 객체를 명시적으로 참조하지 않고도 바로 사용
- 하지만 일반적으로 코드의 가독성을 높이고, 지역 범위(scope)의 변수나 함수와 충돌하는 것을 피하기 위해 이러한 메소드를 사용할 때 명시적으로 window 객체를 참조하기도 함
  ![](https://velog.velcdn.com/images/gazero_/post/00f5b03d-ae90-4c89-9ad0-3eb64f2ad34a/image.png)
- window 객체는 브라우저 창(Window)에 대한 정보와 제어를 제공(window 객체를 통해 브라우저의 창 크기, URL, 타이머, 알림 등과 같은 기능들에 접근하고 제어
- window 객체는 브라우저 환경에서 모든 JavaScript 코드가 실행되는 전역 스코프(global scope)이며, 모든 전역 변수와 함수는 이 객체의 속성(property)로 취급
- 따라서 window.alert()와 같이 window 객체를 명시적으로 참조하지 않고 사용하더라도 기본적으로는 window 객체의 속성과 메소드를 사용하는 것과 동일하게 동작

#### 잠깐 ! <span style='background-color: #fbf595; color:#000'>전역 객체(global object)</span>는?

- JavaScript 실행 환경에서 모든 객체와 함수가 포함되어 있는 최상위 객체
- '웹 브라우저 환경'에서는 window 객체가 전역 객체(Node.js 등 다른 실행 환경에서는 해당 환경에 맞는 전역 객체가 있음)

#### 그렇다면, 반대로 반드시 <span style='background-color: #fbf595; color:#000'>window. / document. 을 반드시 넣어야 하는 경우</span>는 없을까?

#### 💡 경우 1: 스코프 충돌 방지

- 다른 JavaScript 라이브러리나 프레임워크를 사용하는 경우, 라이브러리 내부에서 window나 document와 같은 전역 객체에 접근하여 기능을 구현하는 경우.
- 라이브러리와 사용자 코드 사이에 변수 충돌이 발생할 수 있으므로, 사용자 코드에서는 명시적으로 window나 document를 사용하여 객체를 참조하는 것이 바람직

```js
var title = "My Title"; // 사용자 코드의 전역 변수

(function () {
  var title = "Library Title"; // 라이브러리의 전역 변수
  console.log(title); // "Library Title"
  console.log(window.title); // "My Title" - 사용자 코드의 전역 변수에 접근
})();
```

#### 💡 경우 2: 코드 가독성과 명확성

- 큰 프로젝트에서 여러 개발자가 협업하는 경우
- 명확한 코드를 제공함으로써 유지보수에 용이

#### 💡 경우 3: 레거시 코드 호환성

- 오래된 코드나 레거시 코드의 경우, 코드 전반에 window나 document를 붙여서 사용하는 것이 일반적
- 이러한 코드를 수정하지 않고 유지하는 경우, 기존 코드와의 호환성을 유지하기 위해 붙여서 사용하는 것이 좋음

#### 💡 경우 4: DOM을 조작하는 경우

- 웹 페이지의 특정 요소의 내용을 변경하거나 스타일을 조작하는 등의 동적인 작업은 DOM을 사용해야 함
- 즉, 이러한 경우 document 객체를 통해 원하는 요소에 접근하고 변경 가능 !

#### 근거 3. <span style='background-color: #ffcac9; color:#000'>DOM과의 관계?</span>

- 우선, DOM과 window 및 document는 밀접한 관련이 있는편

```
DOM은 웹 페이지의 요소들을 구조화하여 표현
window 객체는 브라우저 창(Window)에 대한 정보와 제어를 제공
document 객체는 현재 로드된 문서(Document)에 대한 정보와 제어를 제공
JavaScript에서 window 객체를 통해 document 객체에 접근하고, document 객체를 통해 DOM을 조작하는 방식으로 웹 페이지를 동적으로 제어
```

- window 객체와 document 객체는 JavaScript 코드에서 DOM에 접근하고 제어할 수 있는 진입점(entry point) 역할
- DOM은 웹 페이지의 구조를 표현하는 프로그래밍 인터페이스

#### 잠깐 ! 그래서 <span style='background-color: #fbf595; color:#000'>DOM 때문에 window. / document. 를 안붙여도 된다고?</span>

- 맞음 ! alert() 메소드는 DOM에 접근하지 않으므로 window나 document와 같은 객체를 사용하지 않아도 됨
- alert() 메소드는 웹 페이지에 간단한 알림 창을 표시하는 기능을 수행하는 JavaScript의 내장 함수
- 기본적으로 웹 브라우저가 제공하는 기능이기 때문에 DOM을 직접 조작하지 않고 사용가능!

# 결론 :

<br>
### 사실 window 붙여도 되고, 안붙여도 되는데 지금까지 alert()에 window를 붙힌 코드는 본적이 없음. 편의상의 문제일지는 모르겠지만, 어쨌든 붙여도 된다는 사실도 이번기회에 알게됨...!
