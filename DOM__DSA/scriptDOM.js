const head = document.getElementById("head");
const btn = document.querySelector("#button");
const output = document.getElementById("output");
let ul = document.createElement("ul");
let li = document.createElement("li");


btn.onclick = () => {
  const Elements = document.getElementsByName("lang");
  Elements.forEach((t) => {
    const changeText = (t.onchange = (e) => e.target.value);

    if (changeText) {
      
      //AppendChild
      output.appendChild(ul);
      ul.appendChild(li);

      //Buttons and EventListeners
      let Update = document.createElement("button");
      Update.classList.add("update__btn")
      Update.addEventListener("click",UpdateData)
      let Delete = document.createElement("button");
      Delete.classList.add("delete__btn")
      Update.innerText = "Update";
      Delete.innerText = "Delete"
      output.appendChild(Update);
      output.appendChild(Delete);
      console.log((li.textContent = t.value));
      t.value = "";
    } else {
      return null;
    }
  });
};

function UpdateData(){
  let inputUpdate = document.createElement("input");
  li.appendChild(inputUpdate);
  inputUpdate.classList.add("update__input");
  inputUpdate.setAttribute("type",Text
  )

}
