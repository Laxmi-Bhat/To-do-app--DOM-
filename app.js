let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
   let item = document.createElement("li");
   item.innerText = inp.value;

   let delBtn = document.createElement("button");
   delBtn.classList.add("delete");
   delBtn.innerText ="Delete";
   
   item.appendChild(delBtn);
   ul.appendChild(item);
    inp.value = "";


// let delBtns = document.querySelectorAll(".delete");
// for(let delBt of delBtns){
//     delBt.addEventListener("click", function(){ 
//        let par = this.parentElement;

//         console.log(par);
//         par.remove();
//     });
// }

});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }
   
});