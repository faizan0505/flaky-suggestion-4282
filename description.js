let res = document.querySelector("#res").addEventListener("click",()=>{
    window.scrollTo({top: 1250, behavior:"smooth"})
})

let check_in = document.querySelector("#in");
let check_out = document.querySelector("#out");
let reserve = document.querySelector(".but");

reserve.addEventListener("click",()=>{
    if(check_in.value == "" || check_out.value == ""){
        alert("Please select the date for Check-In & Check-Out")
    }
})
document.querySelector(".butt").addEventListener("click",()=>{
    if(check_in.value == "" || check_out.value == ""){
        alert("Please select the date for Check-In & Check-Out")
    }
})
document.querySelector(".butto").addEventListener("click",()=>{
    if(check_in.value == "" || check_out.value == ""){
        alert("Please select the date for Check-In & Check-Out")
    }
})
document.querySelector(".button").addEventListener("click",()=>{
    if(check_in.value == "" || check_out.value == ""){
        alert("Please select the date for Check-In & Check-Out")
    }
})