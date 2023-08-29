let header = document.getElementById("head");
let arr = [8, 5, 7, 9, 6, 12];

let ArrOfObject = [
  { FirstName: "Avik", LastName: "Roy", age: 26 },
  { FirstName: "Raghu", LastName: "Dey", age: 14 },
  { FirstName: "Jon", LastName: "Doe", age: 25 },
  { FirstName: "Jyoti", LastName: "Sinha", age: 26 },
  { FirstName: "Hilary", LastName: "Clinton", age: 110 },
  { FirstName: "China", LastName: "Maal", age: 2 },
];

let NewElem = document.createElement("div");
header.appendChild(NewElem);
NewElem.innerHTML = "<h1 class='text-[50px] text-bold'>Hello</h1>";

//Map() , Reduce() , Filter()
NewElem.addEventListener("click", () => {
  let newArr = arr.map((a) => {
    return a;
  });
  setTimeout(() => {
    NewElem.innerHTML = `<h1 class='text-[80px]'>${[...newArr]}</h1>`;
  }, 1000);
  return () => {
    clearTimeout();
  };
});

let NextArr = [...arr].reduce((x, y) => {
  return x < y ? (x = y) : y;
}, 0);

console.log(NextArr);

let InnerChild = document.createElement("div");
NewElem.appendChild(InnerChild);
InnerChild.innerHTML = `<div class='text-[50px]'>Hello Inner</div>`;

InnerChild.addEventListener("mouseover", () => {
  let FilteredArr = ArrOfObject.filter((i) => {
    if (i.age > 10 && i.age < 100) {
      return i.FirstName;
    }
  });
  let MappedData = FilteredArr.map((m) => {
    return `<br/>` + `Name:${m.FirstName}` + `<br/>` + `age:${m.age}`;
  });

  InnerChild.innerHTML = `<div>${MappedData}</div>`;
});

let InnerChild2 = document.createElement("div");
NewElem.appendChild(InnerChild2);
InnerChild2.innerHTML = `<div class='text-[50px]'>Reduce</div>`
InnerChild2.addEventListener("mouseover", () => {
  let ReduceData = ArrOfObject.reduce((acc, curr) => {
    if(acc[curr.age]){
       acc[curr.age] = ++acc[curr.age]
    }else{
       acc[curr.age] = 1
    }
    return acc;
  }, {});

  console.log(ReduceData)
});


