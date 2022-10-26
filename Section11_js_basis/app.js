// values
let greetingText = "문자열 실험";
let age = 32;
console.log("문자열 실험");
console.log(age);

// array Example
let hobby = ["야수", 1, "게임", "잠"];
console.log("-------array Example--------");
console.log(hobby);
console.log(hobby[0]);
console.log(hobby[1]);

// object Example
let job = {
  title: "develop",
  place: "New York",
  salary: 50000,
};
console.log("--------Object Example---------");
console.log(job);
console.log(job.title);
console.log(job.salary);

// function
function calcAdultYears() {
  return age - 18;
}

console.log("---------funtion Example");
console.log(calcAdultYears());

// method
let person = {
  name: "max",
  foo() {
    console.log("***foo test***");
  },
};

person.foo();
