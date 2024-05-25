const myVideo=document.querySelector("#my-video");
console.log(myVideo);

const play=document.querySelector("#play");
console.log(play);

play.addEventListener("click", toggleVideo);

const playImg=document.querySelector("#play-img");
console.log(playImg);

function toggleVideo(){
    if(myVideo.paused || myVideo.ended){
        playImg.src="https://img.icons8.com/ios-glyphs/30/play--v2.png";
        myVideo.play();
    }else{
        playImg.src="https://img.icons8.com/ios-glyphs/30/pause--v2.png";
        myVideo.pause();
    }
}

// mute button
const mute=document.querySelector("#mute");

mute.addEventListener("click", toggleSound);

function toggleSound(){
    if(myVideo.muted){
        myVideo.muted=false;
        mute.style.backgroundColor="blue";
    }else{
        myVideo.muted=true;
        mute.style.backgroundColor="red";
    }
}

// progress bar
myVideo.addEventListener("timeupdate", undateProgressBar);

const progressBarFill=document.querySelector("#progress-bar-fill");
console.log(progressBarFill);

function undateProgressBar()
{
    const progress=(myVideo.currentTime / myVideo.duration) *100;
    console.log(progress);
    progressBarFill.style.width=progress+"%";
}

// volume down
const volumeDown=document.querySelector("#volumedown");
console.log(volumeDown);

volumeDown.addEventListener("click", decreaseVolume);

function decreaseVolume()
{
    if(myVideo.volume >0.11){
        myVideo.volume -=0.1;
    }
}

// volumeUp
const volumeUp=document.querySelector("#volumeup");
console.log(volumeUp);

volumeUp.addEventListener("click", increaseVolume);

function increaseVolume()
{
    if(myVideo.volume <0.9){
        myVideo.volume +=0.1;
    }
}



