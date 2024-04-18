
function checkWeather() {
    let body=document.querySelector("body");
    let box=document.querySelector(".outer")
    console.log("I am just being clicked")
    let myInput=document.querySelector("#myTemp");
    let temp=myInput.value;
    console.log("current temp is", temp);
    if(temp>=20&&temp<30){
    body.style.backgroundColor="orange";
    outer.style.backgroundColor="purple";
    console.log("it feels sunny and warm");
}else if (temp>10&&temp<20){
    body.style.backgroundColor="lightblue";
    outer.style.backgroundColor="red";
    console.log("it feels cold");
}else if (temp>=30){
    body.style.backgroundColor="gray";
    outer.style.backgroundColor="violet";
    console.log("it is boiling hot");
}else if (temp<10){
    body.style.backgroundColor="red";
    outer.style.backgroundColor="lime";
    console.log("it is freezing");
}
}
// // let myFullName = "Pepper Ren"
// let myName="pepper";
// let mySirname="ren";
// let myFullName=`my full name is ${myName} ${mySirname}`
// console.log(myFullName)
// let temp=17;
// let temp = prompt ("what is today's temperature?")
// if(temp>=20&&temp<30)
// {
//     console.log("it feels sunny and warm");
// }
// else if (temp>10&&temp<20)
// {
//     console.log("it feels cold");
// }else if (temp>=30){
//     console.log("it is boiling hot");
// }else if (temp<10){
//     console.log("it is freezing");
// }

