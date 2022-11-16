// 1) 함수의 기본 매개변수

// 기본매개변수를 설정한 함수는 기본 매개변수를 설정하지 않은 매개변수의 뒤쪽에 와야함
// 해당 매개변수가 선택사항이기 때문.

/*
아래의 템플릿 리터럴 때문에 주석처리
function greetUser(greetPrefix, user = "BJJ") {
  console.log(greetPrefix + " " + user + "!");
}
*/

greetUser("hello");
greetUser("HI", "JBJ");

// 2) 나머지 매개변수
// 매개변수의 개수가 유동적일때 사용 (2개일지 3개일지 알 수 없음. i.e. 숫자들의 합)
// ... 으로 매개변수 정의 할 때 사용 가능
// 아래의 예시에서 "...numbers" 로 들어온 매개변수는 자동적으로 배열로 만들어짐

function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

// 3) 스프레드 연산자
// 나머지 매개변수의 인자로 배열을 넣고 싶을 때,
// 매개변수에 ... 을 넣어주면 해당 매개변수는 자동적으로 배열의 원소를 하나씩 매개변수로 삽입
const inputElement = [1, 2, 3, 4, 5, 6];
console.log(sumUp(...inputElement));

// 4) 함수도 결국 객체(object)이다.
// 평범한 object
const person = {
  name: "bjj",
  age: 28,
};

// express 의 경우, 최초 express()와 같이 실행하는데,
// 이후 .urlencoded() 와 같이 추가 메소드, 속성을 건드림
// 즉, 함수는 custom property가 존재하는 object

// 5) 템플릿 리터럴
// `` (백틱, 작은 따옴표 아님) 을 이용해 작성
// 장점 - 일반 따옴표와 다르게 줄바꿈이 가능.
//      - 더하기 연산자를 사용한 결합없이 동적값과 바로 연결 가능 (${변수명}) 으로 사용
function greetUser(greetPrefix, user = "BJJ") {
  console.log(`${greetPrefix} ${user}!`);
}

// 6) 기본값과 참조값

/* 
    Q. const 값은 상수인데 왜 push 하면 배열에 추가 되는건가용?
    A. 먼저, Object와 Array 같은 것은 자바스크립트에 의해 특수한 메모리 영역에 할당 됨. (참조형)
        (number, string, booleans : Primitive values (원시형))
       실제 Object 나 Array를 생성하면 포인터를 할당 받음.
       즉, push 메소드를 호출해도 포인터가 가리키는 데이터 값이 변경될 뿐,
       실제 포인터를 저장한 hobbies 자체는 달라지지 않음
*/
const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading");

// 참조형의 부작용
// 함수의 매개변수로 들어간 object는 포인터 주소이기에,
// object 내부의 데이터를 건드리면 함수 외부에서도 달라지게 됨
const person_ = { age: 32 };

function getAge(p) {
  p.age -= 18;
  return p.age;
}

console.log(getAge(person_));
console.log(person_);
// {} 안의 ... 스프레드 연산자는 person_ 을 그대로 복사해줌
console.log(getAge({ ...person_ }));

// 9. class = 객체에 관한 blueprint
class Job {
  // 생성자
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  // 메소드
  describe() {
    console.log(
      `내 직업은 ${this.title}, 근무지는 ${this.location}, 급여는 ${this.salary}`
    );
  }
}

const developer = new Job("developer", "한국", "50000");
console.log(developer);
developer.describe();

// 10. array & object 의 비구조화
const input = ["ABC", "XYZ"];
const [first, last] = input;
console.log(input);
console.log(first + " " + last);



const jobb = { title: "abc", location: "bbc" };
const { title:titles, location } = jobb // 속성의 식별자를 적어야해요


console.log(jobb);
console.log(titles + " " + location);