const profile=document.querySelector("#profile");
console.log(profile);

const profileMenu =document.querySelector("#profile-content");

profile.addEventListener("click", toggleMenu);

function toggleMenu(){
    profileMenu.classList.toggle("show");
}