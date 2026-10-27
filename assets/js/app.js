// let list = Array.from(
//     document.getElementsByClassName("list-group")
// );

// list[0].className += " text-danger";
// list[1].className += " text-primary";
// list[2].className += " text-success";

// querySelector - single selector

// let list1 = document.querySelector("#List1");
// list1.style.color ="blue";

// let list2 =document.querySelector(".list-group-item");
// list2.classList.add("bg-warning")

let list3 = document.querySelector("#List2 li:nth-child(2)")
list3.innerText ="TypeScript"

let list4 = document.querySelector("#List3 li:nth-child(3)");
list4.classList.add("bg-secondary")

 let heading1= document.querySelector("#heading1")
 heading1.style.textAlign ="center"
 heading1.style.padding ="5px"
heading1.classList.add("bg-info")
heading1.classList.add("text-white")

let heading2 = document.querySelector("#heading2")
heading2.style.background = "#e3ac2b"
heading2.style.color="white"
heading2.style.textAlign ="center"
heading2.style.padding="5px"

let heading3 = document.querySelector("#heading3")
heading3.style.backgroundColor = "#ea4a10";
heading3.style.color ="white";
heading3.style.textAlign = "center";
heading3.style.padding ="5px";

let List2 = [...document.getElementsByTagName("li")
];
console.log(List2)
List2.forEach(li=>{
   li.classList.add('bg-dark')
   li.classList.add('text-white')
   li.classList.add('font-weight-bold')
});

let list6 =ulList[1].getElementsByTagName("li")
for(let i=0; i<list6.length;i++){
    list6[i].classList.add("bg-info")
}
console.log(list6[i])




























// querySelectorAll - mutiple selector


// let list5 = document.querySelectorAll("li");
// list5.forEach(li=>{
//     li.classList.add("bg-primary");
// });

// let list6 =document.querySelectorAll(".list-group-item");




