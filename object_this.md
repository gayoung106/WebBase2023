# Object 안에 함수 프로퍼티 안에서 this를 써야하는 이유

## 스코프라고 할 수 있을지도....🤔?

> 그러니깐, 적용되는 영역이 한정되는 것이 아닐까?

### 🌟 this가 <span style='background-color: #fbf595; color:#000'>없을때</span>,

<img src = "img/ex01.png" />

### 🌟 this.를 <span style='background-color: #fbf595; color:#000'>넣었을때</span>,

<img src = "img/ex02.png" />

#### 아무튼 두 예제를 확인하니 확실한건 <span style= 'color: red'>this.이 없으면 오류가 발생😟</span> 한다는 사실 !

### 🌟 이런 <span style= 'color: blue'>🩷 예제 🩷</span>는 어떨까?

<img src = "img/ex03.png" />

> this. 가 없는데, <span style= 'color: #90d48d; font-size: 24px'>오류가 발생하지 않는다😊 !</span>

## 그렇다. <span style='background-color: #fbf595; color:#000'>객체 바깥에 같은 이름으로 변수 선언</span>을 했기 때문이닷 !

> 아 ! <span style= 'color: #90d48d; font-size: 24px'>this.는 해당 object안에 생성된 프로퍼티인지를 구분</span>하기 위한 것이다.

#### 📌 정리해보면, this를 적음으로써 <span style='background-color: #fbf595; color:#000'>'나는 너와 같은 object에 생성된 프로퍼티야 !'</span>라는 표시

#### 💡 this.가 없음에도 오류가 발생하지 않는 것은 birthday라는 변수가 선언되어 있기 때문!

# 결론: 오류가 발생했던 이유는?

> 💰 오류메세지('birthday is not defined')를 통해서도 확인 할 수 있듯이 this.birthday는 있지만, 변수 birthday가 선언되지 않았기 때문 !