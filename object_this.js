// object를 만들때 fullId 메서드를 호출한 적이 없는데 왜 호출될까 원인 찾아보기
// this. 를 안 붙이면 reference Error가 뜨는데 위에 선언을 했음에도 불구하고 왜 에러가 뜨는지 원인 찾아보기

// var birthday = "030219";
// var pId = "1234567";

// var name = "김길동";

var person = {
  fullId: function () {
    console.log("person안에서 this가 가리키는 것은: ", this);
    return this.name;
  },
  name: "홍길동",
  birthday: "030219",
  age: 30,
  pId: "1234567",
};

// console.log(person.fullId());
console.log(person);

// console.log("밖에서 this 가리키는 것은: ", this);

// var person2 = {
//   fullId: function () {
//     return name;
//   },
//   name: "홍길동2",
//   birthday: "030219",
//   age: 30,
//   pId: "1234567",
// };

// console.log(person.fullId());
