const close =document.querySelector(".ready");
const box =document.querySelector(".rules")

close.addEventListener('click', function(){
    box.style.display="none";
});

const item1 = document.querySelector("#end-gun");
console.log(item1);

let dragItem1 = null;

item1.addEventListener("dragstart", startDragItem1);

function startDragItem1() {
    console.log("item 1 is dragged");
    dragItem1 = item1;
}

const position3 = document.querySelector(".position3");
console.log(position3);

const dropEndGun = document.querySelector("#drop-end-gun");
console.log(dropEndGun);

dropEndGun.addEventListener("dragover", endDragItem1);

function endDragItem1(event) {
  event.preventDefault();
}

dropEndGun.addEventListener("drop", handleDropEndGun);

function handleDropEndGun()
{
    if(dragItem1)
        {
            const src = dragItem1.src;
            console.log(src);
            dropEndGun.src = src;
        }
}

// function handleDropItem1() {
//     console.log("dragged item", dragItem1);
//   if (dragItem1) {
//     const src = dragItem1.src;
//     console.log("dragged image", src);
//     position3.innerHTML = `<img src="${src}" alt="">`;
//     console.log(position3);
//     dragItem1 = null;
//   }
// }



// let draggedElement=null;

// const one=document.querySelector(".item2");
// const two=document.querySelector(".item5");
// const three=document.querySelector(".item6");
// const centre1=document.querySelector(".position1");
// const centre2=document.querySelector(".position2");
// const centre3=document.querySelector(".position3");

// one.addEventListener("dragstart", startDrag);
// two.addEventListener("dragstart", startDrag);

// function startDrag(){
//     draggedElement=one;
// }

// centre1.addEventListener("dragover", endDrag);

// function endDrag(event){
//     event.preventDafault();
// }

// centre1.addEventListener("drop", handleDrop);

// function handleDrop(){
//     if (draggedElement){
//         const 
//     }
// }

// function endDrag(){
//     centre1.prepend(one);
// }






