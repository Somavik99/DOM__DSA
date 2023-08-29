console.log("<-ThisConcept->")

function hello() {
  console.log(this , "<-DeclaredFunction");
  return function(){
    console.log(arguments);
  }
}
console.time(hello()("Another", 400, true)); //Contains an 'Argument' object that can be called inside a function

const Hi = (argumentInt, argStr, argBool) => {
  console.log(argumentInt, argStr, argBool);
};
Hi(400, "Hello", false); ////// Error 'Uncaught ReferenceError: arguments is not defined'. Does not Contain an 'Argument' object that can be called inside a function throwing a ReferenceError

//this binding

//1> RegularFunction

const obj = {
  name: "Avik",
  age: 26,
  adult: true,
  print: function () {
    console.log(this, "<-RegularFunctionExpression");
  },
};

obj.print();

//2> RegularNestedFunction

const obj1 = {
  name: "Avik",
  age: 26,
  print: function () {
function PrintResult(){
  console.log(this, "<-RegularNestedFunctionExpression");
}
PrintResult()
  },
};
obj1.print(); //The 'Print' function is pointing to the parent object it is nested with

//3> ArrowFunction

const obj2 = {
  name: "Avik",
  age: 26,
  adult: true,
  print: () => {
    console.log(this, "<-ArrowFunction");
  },
};

obj2.print(); 

//4> NestedArrowFunction

const obj3 = {
  name: "Avik",
  age: 26,
  adult: true,
  print: function () {
    const newExpression = () => {
      console.log(this, "<-NestedArrowFunction");
    };
    newExpression();
  },
};

obj3.print();

function Funny(){
  let Fun = {
    Name:"Avi",
  x: function(){
  console.log(this, "HA HA HA HA HA")
}
}
 Fun.x();
}

Funny()


// const funny =  Funny();
// // funny()