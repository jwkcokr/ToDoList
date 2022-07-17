const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();

    const years = date.getFullYear();
    const months = String(date.getMonth()+1).padStart(2,"0");
    const dates = String(date.getDate()).padStart(2, "0");
    
    clock.innerText = `${years}.${months}.${dates}`;
}

getClock();