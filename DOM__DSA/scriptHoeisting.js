
console.log("<-HoistingScript->")

////////////////////////////////
//1> RegularFunctionDeclaration

NewFunc();

function OldFunc() {
  let x = 6;
  console.log(x);
}

OldFunc();

function NewFunc() {
  let x = 10;
  console.log(x);
}

//2> FunctionExpression && ArrowFunction

// NewObj.z(); // In function expression, invoking before declaring throws an error i.e., 'scriptHoeisting.js:21 Uncaught ReferenceError: Cannot access 'NewObj' before initialization'

let NewObj = {
  x: 6,
  y: 8,
  z: function () {
    const Hello = () => {
      console.log(this, "<-FE");
      console.log(this.x + this.y, "<-FE");
    };
    Hello();
  },
};

NewObj.z();

// Next() //throws same error as FE i.e., 'Uncaught ReferenceError: Cannot access 'Next' before initialization'

let Next = {
  y: () => {
    console.log(this, "<-ArrowFunction");
  },
};
Next.y();


//3> Constructor Function
///Class constructor

class Declaration {
  constructor(Name, age) {
    console.log(this)
    this.Name = Name;
    this.age = age;
  }

  SayName() {
    return console.log(this.Name, this.age);
  }
}

let NewFunction = new Declaration("jon", 85);
NewFunction.SayName();

///Function constructor

function declaration1(Name){

return function X(age){
    console.log(Name, age);
   this.Name = Name;
   this.age = age;
}

}

declaration1("Jon") (25)



// ARRAY
const names = [{0:"JOn"}, {1:"John"},[{2:"Zed"}, {3:"Frank"}]];

names.push({4:"Wick"},{5:"Dog"},[{6:"Peter"},{7:"Bob"},[{8:"Vicky"},{9:"Jane"}]],[{10:"Ram"},{11:"shyam"}],"Jok","Fuck","Luck");
names[7] = "Peter Griffin"
names.pop()
console.log(names.length);
console.log(Object.keys(names));
console.log(names);
console.log(names.flat(2))

const str = "A v i k";

console.log(str.split(" "));


