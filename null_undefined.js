/** null 값이 출력되는 경우 */

// 1. 명시적 할당
// 초기 속성을 명시적으로 Null로 할당
let isNull = null;
console.log(isNull);

// 2. 반환 값 null
// 함수 반환(return)값에 null을 줌
function returnNull() {
  return null;
}
console.log(returnNull());

// 3. 조건부 할당
// 참으면 null을 출력
let conditionA = true;
let conditionB = false;
let conditionedNull = conditionA ? null : conditionB;
console.log(conditionedNull);

//4. 재할당
let isNull2 = "not null";
isNull2 = null;
console.log(isNull2);

//5. 속성 할당
//속성을 null 값으로 할당
let isNullObj = {
  notNull: "not null",
};

isNullObj.notNull = null;

console.log(isNullObj.notNull);

/** undefined 값이 출력되는 경우 */

//1. 초기화 없이 선언
// 변수는 선언 되었지만 value값이 지정되지 않은 경우
let isUndefined;
console.log(isUndefined);

//2. 함수일 때, 매개변수 값이 없는경우
function undefinedFunc(noValue) {
  console.log(noValue);
}

undefinedFunc();

//3. 반환값이 없거나, 빈 return문 인 경우
//3-1
function noReturn() {}

const returnResult = noReturn();
console.log(returnResult);

//3-2

function noReturnValue() {
  return;
}

const returnResult2 = noReturnValue();
console.log(returnResult2);

//4. 배열 인덱스
//지정된 배열의 인덱스 값을 넘는 것을 호출하는 경우
let undefinedArray = [1, 2];

console.log(undefinedArray[2]);

/** 비교연산자를 활용 null/undefined인지 확인 */

//1. 변수를 null로 설정
let valueIsNull = null;
let valueIsUndefined;

console.log(valueIsNull === null);
console.log(valueIsUndefined === undefined);

//2. 값을 반환하지 않는 경우 (undefined)
function nothingValue() {}

let nothingValueResult = nothingValue();
console.log(nothingValueResult === null);
console.log(nothingValueResult === undefined);
console.log(nothingValueResult ? null : undefined);

//3. 정의되지 않은 개체 호출
let who = {
  name: "JayPark",
  age: 11,
};

let person = who.phone;

console.log(person ? null : undefined);

//4. 정의되지 않은 배열
let noArray = [1, 2, 3, 4];
let noElement = noArray[9];

console.log(noElement ? null : undefined);
