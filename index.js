window.addEventListener('load', ()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");

    //Let's get going with the sound
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime=0;
            sounds[index].play();
        })
    })
});