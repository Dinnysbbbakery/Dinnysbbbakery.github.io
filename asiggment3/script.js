let draggedElement=null;

const one=document.querySelector(".item2");
const two=document.querySelector(".item5");
const three=document.querySelector(".item6");
const centre1=document.querySelector(".position1");
const centre2=document.querySelector(".position2");
const centre3=document.querySelector(".position3");

one.addEventListener("dragstart", startDrag);
// two.addEventListener("dragstart", startDrag);

function startDrag(){
    draggedElement=one;
}

centre1.addEventListener("dragover", endDrag);

function endDrag(event){
    event.preventDafault();
}

centre1.addEventListener("drop", handleDrop);

function handleDrop(){
    if (draggedElement){
        const 
    }
}



